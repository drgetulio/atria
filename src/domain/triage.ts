import criteriaContent from "../content/criteria.json";
import type { TriageInput, TriageResult } from "../types";

/**
 * Motor de triagem da Síndrome de Alagille.
 *
 * Regra clínica (Diretriz SBP nº 22 / GeneReviews):
 *  - diagnóstico clínico exige >= 3 das 7 características clássicas;
 *  - com história familiar de ALGS, 2 características são suficientes.
 *
 * Regra isolada (red flag): colestase persistente e/ou ductopenia justificam
 * encaminhamento ao especialista mesmo sem fechar o número de critérios.
 *
 * Importante: o resultado expressa GRAU DE SUSPEIÇÃO e CONDUTA, nunca diagnóstico.
 */
export function evaluateTriage(input: TriageInput): TriageResult {
  const validIds = new Set(criteriaContent.criteria.map((c) => c.id));
  // dedup + apenas ids válidos
  const count = new Set(input.selected.filter((id) => validIds.has(id))).size;

  const threshold = input.familyHistory
    ? criteriaContent.rule.thresholdWithFamilyHistory
    : criteriaContent.rule.thresholdDefault;

  let level: TriageResult["level"];
  if (count >= threshold) {
    level = "high";
  } else if (count >= 1 || input.redFlagCholestasis) {
    level = "moderate";
  } else {
    level = "low";
  }

  // O red flag força ao menos suspeição moderada e encaminhamento.
  const referral = level === "high" || input.redFlagCholestasis;

  const recommendation = buildRecommendation(level, referral, input.redFlagCholestasis);

  const differentialAlert =
    input.redFlagCholestasis ||
    input.selected.includes("cholestasis")
      ? typeof input.ageMonths === "number" &&
        input.ageMonths <= criteriaContent.differential.ageMonthsThreshold
        ? criteriaContent.differential.alert
        : undefined
      : undefined;

  return { count, threshold, level, referral, recommendation, differentialAlert };
}

function buildRecommendation(
  level: TriageResult["level"],
  referral: boolean,
  redFlag: boolean,
): string {
  if (referral && level !== "high" && redFlag) {
    return "Colestase persistente/ductopenia é gatilho isolado de investigação: encaminhe ao gastroenterologista/hepatologista pediátrico e inicie os exames de primeira linha.";
  }
  switch (level) {
    case "high":
      return "Alta suspeição de Síndrome de Alagille. Encaminhe ao gastroenterologista/hepatologista pediátrico e solicite os exames indicados.";
    case "moderate":
      return "Suspeição moderada. Solicite os exames de primeira linha, registre os achados e reavalie; considere encaminhamento conforme evolução.";
    case "low":
    default:
      return "Suspeição baixa no momento. Mantenha vigilância para sinais de alarme (icterícia prolongada, fezes claras, urina escura, sopro, coceira) e reavalie se surgirem.";
  }
}
