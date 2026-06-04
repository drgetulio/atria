import { Link } from "react-router-dom";
import { Disclaimer, ContentMeta } from "../components/Disclaimer";

export function Home() {
  return (
    <>
      <div className="card">
        <h2>Reconhecer a Síndrome de Alagille</h2>
        <p className="muted">
          Apoio ao médico não especialista para suspeitar precocemente, encaminhar
          corretamente e conhecer os critérios de indicação dos IBATs.
        </p>
        <Link className="btn" to="/triagem">Iniciar triagem</Link>
      </div>

      <div className="card">
        <h3>O que você encontra aqui</h3>
        <ul>
          <li><Link to="/triagem">Triagem</Link>: critérios clínicos em linguagem simples (3 de 7; 2 com história familiar).</li>
          <li><Link to="/exames">Exames</Link>: o que pedir e o acesso no SUS.</li>
          <li><Link to="/ibat">IBATs</Link>: critérios de indicação e referência farmacológica.</li>
          <li><Link to="/aprender">Aprender</Link> e <Link to="/glossario">Glossário</Link>: termos médicos explicados.</li>
        </ul>
      </div>

      <Disclaimer />
      <div className="card">
        <ContentMeta />
        <p className="muted"><Link to="/sobre">Sobre, privacidade e referências</Link></p>
      </div>
    </>
  );
}
