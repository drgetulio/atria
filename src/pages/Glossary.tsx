import { useMemo, useState } from "react";
import glossary from "../content/glossary.json";
import type { GlossaryTerm } from "../types";

const terms = (glossary.terms as GlossaryTerm[]).slice().sort((a, b) =>
  a.term.localeCompare(b.term, "pt-BR"),
);

export function Glossary() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(needle) ||
        t.plain.toLowerCase().includes(needle) ||
        t.recognize.toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <>
      <div className="card">
        <h2>Glossário / Tradutor clínico</h2>
        <p className="muted">Termos médicos em linguagem simples, com como reconhecer na prática.</p>
        <div className="field">
          <label htmlFor="q">Buscar termo</label>
          <input
            id="q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ex.: embriotóxon, colestase…"
            style={{ width: "100%", minHeight: 44, padding: "8px 10px", border: "1px solid var(--c-border)", borderRadius: 8 }}
          />
        </div>
      </div>

      <div className="card">
        <ul className="list-reset">
          {filtered.map((t) => (
            <li key={t.id} style={{ paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid var(--c-border)" }}>
              <strong>{t.term}</strong>
              <p style={{ margin: "4px 0" }}>{t.plain}</p>
              <p className="muted" style={{ margin: 0 }}>Como reconhecer: {t.recognize}</p>
            </li>
          ))}
          {filtered.length === 0 && <li className="muted">Nenhum termo encontrado.</li>}
        </ul>
      </div>
    </>
  );
}
