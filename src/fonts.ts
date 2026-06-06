import { continueRender, delayRender, staticFile } from "remotion";

/**
 * Fontes auto-hospedadas (public/fonts) — carregadas localmente para
 * funcionar offline, sem depender da rede do Google Fonts no render.
 */
export const DISPLAY = "Anton"; // display condensado de cartaz
export const SERIF = "Fraunces"; // serifa retrô (acentos / itálico)
export const SANS = "Space Grotesk"; // sans geométrica de apoio

let started = false;

export const ensureFonts = (): void => {
  if (started || typeof document === "undefined") {
    return;
  }
  started = true;

  const handle = delayRender("Carregando fontes locais");

  const finish = () => {
    Promise.all([
      document.fonts.load(`400 100px "${DISPLAY}"`),
      document.fonts.load(`600 100px "${SERIF}"`),
      document.fonts.load(`900 100px "${SERIF}"`),
      document.fonts.load(`italic 900 100px "${SERIF}"`),
      document.fonts.load(`500 100px "${SANS}"`),
      document.fonts.load(`700 100px "${SANS}"`),
    ])
      .then(() => document.fonts.ready)
      .then(() => continueRender(handle))
      .catch(() => continueRender(handle));
  };

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = staticFile("fonts/fonts.css");
  link.onload = finish;
  link.onerror = () => continueRender(handle);
  document.head.appendChild(link);
};

// Dispara o carregamento assim que o módulo é importado.
ensureFonts();
