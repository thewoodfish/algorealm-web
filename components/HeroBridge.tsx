import { Reveal } from "./ui/Reveal";

export function HeroBridge() {
  return (
    <div style={{
      borderBottom: ".5px solid var(--border)",
      padding: "64px 48px",
      textAlign: "center",
    }}>
      <Reveal>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 3.5vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-.025em",
          lineHeight: 1.15,
          color: "var(--text)",
        }}>
          Intelligence before contact.<br />
          <span style={{ color: "var(--gold)" }}>Decisions before crisis.</span>
        </p>
      </Reveal>
    </div>
  );
}
