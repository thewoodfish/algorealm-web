import { Reveal } from "./ui/Reveal";

export function Closing() {
  return (
    <div style={{
      borderBottom: ".5px solid var(--border)",
      padding: "96px 48px",
      textAlign: "center",
    }}>
      <Reveal>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
          Vision
        </div>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 3.5vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-.025em",
          lineHeight: 1.2,
          color: "var(--text)",
          maxWidth: 760,
          margin: "0 auto 24px",
        }}>
          <span style={{ color: "var(--gold)" }}>One Platform. Every Operation.</span>
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
          The same intelligence layer that observes, understands, and
          recommends applies to any environment where organizations must
          continuously understand complex, distributed operations — energy,
          ports, utilities, and beyond.
        </p>
      </Reveal>
    </div>
  );
}
