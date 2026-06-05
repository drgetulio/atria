import meta from "../content/meta.json";
import { ContentMeta, Disclaimer } from "../components/Disclaimer";

const credit = meta.credit;

export function About() {
  return (
    <>
      <div className="card">
        <h2>Sobre o Alagille</h2>
        <p>
          Ferramenta de apoio à decisão clínica e educação médica para o reconhecimento
          da Síndrome de Alagille e a indicação dos IBATs, destinada a profissionais de saúde.
        </p>
        <ContentMeta />
      </div>

      <div className="card">
        <p className="eyebrow">Material original</p>
        <h3>Créditos e atribuição</h3>
        <p className="muted">{credit.statement}</p>

        <ul className="list-reset" style={{ marginTop: 12 }}>
          <li className="kv">
            <span className="k">Documento</span>
            <span className="v">{credit.document}</span>
          </li>
          <li className="kv">
            <span className="k">Publicação</span>
            <span className="v">{credit.publication} · ISBN {credit.isbn}</span>
          </li>
          <li className="kv">
            <span className="k">Autores</span>
            <span className="v">{credit.authors.join(", ")}</span>
          </li>
          <li className="kv">
            <span className="k">Revisores</span>
            <span className="v">{credit.reviewers.join(", ")}</span>
          </li>
          <li className="kv">
            <span className="k">Vínculos</span>
            <span className="v">{credit.affiliations.join(" · ")}</span>
          </li>
        </ul>

        <p className="muted" style={{ marginTop: 12 }}>
          © Sociedade Brasileira de Pediatria (SBP) e respectivos autores. Todos os direitos do
          material original reservados aos detentores. Reprodução adaptada para fins educacionais.
        </p>
      </div>

      <div className="card">
        <h3>Privacidade (LGPD)</h3>
        <p className="muted">
          O app não coleta dados de pacientes por padrão. A triagem é processada no próprio
          dispositivo e o resumo de encaminhamento é gerado localmente, sem identificação pessoal.
        </p>
      </div>

      <div className="card">
        <h3>Principais referências</h3>
        <ul className="muted">
          <li>Diretriz SBP nº 22 (2026) — Síndrome de Alagille e os IBATs.</li>
          <li>GeneReviews® — Alagille Syndrome (NCBI).</li>
          <li>Gonzales E. et al. ICONIC (maralixibat). The Lancet. 2021.</li>
          <li>Hansen BE. et al. GALA / event-free survival. Hepatology. 2024.</li>
          <li>FDA — Prescribing Information: LIVMARLI, BYLVAY.</li>
        </ul>
      </div>

      <Disclaimer />
    </>
  );
}
