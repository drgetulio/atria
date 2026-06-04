import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Triage } from "./pages/Triage";
import { Exams } from "./pages/Exams";
import { Ibat } from "./pages/Ibat";
import { Learn } from "./pages/Learn";
import { Glossary } from "./pages/Glossary";
import { About } from "./pages/About";

const tabs = [
  { to: "/", label: "Início", ico: "🏠", end: true },
  { to: "/triagem", label: "Triagem", ico: "✓" },
  { to: "/exames", label: "Exames", ico: "🧪" },
  { to: "/ibat", label: "IBATs", ico: "💊" },
  { to: "/aprender", label: "Aprender", ico: "📖" },
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="appbar">
        <span className="mark" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round">
            <path d="M32 14 L32 50" />
            <path d="M16 28 C24 20 40 20 48 28" />
            <path d="M16 40 C24 48 40 48 48 40" />
          </svg>
        </span>
        <h1>Alagille</h1>
        <span className="sub">apoio ao diagnóstico</span>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/triagem" element={<Triage />} />
          <Route path="/exames" element={<Exams />} />
          <Route path="/ibat" element={<Ibat />} />
          <Route path="/aprender" element={<Learn />} />
          <Route path="/glossario" element={<Glossary />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>

      <nav className="tabbar" aria-label="Navegação principal">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="ico" aria-hidden="true">{t.ico}</span>
            {t.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
