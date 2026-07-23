import { Reveal } from "./ui/Reveal";

const industries = [
  { name: "Mining", line: "See why production slipped and where haulage is losing time across the pit." },
  { name: "Manufacturing", line: "Trace a drop in output back to the line, shift, or machine that caused it." },
  { name: "Energy", line: "Understand what changed across generation and distribution before it becomes an outage." },
  { name: "Utilities", line: "Keep track of distributed assets and spot faults developing across the network." },
  { name: "Agriculture", line: "Watch large areas of land and livestock without walking every hectare." },
  { name: "Logistics", line: "Find out why shipments are late and where movement stalls in the yard." },
  { name: "Ports", line: "Follow vehicles, cargo, and congestion to keep the terminal moving." },
  { name: "Airports", line: "Stay on top of ground movement and turnaround delays across the apron." },
  { name: "Security", line: "Know what is happening across a site the moment something is out of place." },
  { name: "Defence", line: "Maintain awareness over large, remote areas that can't be watched in person." },
  { name: "Industrial Facilities", line: "Understand activity across sprawling sites without adding more control rooms." },
  { name: "Smart Infrastructure", line: "Make sense of what is happening across roads, grids, and public spaces." },
];

export function Industries() {
  return (
    <section
      id="industries"
      className="section-pad"
      style={{
        background: "var(--surface)",
        borderTop: ".5px solid var(--border)",
        borderBottom: ".5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
            Industries
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 20,
            maxWidth: 640,
          }}>
            Any operation big enough to lose track of itself.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 48, maxWidth: 640 }}>
            The problem is the same everywhere: too much happening across too
            much ground to keep in your head. Algorealm helps operators
            understand it — whatever they run.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="three-col" style={{ gap: 1, background: "var(--border)" }}>
            {industries.map((ind) => (
              <div
                key={ind.name}
                style={{
                  background: "var(--bg)",
                  padding: "32px 28px",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-.01em",
                  marginBottom: 10,
                }}>
                  {ind.name}
                </div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-2)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}>
                  {ind.line}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
