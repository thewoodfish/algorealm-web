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
          The problem
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
          Critical operations generate enormous amounts of information.<br />
          <span style={{ color: "var(--gold)" }}>Most of it is never understood.</span>
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
          Sensors, patrols, and field reports all produce signal, but without
          a system to connect it, most of that signal goes unreviewed until
          after something has already gone wrong. In large, remote, and
          high-value operations, that gap usually comes down to three
          issues:
        </p>
      </Reveal>
    </div>
  );
}
