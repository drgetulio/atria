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
            <div key={item.exam} className="exam-item">
              <div className="exam-head">
                <strong>{item.exam}</strong>
                <span className={`tag ${item.susAccess}`}>{tagLabel[item.susAccess as SusAccess]}</span>
              </div>
              <p className="muted" style={{ margin: "6px 0 2px" }}>{item.purpose}</p>
              <p className="muted" style={{ margin: 0 }}>{item.susNote}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
