import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS } from "../theme";
import { DISPLAY, SERIF, SANS } from "../fonts";
import { Halftone } from "../components/Halftone";
import { Sunburst } from "../components/Sunburst";

export type ConcernProps = {
  index: string; // "01"
  kicker: string; // rótulo curto
  title: string;
  points: string[];
  bg: string;
  accent: string;
  panel: string;
  ink: string;
  Icon: React.FC<{ size?: number; stroke?: string; accent?: string }>;
};

export const Concern: React.FC<ConcernProps> = ({
  index,
  kicker,
  title,
  points,
  bg,
  accent,
  panel,
  ink,
  Icon,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const pop = (delay: number, damping = 15) =>
    spring({ frame, fps, delay, config: { damping, mass: 0.9, stiffness: 130 } });

  // painel deslizando da esquerda
  const panelIn = pop(0, 18);
  const panelX = interpolate(panelIn, [0, 1], [-1700, 0]);

  const numberIn = pop(8, 12);
  const iconIn = pop(12);
  const titleIn = pop(10);

  const exit = interpolate(
    frame,
    [durationInFrames - 9, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: bg, opacity: exit }}>
      <Halftone color={accent} gap={70} size={12} opacity={0.1} />
      <AbsoluteFill style={{ opacity: 0.18 }}>
        <Sunburst color={accent} cx={3300} cy={300} rays={28} radius={2600} speed={-0.1} />
      </AbsoluteFill>

      {/* Painel esquerdo: número grande + ícone */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 1340,
          background: panel,
          transform: `translateX(${panelX}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
          clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)",
        }}
      >
        <div
          style={{
            opacity: numberIn,
            transform: `scale(${interpolate(numberIn, [0, 1], [0.5, 1])})`,
            fontFamily: DISPLAY,
            fontSize: 560,
            lineHeight: 0.8,
            color: accent,
            position: "relative",
          }}
        >
          {index}
        </div>
        <div
          style={{
            opacity: iconIn,
            transform: `rotate(${interpolate(iconIn, [0, 1], [-12, 0])}deg)`,
            background: COLORS.cream,
            borderRadius: 9999,
            width: 540,
            height: 540,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `10px solid ${accent}`,
          }}
        >
          <Icon size={360} stroke={ink} accent={accent} />
        </div>
      </div>

      {/* Conteúdo à direita */}
      <div
        style={{
          position: "absolute",
          left: 1500,
          right: 200,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 44,
        }}
      >
        <div
          style={{
            opacity: titleIn,
            transform: `translateX(${interpolate(titleIn, [0, 1], [120, 0])}px)`,
            fontFamily: SANS,
            fontWeight: 700,
            letterSpacing: 12,
            fontSize: 52,
            color: accent,
            textTransform: "uppercase",
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            opacity: titleIn,
            transform: `translateX(${interpolate(titleIn, [0, 1], [120, 0])}px)`,
            fontFamily: SERIF,
            fontWeight: 900,
            fontSize: 150,
            lineHeight: 0.96,
            color: ink,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 30, marginTop: 20 }}>
          {points.map((p, i) => {
            const b = pop(22 + i * 7);
            return (
              <div
                key={i}
                style={{
                  opacity: b,
                  transform: `translateX(${interpolate(b, [0, 1], [90, 0])}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 32,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: accent,
                    flexShrink: 0,
                    transform: "rotate(45deg)",
                  }}
                />
                <span
                  style={{
                    fontFamily: SANS,
                    fontWeight: 500,
                    fontSize: 70,
                    lineHeight: 1.15,
                    color: ink,
                  }}
                >
                  {p}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
