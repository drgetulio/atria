import { AbsoluteFill, Sequence } from "remotion";
import { COLORS } from "./theme";
import { Intro } from "./scenes/Intro";
import { Concern } from "./scenes/Concern";
import { Outro } from "./scenes/Outro";
import { Grain } from "./components/Grain";
import { Vignette } from "./components/Vignette";
import { ScaleIcon, AlertIcon, GrowthIcon } from "./components/icons";

/**
 * Linha do tempo (30 fps · 300 frames · 10 s):
 *  Intro      0–66
 *  Concern 01 66–144   Fisiológico × DRGE
 *  Concern 02 144–216  Sinais de alarme
 *  Concern 03 216–270  Manejo racional
 *  Outro      270–300
 */
export const PediatricGERD: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <Sequence durationInFrames={66}>
        <Intro />
      </Sequence>

      <Sequence from={66} durationInFrames={78}>
        <Concern
          index="01"
          kicker="Antes de tudo"
          title="Fisiológico ou doença?"
          points={[
            "Regurgitação do lactente costuma ser benigna",
            "Melhora espontânea por volta dos 12 meses",
            "DRGE: quando há sintomas ou complicações",
          ]}
          bg={COLORS.cream}
          accent={COLORS.teal}
          panel={COLORS.navy}
          ink={COLORS.ink}
          Icon={ScaleIcon}
        />
      </Sequence>

      <Sequence from={144} durationInFrames={72}>
        <Concern
          index="02"
          kicker="Fique atento"
          title="Sinais de alarme"
          points={[
            "Vômito bilioso, sangue ou em jato",
            "Baixo ganho de peso e recusa alimentar",
            "Irritabilidade intensa e sintomas respiratórios",
          ]}
          bg={COLORS.creamDeep}
          accent={COLORS.tomato}
          panel={COLORS.brown}
          ink={COLORS.ink}
          Icon={AlertIcon}
        />
      </Sequence>

      <Sequence from={216} durationInFrames={54}>
        <Concern
          index="03"
          kicker="Conduta"
          title="Manejo racional"
          points={[
            "Acompanhe a curva de crescimento",
            "Priorize medidas não farmacológicas",
            "Cautela e prazo definido com IBP",
          ]}
          bg={COLORS.cream}
          accent={COLORS.orange}
          panel={COLORS.teal}
          ink={COLORS.ink}
          Icon={GrowthIcon}
        />
      </Sequence>

      <Sequence from={270} durationInFrames={30}>
        <Outro />
      </Sequence>

      {/* Acabamento analógico global */}
      <Vignette strength={0.4} />
      <Grain opacity={0.14} />
    </AbsoluteFill>
  );
};
