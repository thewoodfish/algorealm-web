import { Reveal } from "./ui/Reveal";

export function WhyMining() {
  return (
    <div style={{
      borderBottom: ".5px solid var(--border)",
      padding: "96px 48px",
      textAlign: "center",
    }}>
      <Reveal>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
          Why mining
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
          The hardest environment first.
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
          We did not start with mining because Algorealm is a mining
          company. We started here because mining concentrates nearly
          every operational challenge our platform is built to solve —
          enormous scale, remote and distributed assets, critical
          infrastructure that cannot go dark, and layers of operational
          complexity that compound by the hour. If the platform holds up
          here, it holds up almost anywhere.
        </p>
      </Reveal>
    </div>
  );
}
