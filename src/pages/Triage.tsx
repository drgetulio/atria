import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import criteriaContent from "../content/criteria.json";
import meta from "../content/meta.json";
import type { Criterion } from "../types";
import { evaluateTriage } from "../domain/triage";
import { Disclaimer } from "../components/Disclaimer";

const criteria = criteriaContent.criteria as Criterion[];

const levelLabel: Record<string, string> = {
  high: "Alta suspeição",
  moderate: "Suspeição moderada",
  low: "Suspeição baixa",
};

export function Triage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [familyHistory, setFamilyHistory] = useState(false);
  const [redFlag, setRedFlag] = useState(false);
  const [ageMonths, setAgeMonths] = useState<string>("");
  const [simpleMode, setSimpleMode] = useState(true);
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () =>
      evaluateTriage({
        selected,
        familyHistory,
        redFlagCholestasis: redFlag,
        ageMonths: ageMonths === "" ? undefined : Number(ageMonths),
      }),
    [selected, familyHistory, redFlag, ageMonths],
  );

  function toggle(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
    setCopied(false);
  }

  const referralText = useMemo(() => buildReferral(selected, familyHistory, redFlag, ageMonths, result), [
    selected, familyHistory, redFlag, ageMonths, result,
  ]);

  async function copyReferral() {
    try {
      await navigator.clipboard.writeText(referralText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <div className="card">
        <div className="spread">
          <h2 style={{ margin: 0 }}>Triagem clínica</h2>
          <button type="button" className="term-trigger toggle-link" onClick={() => setSimpleMode((v) => !v)}>
            {simpleMode ? "Ver termos técnicos" : "Ver perguntas simples"}
          </button>
        </div>
        <p className="muted" style={{ marginBottom: 0 }}>
          Marque as características presentes. {criteriaContent.rule.note}
        </p>
      </div>

      <div className="card">
        <h3>Características clínicas</h3>
        {criteria.map((c) => {
          const isSel = selected.includes(c.id);
          return (
            <label key={c.id} className={`check-item ${isSel ? "selected" : ""}`}>
              <input type="checkbox" checked={isSel} onChange={() => toggle(c.id)} />
              <span className="body">
                <span className="item-head">
                  <span className="term">{simpleMode ? c.simpleQuestion : c.term}</span>
                  <span className="freq">{c.frequency}</span>
                </span>
                <span className="desc">{simpleMode ? c.plain : c.howToRecognize}</span>
              </span>
            </label>
          );
        })}
      </div>

      <div className="card">
        <h3>Fatores adicionais</h3>
        <label className="check-item">
          <input type="checkbox" checked={familyHistory} onChange={(e) => setFamilyHistory(e.target.checked)} />
          <span className="body">
            <span className="item-head"><span className="term">História familiar de Síndrome de Alagille</span></span>
            <span className="desc">Reduz o limiar para 2 critérios.</span>
          </span>
        </label>
        <label className="check-item">
          <input type="checkbox" checked={redFlag} onChange={(e) => setRedFlag(e.target.checked)} />
          <span className="body">
            <span className="item-head"><span className="term">{criteriaContent.redFlag.label}</span></span>
            <span className="desc">{criteriaContent.redFlag.action}</span>
          </span>
        </label>
        <div className="field">
          <label htmlFor="age">Idade (meses) — opcional</label>
          <input
            id="age"
            type="number"
            min={0}
            inputMode="numeric"
            value={ageMonths}
            onChange={(e) => setAgeMonths(e.target.value)}
          />
        </div>
      </div>

      <div className="card" aria-live="polite">
        <h3>Resultado</h3>
        <p className={`badge ${result.level}`}>
          <span className="dot" aria-hidden="true" />
          {levelLabel[result.level]} — {result.count} de {result.threshold} critério(s)
        </p>
        <p>{result.recommendation}</p>
        {result.differentialAlert && (
          <div className="alert" role="alert">
            <strong>Diagnóstico diferencial:</strong> {result.differentialAlert}
          </div>
        )}
        <p className="muted">
          Veja os <Link to="/exames">exames sugeridos</Link> e como solicitá-los.
        </p>
      </div>

      <div className="card">
        <h3>Resumo para encaminhamento</h3>
        <p className="muted">Texto sem dados pessoais — copie para a referência/contrarreferência.</p>
        <pre className="referral-box">{referralText}</pre>
        <button type="button" className="btn secondary" onClick={copyReferral}>
          {copied ? "Copiado ✓" : "Copiar resumo"}
        </button>
      </div>

      <Disclaimer />
    </>
  );
}

function buildReferral(
  selected: string[],
  familyHistory: boolean,
  redFlag: boolean,
  ageMonths: string,
  result: ReturnType<typeof evaluateTriage>,
): string {
  const present = criteria.filter((c) => selected.includes(c.id)).map((c) => `- ${c.term}`);
  const lines = [
    "RESUMO DE SUSPEIÇÃO — SÍNDROME DE ALAGILLE",
    ageMonths ? `Idade: ${ageMonths} meses` : null,
    `Características presentes (${result.count}):`,
    present.length ? present.join("\n") : "- (nenhuma marcada)",
    familyHistory ? "História familiar de ALGS: sim" : null,
    redFlag ? `Gatilho: ${criteriaContent.redFlag.label}` : null,
    `Grau de suspeição: ${levelLabel[result.level]} (limiar ${result.threshold})`,
    `Conduta: ${result.recommendation}`,
    result.differentialAlert ? `Atenção: ${result.differentialAlert}` : null,
    `(Gerado pelo app Alagille — conteúdo v${meta.contentVersion}. Ferramenta de apoio; não é diagnóstico.)`,
  ].filter(Boolean);
  return lines.join("\n");
}
