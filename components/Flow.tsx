import { Reveal } from "./ui/Reveal";

const steps = [
  {
    num: "01",
    verb: "Observe",
    body: "Algorealm works with the cameras, sensors, and systems you already have — and can add more coverage where you're blind. Everything happening on the ground becomes one stream of events.",
  },
  {
    num: "02",
    verb: "Understand",
    body: "It learns what a normal day looks like for you, then connects those events into a clear picture of what's happening and what's changed.",
  },
  {
    num: "03",
    verb: "Investigate",
    body: "Ask a plain question, get a plain answer. It traces a problem back through the events that led to it and tells you why it happened.",
  },
  {
    num: "04",
    verb: "Decide",
    body: "Your team acts on a clear account of the situation — where to look, what caused it, what to do next — instead of guessing.",
  },
];

export function Flow() {
  return (
    <section id="how" className="section-pad" style={{}}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
            How it works
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 64,
            maxWidth: 640,
          }}>
            From scattered events to a clear next step.
          </h2>
        </Reveal>

        <div className="four-col" style={{ gap: 1, background: "var(--border)" }}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div style={{
                background: "var(--surface)",
                padding: "36px 28px",
                height: "100%",
                position: "relative",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-3)",
                  letterSpacing: ".12em",
                  marginBottom: 20,
                }}>
                  {s.num}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "-.01em",
                  marginBottom: 12,
                }}>
                  {s.verb}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
