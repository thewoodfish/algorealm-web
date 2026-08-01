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
          The point
        </div>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(26px, 3.8vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-.025em",
          lineHeight: 1.2,
          color: "var(--text)",
          maxWidth: 780,
          margin: "0 auto 28px",
        }}>
          The future of big operations isn&apos;t collecting more data.{" "}
          <span style={{ color: "var(--text-2)", fontWeight: 300 }}>It&apos;s understanding it.</span>
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "var(--text-2)",
          lineHeight: 1.75,
          fontWeight: 300,
          maxWidth: 620,
          margin: "0 auto 40px",
        }}>
          See your operation the way Algorealm does — what&apos;s happening,
          why, and what to do next.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--gold)",
            color: "#ffffff",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 600,
            padding: "12px 28px",
            borderRadius: 4,
            textDecoration: "none",
            letterSpacing: ".04em",
          }}
        >
          Request a Demo
        </a>
      </Reveal>
    </div>
  );
}
