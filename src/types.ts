export type SusAccess = "available" | "limited" | "unavailable";

export type SuspicionLevel = "low" | "moderate" | "high";

export interface Criterion {
  id: string;
  term: string;
  plain: string;
  simpleQuestion: string;
  howToRecognize: string;
  frequency: string;
  glossaryRefs: string[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  plain: string;
  recognize: string;
}

export interface TriageInput {
  /** ids dos critérios presentes */
  selected: string[];
  /** história familiar de ALGS reduz o limiar de 3 para 2 */
  familyHistory: boolean;
  /** colestase persistente e/ou ductopenia: gatilho isolado de encaminhamento */
  redFlagCholestasis: boolean;
  /** idade em meses (para alerta de diagnóstico diferencial) */
  ageMonths?: number;
}

export interface TriageResult {
  count: number;
  threshold: number;
  level: SuspicionLevel;
  referral: boolean;
  recommendation: string;
  differentialAlert?: string;
}
