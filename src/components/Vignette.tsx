/**
 * Vinheta suave nas bordas para concentrar o olhar e reforçar o ar analógico.
 */
export const Vignette: React.FC<{ strength?: number }> = ({ strength = 0.45 }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: `radial-gradient(120% 120% at 50% 45%, rgba(0,0,0,0) 55%, rgba(43,33,23,${strength}) 100%)`,
      }}
    />
  );
};
