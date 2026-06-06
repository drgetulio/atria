import { COLORS, WIDTH, HEIGHT } from "../theme";

/**
 * Moldura de cartaz vintage — linhas duplas com cantos arredondados.
 */
export const PosterFrame: React.FC<{ color?: string; inset?: number }> = ({
  color = COLORS.ink,
  inset = 90,
}) => (
  <svg
    width={WIDTH}
    height={HEIGHT}
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
  >
    <rect
      x={inset}
      y={inset}
      width={WIDTH - inset * 2}
      height={HEIGHT - inset * 2}
      rx={48}
      fill="none"
      stroke={color}
      strokeWidth={6}
    />
    <rect
      x={inset + 18}
      y={inset + 18}
      width={WIDTH - (inset + 18) * 2}
      height={HEIGHT - (inset + 18) * 2}
      rx={34}
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeOpacity={0.6}
    />
  </svg>
);
