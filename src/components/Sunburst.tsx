import { useCurrentFrame } from "remotion";
import { WIDTH, HEIGHT } from "../theme";

/**
 * Raios de sol estilo cartaz vintage, girando lentamente.
 */
export const Sunburst: React.FC<{
  cx?: number;
  cy?: number;
  color: string;
  rays?: number;
  radius?: number;
  speed?: number;
  opacity?: number;
}> = ({
  cx = WIDTH / 2,
  cy = HEIGHT / 2,
  color,
  rays = 36,
  radius = 2800,
  speed = 0.15,
  opacity = 1,
}) => {
  const frame = useCurrentFrame();
  const rotation = frame * speed;
  const step = 360 / rays;

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <g transform={`rotate(${rotation} ${cx} ${cy})`}>
        {Array.from({ length: rays }).map((_, i) => {
          const a0 = (i * step * Math.PI) / 180;
          const a1 = ((i * step + step / 2) * Math.PI) / 180;
          const p0 = `${cx + Math.cos(a0) * radius},${cy + Math.sin(a0) * radius}`;
          const p1 = `${cx + Math.cos(a1) * radius},${cy + Math.sin(a1) * radius}`;
          return (
            <path
              key={i}
              d={`M ${cx} ${cy} L ${p0} L ${p1} Z`}
              fill={color}
            />
          );
        })}
      </g>
    </svg>
  );
};
