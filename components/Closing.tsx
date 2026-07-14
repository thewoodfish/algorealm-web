import { Reveal } from "./ui/Reveal";

export function Closing() {
  return (
    <div style={{
      borderBottom: ".5px solid var(--border)",
      padding: "96px 48px",
      textAlign: "center",
    }}>
      <Reveal>
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 3.5vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-.025em",
          lineHeight: 1.2,
          color: "var(--text)",
          maxWidth: 760,
          margin: "0 auto",
        }}>
          The future of critical operations isn&apos;t collecting more data.
          <br />
          <span style={{ color: "var(--gold)" }}>It&apos;s understanding it.</span>
        </p>
      </Reveal>
    </div>
  );
}
