import { COLORS } from "../theme";

type IconProps = {
  size?: number;
  stroke?: string;
  accent?: string;
};

const baseStroke = {
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Balança / distinção: refluxo fisiológico × DRGE */
export const ScaleIcon: React.FC<IconProps> = ({
  size = 360,
  stroke = COLORS.ink,
  accent = COLORS.tomato,
}) => (
  <svg width={size} height={size} viewBox="0 0 120 120">
    <g {...baseStroke} stroke={stroke} strokeWidth={5}>
      <line x1="60" y1="20" x2="60" y2="98" />
      <line x1="22" y1="34" x2="98" y2="34" />
      <circle cx="60" cy="20" r="6" fill={accent} stroke="none" />
      <path d="M22 34 L10 64 a18 18 0 0 0 24 0 Z" fill={accent} fillOpacity={0.18} />
      <path d="M98 34 L86 64 a18 18 0 0 0 24 0 Z" fill={accent} fillOpacity={0.18} />
      <line x1="44" y1="98" x2="76" y2="98" />
    </g>
  </svg>
);

/** Triângulo de alerta: sinais de alarme */
export const AlertIcon: React.FC<IconProps> = ({
  size = 360,
  stroke = COLORS.ink,
  accent = COLORS.tomato,
}) => (
  <svg width={size} height={size} viewBox="0 0 120 120">
    <g {...baseStroke} stroke={stroke} strokeWidth={5}>
      <path d="M60 18 L104 96 L16 96 Z" fill={accent} fillOpacity={0.18} />
      <line x1="60" y1="48" x2="60" y2="74" />
      <circle cx="60" cy="86" r="3.4" fill={stroke} stroke="none" />
    </g>
  </svg>
);

/** Curva de crescimento + comprimido vetado: manejo racional */
export const GrowthIcon: React.FC<IconProps> = ({
  size = 360,
  stroke = COLORS.ink,
  accent = COLORS.tomato,
}) => (
  <svg width={size} height={size} viewBox="0 0 120 120">
    <g {...baseStroke} stroke={stroke} strokeWidth={5}>
      <polyline points="20,96 20,24" />
      <polyline points="20,96 100,96" />
      <path d="M24 84 C44 80 52 52 70 44 C84 38 92 30 96 26" stroke={accent} strokeWidth={6} />
      <circle cx="96" cy="26" r="5" fill={accent} stroke="none" />
      <circle cx="44" cy="64" r="13" stroke={stroke} strokeWidth={5} fill="none" />
      <line x1="35" y1="55" x2="53" y2="73" stroke={COLORS.tomato} strokeWidth={5} />
    </g>
  </svg>
);
