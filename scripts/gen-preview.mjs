// Mockup visual (não faz parte do app) — apenas para revisão do design.
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "docs");
mkdirSync(outDir, { recursive: true });

const FONT = `-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;
const W = 390, H = 844, GAP = 40;

const glyph = (x, y, s, color = "#fff", sw = 5) => `
  <g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round">
    <path d="M0 -18 L0 18"/><path d="M-16 -3 C-8 -11 8 -11 16 -3"/><path d="M-16 9 C-8 17 8 17 16 9"/>
  </g>`;

const phone = (tx, inner) => `
  <g transform="translate(${tx} 0)">
    <rect x="0" y="0" width="${W}" height="${H}" rx="54" fill="#ffffff"/>
    <rect x="6" y="6" width="${W - 12}" height="${H - 12}" rx="48" fill="#f5f5f7"/>
    <clipPath id="clip${tx}"><rect x="6" y="6" width="${W - 12}" height="${H - 12}" rx="48"/></clipPath>
    <g clip-path="url(#clip${tx})">${inner}</g>
    <rect x="135" y="20" width="120" height="30" rx="15" fill="#000"/>
  </g>`;

const appbar = `
  <g>
    <rect x="6" y="6" width="${W - 12}" height="92" fill="rgba(245,245,247,0.85)"/>
    <rect x="24" y="56" width="34" height="34" rx="10" fill="#0d5c63"/>
    ${glyph(41, 73, 0.78)}
    <text x="68" y="80" font-family="${FONT}" font-size="21" font-weight="700" fill="#1d1d1f">Alagille</text>
    <text x="${W - 24}" y="79" text-anchor="end" font-family="${FONT}" font-size="12" fill="#8e8e93">apoio ao diagnóstico</text>
    <line x1="6" y1="98" x2="${W - 6}" y2="98" stroke="rgba(0,0,0,0.07)"/>
  </g>`;

const tabbar = (active) => {
  const items = [["Início", "⌂"], ["Triagem", "✓"], ["Exames", "🧪"], ["IBATs", "💊"], ["Aprender", "📖"]];
  const tw = (W - 12) / 5;
  return `<g>
    <rect x="6" y="${H - 92}" width="${W - 12}" height="92" fill="rgba(255,255,255,0.9)"/>
    <line x1="6" y1="${H - 92}" x2="${W - 6}" y2="${H - 92}" stroke="rgba(0,0,0,0.07)"/>
    ${items.map(([label, ico], i) => {
      const cx = 6 + tw * i + tw / 2;
      const col = i === active ? "#0a7d8c" : "#8e8e93";
      return `<text x="${cx}" y="${H - 56}" text-anchor="middle" font-size="20" fill="${col}">${ico}</text>
              <text x="${cx}" y="${H - 36}" text-anchor="middle" font-family="${FONT}" font-size="11" font-weight="500" fill="${col}">${label}</text>`;
    }).join("")}
  </g>`;
};

const card = (x, y, w, h, r = 18, fill = "#fff") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" filter="url(#sh)"/>`;

// --------- Tela 1: Home ---------
const home = `
  ${appbar}
  <g>
    <rect x="24" y="118" width="${W - 48}" height="250" rx="24" fill="url(#hero)" filter="url(#sh2)"/>
    <circle cx="${W - 70}" cy="150" r="110" fill="rgba(255,255,255,0.14)"/>
    <rect x="48" y="142" width="56" height="56" rx="16" fill="rgba(255,255,255,0.18)"/>
    ${glyph(76, 170, 1.25)}
    <text x="48" y="240" font-family="${FONT}" font-size="25" font-weight="700" fill="#fff">Reconhecer a</text>
    <text x="48" y="270" font-family="${FONT}" font-size="25" font-weight="700" fill="#fff">Síndrome de Alagille</text>
    <text x="48" y="298" font-family="${FONT}" font-size="13" fill="rgba(255,255,255,0.9)">Suspeitar cedo, encaminhar com segurança</text>
    <text x="48" y="316" font-family="${FONT}" font-size="13" fill="rgba(255,255,255,0.9)">e conhecer a indicação dos IBATs.</text>
    <rect x="48" y="334" width="${W - 96}" height="46" rx="12" fill="#fff"/>
    <text x="${W / 2}" y="362" text-anchor="middle" font-family="${FONT}" font-size="15" font-weight="600" fill="#0d5c63">Iniciar triagem</text>
  </g>
  <text x="30" y="404" font-family="${FONT}" font-size="12" font-weight="600" letter-spacing="1" fill="#8e8e93">EXPLORAR</text>
  ${[["🧪", "Exames", "O que pedir e SUS", 24, 420], ["💊", "IBATs", "Indicação e referência", 207, 420], ["📖", "Aprender", "As 7 características", 24, 540], ["🔤", "Glossário", "Termos simples", 207, 540]]
    .map(([ico, t, d, x, y]) => `${card(x, y, 159, 108)}
      <text x="${x + 18}" y="${y + 42}" font-size="24">${ico}</text>
      <text x="${x + 18}" y="${y + 70}" font-family="${FONT}" font-size="15" font-weight="600" fill="#1d1d1f">${t}</text>
      <text x="${x + 18}" y="${y + 90}" font-family="${FONT}" font-size="11.5" fill="#6e6e73">${d}</text>`).join("")}
  ${card(24, 668, W - 48, 70)}
  <text x="42" y="700" font-family="${FONT}" font-size="12" fill="#6e6e73">⚠️ Ferramenta de apoio. Não substitui</text>
  <text x="42" y="718" font-family="${FONT}" font-size="12" fill="#6e6e73">o julgamento clínico nem é diagnóstico.</text>
  ${tabbar(0)}`;

// --------- Tela 2: Triagem (resultado) ---------
const item = (x, y, w, title, desc, freq, sel) => `
  <rect x="${x}" y="${y}" width="${w}" height="64" rx="12" fill="${sel ? "#e7f3f4" : "#fbfbfd"}" stroke="${sel ? "#0a7d8c" : "rgba(0,0,0,0.07)"}"/>
  <circle cx="${x + 26}" cy="${y + 32}" r="11" fill="${sel ? "#0a7d8c" : "#fff"}" stroke="${sel ? "#0a7d8c" : "#8e8e93"}" stroke-width="2"/>
  ${sel ? `<text x="${x + 26}" y="${y + 37}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">✓</text>` : ""}
  <text x="${x + 46}" y="${y + 28}" font-family="${FONT}" font-size="14" font-weight="600" fill="#1d1d1f">${title}</text>
  <rect x="${x + w - 56}" y="${y + 14}" width="44" height="18" rx="9" fill="rgba(142,142,147,0.16)"/>
  <text x="${x + w - 34}" y="${y + 27}" text-anchor="middle" font-family="${FONT}" font-size="10.5" font-weight="600" fill="#6e6e73">${freq}</text>
  <text x="${x + 46}" y="${y + 48}" font-family="${FONT}" font-size="12" fill="#6e6e73">${desc}</text>`;

const triage = `
  ${appbar}
  ${card(24, 118, W - 48, 92)}
  <text x="42" y="152" font-family="${FONT}" font-size="20" font-weight="700" fill="#1d1d1f">Triagem clínica</text>
  <text x="${W - 42}" y="150" text-anchor="end" font-family="${FONT}" font-size="13" font-weight="500" fill="#0a7d8c">perguntas simples</text>
  <text x="42" y="182" font-family="${FONT}" font-size="12.5" fill="#6e6e73">3 de 7 características (2 com história</text>
  <text x="42" y="199" font-family="${FONT}" font-size="12.5" fill="#6e6e73">familiar).</text>
  ${card(24, 226, W - 48, 244)}
  <text x="42" y="258" font-family="${FONT}" font-size="16" font-weight="600" fill="#1d1d1f">Características clínicas</text>
  ${item(42, 274, W - 84, "Icterícia que não passa?", "Fezes claras, urina escura", "89%", true)}
  ${item(42, 346, W - 84, "Sopro / cardiopatia?", "Estenose pulmonar periférica", "94%", true)}
  ${item(42, 418, W - 84, "Embriotóxon posterior?", "Anel na borda da córnea", "75%", false)}
  ${card(24, 486, W - 48, 168)}
  <text x="42" y="518" font-family="${FONT}" font-size="16" font-weight="600" fill="#1d1d1f">Resultado</text>
  <rect x="42" y="532" width="${W - 84}" height="48" rx="12" fill="#fff0f1"/>
  <circle cx="64" cy="556" r="6" fill="#d70015"/>
  <text x="80" y="561" font-family="${FONT}" font-size="14.5" font-weight="600" fill="#d70015">Alta suspeição — 2 de 2 critérios</text>
  <text x="42" y="606" font-family="${FONT}" font-size="12.5" fill="#1d1d1f">Encaminhe ao gastro/hepato pediátrico</text>
  <text x="42" y="624" font-family="${FONT}" font-size="12.5" fill="#1d1d1f">e solicite os exames indicados.</text>
  ${tabbar(1)}`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W * 2 + GAP}" height="${H}" viewBox="0 0 ${W * 2 + GAP} ${H}">
  <defs>
    <linearGradient id="hero" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#14868f"/><stop offset="0.55" stop-color="#0d5c63"/><stop offset="1" stop-color="#073b40"/>
    </linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="9" flood-color="#000" flood-opacity="0.06"/></filter>
    <filter id="sh2" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="14" stdDeviation="22" flood-color="#000" flood-opacity="0.10"/></filter>
  </defs>
  <rect width="100%" height="100%" fill="#e9e9ec"/>
  ${phone(0, home)}
  ${phone(W + GAP, triage)}
</svg>`;

await sharp(Buffer.from(svg), { density: 144 }).png().toFile(join(outDir, "design-preview.png"));
console.log("gerado docs/design-preview.png");
