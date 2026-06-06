/**
 * Paleta e tokens de design retrô (mid-century / anos 70).
 * Tons quentes e terrosos, papel envelhecido e acentos vibrantes.
 */
export const COLORS = {
  cream: "#F4E7D3", // papel envelhecido (fundo principal)
  creamDeep: "#EAD9BC",
  ink: "#2B2117", // texto escuro / contorno
  navy: "#2C4251", // azul petróleo profundo
  teal: "#1F7A6E", // verde-azulado retrô
  tealLight: "#3CA08F",
  mustard: "#E8B33D", // mostarda
  orange: "#E0683B", // laranja queimado
  tomato: "#C9442E", // vermelho tomate
  pink: "#E6A28C", // rosa terroso
  brown: "#7A4A2B",
} as const;

export const FPS = 30;
export const WIDTH = 3840;
export const HEIGHT = 2160;
export const DURATION_IN_FRAMES = 10 * FPS; // 10 segundos
