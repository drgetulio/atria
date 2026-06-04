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
        <span className="logo" aria-hidden="true">🩺</span>
        <h1>Alagille</h1>
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
