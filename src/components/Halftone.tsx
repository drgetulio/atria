import { WIDTH, HEIGHT } from "../theme";

/**
 * Padrão de meio-tom (bolinhas) típico de impressão retrô / pop art.
 */
export const Halftone: React.FC<{
  color: string;
  size?: number;
  gap?: number;
  opacity?: number;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
}> = ({
  color,
  size = 14,
  gap = 56,
  opacity = 1,
  x = 0,
  y = 0,
  w = WIDTH,
  h = HEIGHT,
}) => {
  const id = `ht-${color.replace("#", "")}-${gap}`;
  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <defs>
        <pattern id={id} x="0" y="0" width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={gap / 2} cy={gap / 2} r={size / 2} fill={color} />
        </pattern>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill={`url(#${id})`} />
    </svg>
  );
};
