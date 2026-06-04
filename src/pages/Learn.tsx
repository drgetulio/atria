import { Link } from "react-router-dom";
import criteriaContent from "../content/criteria.json";
import type { Criterion } from "../types";
import { TermTooltip } from "../components/TermTooltip";

const criteria = criteriaContent.criteria as Criterion[];

export function Learn() {
  return (
    <>
      <div className="card">
        <h2>Aprender</h2>
        <p>
          A Síndrome de Alagille (ALGS) é doença genética rara (1:30.000–1:50.000),
          multissistêmica, de <TermTooltip id="autossomica-dominante">herança autossômica dominante</TermTooltip>,
          por variantes em <TermTooltip id="jag1-notch2">JAG1 ou NOTCH2</TermTooltip>.
          Manifesta-se na infância com <TermTooltip id="colestase">colestase</TermTooltip> crônica,{" "}
          <TermTooltip id="prurido">prurido</TermTooltip> intenso e{" "}
          <TermTooltip id="xantoma">xantomas</TermTooltip>.
        </p>
        <div className="alert" role="note">
          <strong>Diagnóstico diferencial:</strong> no lactente com colestase, descartar{" "}
          <TermTooltip id="atresia-biliar">atresia biliar</TermTooltip>.
        </div>
      </div>

      <div className="card">
        <h3>As 7 características clássicas</h3>
        <ul className="list-reset">
          {criteria.map((c) => (
            <li className="kv" key={c.id}>
              <span className="k">{c.term} <span className="freq">{c.frequency}</span></span>
              <span>{c.plain} <em className="muted">{c.howToRecognize}</em></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Mais</h3>
        <p><Link to="/glossario">Glossário / Tradutor clínico</Link> — termos médicos em linguagem simples.</p>
        <p><Link to="/ibat">IBATs</Link> — critérios de indicação e referência farmacológica.</p>
      </div>
    </>
  );
}
