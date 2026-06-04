import { useState } from "react";
import glossary from "../content/glossary.json";
import type { GlossaryTerm } from "../types";

const byId = new Map<string, GlossaryTerm>(
  (glossary.terms as GlossaryTerm[]).map((t) => [t.id, t]),
);

/**
 * Termo técnico clicável que revela explicação em linguagem acessível.
 * Implementa o princípio do PRD (RF-1.7 / RF-4.5): o médico não especialista
 * nunca precisa sair do app para entender um termo.
 */
export function TermTooltip({ id, children }: { id: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const term = byId.get(id);
  if (!term) return <>{children ?? id}</>;

  return (
    <span>
      <button
        type="button"
        className="term-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {children ?? term.term}
      </button>
      {open && (
        <span className="term-pop" role="note">
          <strong>{term.term}.</strong> {term.plain}
          <br />
          <span className="muted">Como reconhecer: {term.recognize}</span>
        </span>
      )}
    </span>
  );
}
