import { Link } from "react-router-dom";
import { Disclaimer, ContentMeta } from "../components/Disclaimer";

const tiles = [
  { to: "/exames", ico: "🧪", t: "Exames", d: "O que pedir e o acesso no SUS" },
  { to: "/ibat", ico: "💊", t: "IBATs", d: "Indicação e referência" },
  { to: "/aprender", ico: "📖", t: "Aprender", d: "As 7 características" },
  { to: "/glossario", ico: "🔤", t: "Glossário", d: "Termos em linguagem simples" },
];

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="glyph" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round">
            <path d="M32 14 L32 50" />
            <path d="M16 28 C24 20 40 20 48 28" />
            <path d="M16 40 C24 48 40 48 48 40" />
          </svg>
        </div>
        <h2>Reconhecer a Síndrome de Alagille</h2>
        <p>
          Apoio ao médico não especialista para suspeitar cedo, encaminhar com
          segurança e conhecer a indicação dos IBATs.
        </p>
        <Link className="btn on-hero" to="/triagem">Iniciar triagem</Link>
      </section>

      <p className="section-title">Explorar</p>
      <nav className="tile-grid" aria-label="Seções">
        {tiles.map((t) => (
          <Link className="tile" key={t.to} to={t.to}>
            <span className="ico" aria-hidden="true">{t.ico}</span>
            <span className="t">{t.t}</span>
            <span className="d">{t.d}</span>
          </Link>
        ))}
      </nav>

      <Disclaimer />
      <div className="card">
        <ContentMeta />
        <p className="muted" style={{ marginTop: 10 }}>
          <Link to="/sobre">Sobre, privacidade e referências</Link>
        </p>
      </div>
    </>
  );
}
