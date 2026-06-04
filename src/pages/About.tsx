import { ContentMeta, Disclaimer } from "../components/Disclaimer";

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
