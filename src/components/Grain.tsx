import { useCurrentFrame } from "remotion";

/**
 * Textura de grão de filme animada — dá a sensação de papel/película antiga.
 * Usa um padrão SVG de turbulência fracionária que se desloca a cada frame.
 */
export const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.16 }) => {
  const frame = useCurrentFrame();
  // Embaralha a semente para o grão "tremer" como película.
  const seed = (frame % 8) + 1;

  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        mixBlendMode: "multiply",
        pointerEvents: "none",
      }}
    >
      <filter id={`grain-${seed}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves={4}
          stitchTiles="stitch"
          seed={seed}
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${seed})`} />
    </svg>
  );
};
