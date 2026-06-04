import ibat from "../content/ibat.json";
import { Disclaimer } from "../components/Disclaimer";

export function Ibat() {
  return (
    <>
      <div className="card">
        <h2>IBATs na Síndrome de Alagille</h2>
        <p className="muted">{ibat.note}</p>
      </div>

      <div className="card">
        <h3>Critérios e emprego</h3>
        <ul className="list-reset">
          {ibat.criteria.map((c) => (
            <li className="kv" key={c.topic}>
              <span className="k">{c.topic}</span>
              <span className="v">{c.content}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Referência farmacológica</h3>
        {ibat.drugs.map((d) => (
          <div key={d.name} className="exam-item">
            <strong>{d.name}</strong>
            <p className="muted" style={{ margin: "6px 0 2px" }}>
              Indicação (FDA): {d.fdaIndication} · {d.ageLabel}
            </p>
            <p style={{ margin: 0 }}>{d.dosing}</p>
          </div>
        ))}
        <div className="alert" role="note">
          <strong>Nota regulatória:</strong> {ibat.regulatoryNote}
        </div>
      </div>

      <Disclaimer />
    </>
  );
}
