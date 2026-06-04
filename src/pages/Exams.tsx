import exams from "../content/exams.json";
import type { SusAccess } from "../types";

const tagLabel: Record<SusAccess, string> = {
  available: "Disponível no SUS",
  limited: "Acesso limitado",
  unavailable: "Indisponível no SUS",
};

export function Exams() {
  return (
    <>
      <div className="card">
        <h2>Exames e encaminhamento</h2>
        <p className="muted">{exams.note}</p>
      </div>

      {exams.categories.map((cat) => (
        <div className="card" key={cat.category}>
          <h3>{cat.category}</h3>
          {cat.items.map((item) => (
            <div key={item.exam} style={{ paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid var(--c-border)" }}>
              <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                <strong>{item.exam}</strong>
                <span className={`tag ${item.susAccess}`}>{tagLabel[item.susAccess as SusAccess]}</span>
              </div>
              <p className="muted" style={{ margin: "4px 0" }}>{item.purpose}</p>
              <p className="muted" style={{ margin: 0 }}>{item.susNote}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
