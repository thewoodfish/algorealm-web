import { Reveal } from "./ui/Reveal";

const outcomes = [
  { title: "Find where time is lost", body: "See where output and hours are slipping away, and fix the cause instead of the symptom." },
  { title: "Cut downtime", body: "Catch the conditions that lead to a stoppage before they take a machine offline." },
  { title: "Catch safety issues sooner", body: "Spot a risky situation while it's happening, not in the report written afterward." },
  { title: "Know when something's off", body: "See the moment something is out of place, anywhere on the site." },
  { title: "Get more out of your assets", body: "Understand how your vehicles, equipment, and people are actually being used." },
  { title: "Investigate in minutes, not days", body: "Piece together what happened without scrubbing through hours of footage." },
  { title: "See the whole picture", body: "Keep a clear, current view of everything happening across the operation." },
  { title: "Make the call with confidence", body: "Decide on what's actually happening and why — not on a hunch." },
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
            What that actually gets you.
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
