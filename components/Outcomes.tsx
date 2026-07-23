import { Reveal } from "./ui/Reveal";

const outcomes = [
  { title: "Improve operational efficiency", body: "Find where time and output are lost, and fix the cause instead of the symptom." },
  { title: "Reduce downtime", body: "Catch the conditions that lead to stoppages before they take equipment offline." },
  { title: "Improve safety", body: "See risky situations as they develop, not in the report written after." },
  { title: "Improve security", body: "Know the moment something is out of place across the whole site." },
  { title: "Improve asset utilisation", body: "Understand how vehicles, equipment, and people are actually being used." },
  { title: "Investigate incidents faster", body: "Reconstruct what happened in minutes instead of piecing footage together for days." },
  { title: "Increase operational awareness", body: "Keep a clear, current picture of everything happening across your operation." },
  { title: "Make better decisions", body: "Act on what is actually happening and why — not on a hunch." },
];

export function Outcomes() {
  return (
    <section id="outcomes" className="section-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
            Outcomes
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 48,
            maxWidth: 640,
          }}>
            What understanding your operation actually gets you.
          </h2>
        </Reveal>

        <div className="four-col" style={{ gap: 1, background: "var(--border)" }}>
          {outcomes.map((o, i) => (
            <Reveal key={o.title} delay={(i % 4) * 0.06}>
              <div style={{
                background: "var(--surface)",
                padding: "36px 28px",
                height: "100%",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-3)",
                  letterSpacing: ".12em",
                  marginBottom: 22,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-.01em",
                  lineHeight: 1.25,
                  marginBottom: 12,
                }}>
                  {o.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-2)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}>
                  {o.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
