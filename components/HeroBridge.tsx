import { Reveal } from "./ui/Reveal";

export function HeroBridge() {
  return (
    <div id="intelligence" style={{
      borderBottom: ".5px solid var(--border)",
      padding: "64px 48px",
      textAlign: "center",
    }}>
      <Reveal>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
          Operational intelligence
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
          Organizations generate enormous amounts of operational data.<br />
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
          Algorealm continuously transforms observations into operational
          understanding — helping teams see what is happening, why it
          matters, and what to do next before problems compound. In large,
          remote, and high-value operations, that gap usually shows up in
          three ways:
        </p>
      </Reveal>
    </div>
  );
}
