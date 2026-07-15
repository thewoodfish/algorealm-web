import { Reveal } from "./ui/Reveal";

const industries = [
  "Energy",
  "Utilities",
  "Telecommunications",
  "Industrial Facilities",
  "Construction",
  "Ports",
  "Government",
  "Emergency Response",
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
            One platform. Every large, remote, high-value operation.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 48, maxWidth: 640 }}>
            Samaritan is the first operational application built on the
            platform. The same intelligence layer — observe, understand,
            recommend, decide, act — applies anywhere operators need
            continuous awareness over ground they cannot watch in person.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="four-col" style={{ gap: 1, background: "var(--border)" }}>
            {industries.map((name) => (
              <div
                key={name}
                style={{
                  background: "var(--bg)",
                  padding: "24px 20px",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-.01em",
                }}>
                  {name}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
