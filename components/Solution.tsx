import { Reveal } from "./ui/Reveal";

const groups = [
  {
    industry: "Mining",
    questions: [
      "Why did production drop yesterday?",
      "Why are trucks waiting?",
      "Why is efficiency falling?",
    ],
  },
  {
    industry: "Agriculture",
    questions: [
      "Why is this field underperforming?",
      "What changed this week?",
      "Where should we deploy resources first?",
    ],
  },
  {
    industry: "Defence & Security",
    questions: [
      "What happened before the incident?",
      "Where should we investigate first?",
      "What changed across the operational area?",
    ],
  },
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
            A complete understanding of your operation, guiding every decision.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, maxWidth: 660, marginBottom: 20 }}>
            Samaritan helps you understand all of your physical operational
            events as they happen. By bringing together thousands of
            fragmented event signals, it shows you what is happening across
            your operational theatre, why it is happening, and what it means
            for you — so you can make the best decisions.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, maxWidth: 660, marginBottom: 56 }}>
            Instead of one more dashboard to watch, Samaritan answers the
            questions you actually care about:
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="three-col" style={{ gap: 1, background: "var(--border)" }}>
            {groups.map((g) => (
              <div
                key={g.industry}
                style={{
                  background: "var(--surface)",
                  padding: "36px 32px",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--gold)",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}>
                  {g.industry}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {g.questions.map((q) => (
                    <p
                      key={q}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--text)",
                        letterSpacing: "-.01em",
                        lineHeight: 1.35,
                      }}
                    >
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(20px, 2.4vw, 30px)",
            fontWeight: 700,
            letterSpacing: "-.02em",
            lineHeight: 1.3,
            color: "var(--text)",
            maxWidth: 760,
            marginTop: 48,
          }}>
            Samaritan investigates, explains,{" "}
            <span style={{ color: "var(--text-2)", fontWeight: 300 }}>
              and shows you the answer.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
