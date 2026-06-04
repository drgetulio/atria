// Gera os ícones PWA do app Alagille a partir de SVGs.
// Uso: node scripts/gen-icons.mjs   (requer sharp instalado localmente)
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public");
mkdirSync(outDir, { recursive: true });

const TEAL = "#0d5c63";

// Glifo: fígado estilizado com ductos biliares (linhas brancas).
const glyph = (cx, cy, s) => `
  <g transform="translate(${cx} ${cy}) scale(${s})" fill="none"
     stroke="#ffffff" stroke-width="7" stroke-linecap="round">
    <path d="M0 -34 L0 34" />
    <path d="M-26 -16 C-15 -28 15 -28 26 -16" />
    <path d="M-26 4 C-15 16 15 16 26 4" />
  </g>`;

// Ícone padrão: fundo arredondado + glifo grande.
const standard = (size) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
    <rect width="512" height="512" rx="110" fill="${TEAL}"/>
    ${glyph(256, 256, 2.4)}
  </svg>`;

// Ícone maskable: fundo full-bleed (sem cantos) + glifo dentro da zona segura (~60%).
const maskable = (size) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
    <rect width="512" height="512" fill="${TEAL}"/>
    ${glyph(256, 256, 1.9)}
  </svg>`;

const jobs = [
  { name: "icon-192.png", svg: standard(192) },
  { name: "icon-512.png", svg: standard(512) },
  { name: "icon-512-maskable.png", svg: maskable(512) },
  { name: "apple-touch-icon.png", svg: standard(180) },
];

for (const { name, svg } of jobs) {
  await sharp(Buffer.from(svg)).png().toFile(join(outDir, name));
  console.log("gerado", name);
}
