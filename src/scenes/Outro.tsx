import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS } from "../theme";
import { DISPLAY, SERIF, SANS } from "../fonts";
import { Sunburst } from "../components/Sunburst";
import { PosterFrame } from "../components/PosterFrame";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = (delay: number, damping = 14) =>
    spring({ frame, fps, delay, config: { damping, mass: 0.9, stiffness: 120 } });

  const ringIn = pop(0, 20);
  const t1 = pop(8);
  const t2 = pop(16);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.tomato }}>
      <AbsoluteFill style={{ opacity: 0.4 }}>
        <Sunburst color={COLORS.orange} rays={48} speed={0.2} radius={3000} />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 36,
          textAlign: "center",
          padding: 240,
        }}
      >
        <div
          style={{
            opacity: t1,
            transform: `scale(${interpolate(ringIn, [0, 1], [0.7, 1])})`,
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: 230,
            lineHeight: 0.95,
            color: COLORS.cream,
          }}
        >
          Observe. Diferencie.
        </div>
        <div
          style={{
            opacity: t2,
            transform: `translateY(${interpolate(t2, [0, 1], [60, 0])}px)`,
            fontFamily: DISPLAY,
            fontSize: 280,
            color: COLORS.mustard,
            textTransform: "uppercase",
            lineHeight: 0.9,
          }}
        >
          Trate com cautela
        </div>
        <div
          style={{
            opacity: t2,
            fontFamily: SANS,
            fontWeight: 500,
            fontSize: 56,
            letterSpacing: 8,
            color: COLORS.cream,
            marginTop: 30,
            textTransform: "uppercase",
          }}
        >
          A maioria melhora com o tempo
        </div>
      </AbsoluteFill>

      <PosterFrame color={COLORS.cream} />
    </AbsoluteFill>
  );
};
