import { Reveal } from "./ui/Reveal";

const questions = [
  "Why did production drop yesterday?",
  "Why are trucks waiting?",
  "Why is efficiency falling?",
  "What happened before the incident?",
  "Where should we investigate first?",
  "What changed this week?",
];

export function Solution() {
  return (
    <section id="solution" className="section-pad">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
            The solution
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            lineHeight: 1.1,
            color: "var(--text)",
            marginBottom: 28,
            maxWidth: 760,
          }}>
            We turn operational events into operational understanding.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, maxWidth: 640, marginBottom: 12 }}>
            We don&apos;t collect more data. We connect the events you already
            have into a clear picture of what is happening.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, maxWidth: 640, marginBottom: 56 }}>
            Instead of another dashboard to watch, you get answers to the
            questions that actually matter:
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="three-col" style={{ gap: 1, background: "var(--border)" }}>
            {questions.map((q, i) => (
              <div
                key={q}
                style={{
                  background: "var(--surface)",
                  padding: "40px 32px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-3)",
                  letterSpacing: ".1em",
                  paddingTop: 4,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-.01em",
                  lineHeight: 1.35,
                }}>
                  {q}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
