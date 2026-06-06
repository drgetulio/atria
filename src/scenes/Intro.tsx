import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { COLORS } from "../theme";
import { DISPLAY, SERIF, SANS } from "../fonts";
import { Sunburst } from "../components/Sunburst";
import { Halftone } from "../components/Halftone";
import { PosterFrame } from "../components/PosterFrame";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const pop = (delay: number, damping = 14) =>
    spring({ frame, fps, delay, config: { damping, mass: 0.9, stiffness: 120 } });

  const sunScale = interpolate(pop(0, 18), [0, 1], [0.6, 1]);
  const kicker = pop(6);
  const line1 = pop(12);
  const line2 = pop(20);
  const rule = pop(30);

  // saída suave no fim da cena
  const exit = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy }}>
      <AbsoluteFill style={{ transform: `scale(${sunScale})`, opacity: 0.5 }}>
        <Sunburst color={COLORS.teal} rays={40} speed={0.12} opacity={0.55} />
      </AbsoluteFill>
      <Halftone color={COLORS.mustard} gap={64} size={11} opacity={0.12} />

      <AbsoluteFill
        style={{
          opacity: exit,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 30,
          padding: 220,
          textAlign: "center",
        }}
      >
        <div
          style={{
            opacity: kicker,
            transform: `translateY(${interpolate(kicker, [0, 1], [40, 0])}px)`,
            fontFamily: SANS,
            fontWeight: 700,
            letterSpacing: 18,
            fontSize: 58,
            color: COLORS.mustard,
            textTransform: "uppercase",
            borderTop: `4px solid ${COLORS.mustard}`,
            borderBottom: `4px solid ${COLORS.mustard}`,
            padding: "18px 44px",
          }}
        >
          Guia do Pediatra
        </div>

        <div
          style={{
            opacity: line1,
            transform: `translateY(${interpolate(line1, [0, 1], [70, 0])}px)`,
            fontFamily: DISPLAY,
            fontSize: 300,
            lineHeight: 0.92,
            color: COLORS.cream,
            textTransform: "uppercase",
          }}
        >
          Refluxo
        </div>
        <div
          style={{
            opacity: line2,
            transform: `translateY(${interpolate(line2, [0, 1], [70, 0])}px)`,
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: 196,
            lineHeight: 0.9,
            color: COLORS.orange,
            marginTop: -30,
          }}
        >
          Gastroesofágico
        </div>

        <div
          style={{
            opacity: rule,
            marginTop: 24,
            fontFamily: SANS,
            fontWeight: 500,
            fontSize: 60,
            letterSpacing: 4,
            color: COLORS.cream,
          }}
        >
          No paciente pediátrico
        </div>
      </AbsoluteFill>

      <PosterFrame color={COLORS.cream} />
    </AbsoluteFill>
  );
};
