import { Reveal } from "./ui/Reveal";

const steps = [
  {
    num: "01",
    verb: "Observe",
    body: "Autonomous aircraft, sensors, and existing infrastructure continuously collect signal across your operation — thermal, optical, and positional data, day and night.",
  },
  {
    num: "02",
    verb: "Understand",
    body: "The platform builds a model of what is normal for your specific operation, then identifies what has changed, what is unusual, and what matters.",
  },
  {
    num: "03",
    verb: "Recommend",
    body: "Every event is scored and explained in plain language, with a specific, actionable recommendation — not just a clip to review.",
  },
  {
    num: "04",
    verb: "Decide",
    body: "Your team weighs the recommendation against real-time context — location, available personnel, and risk — and decides the right response for that moment.",
  },
  {
    num: "05",
    verb: "Act",
    body: "Your team acts with full context: exact location, matched history, and a clear next step, delivered before the event has finished unfolding.",
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
            From raw observation to a clear next step.
          </h2>
        </Reveal>

        <div className="five-col" style={{ gap: 1, background: "var(--border)" }}>
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
