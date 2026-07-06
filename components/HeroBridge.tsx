import { Reveal } from "./ui/Reveal";

export function HeroBridge() {
  return (
    <div style={{
      borderBottom: ".5px solid var(--border)",
      padding: "64px 48px",
      textAlign: "center",
    }}>
      <Reveal>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
          The landscape
        </div>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 3.5vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-.025em",
          lineHeight: 1.15,
          color: "var(--text)",
          marginBottom: 24,
        }}>
          Why standard security fails<br />
          <span style={{ color: "var(--gold)" }}>at remote mines.</span>
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "var(--text-2)",
          lineHeight: 1.75,
          fontWeight: 300,
          maxWidth: 680,
          margin: "0 auto",
        }}>
          Guarding a remote gold or lithium concession is tough. Sprawling
          boundaries, thick bush canopy, and seasonal mud or dust destroy
          traditional setups. Standard security tools usually break down
          because of three main issues:
        </p>
      </Reveal>
    </div>
  );
}
