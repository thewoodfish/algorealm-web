import { Reveal } from "./ui/Reveal";

const stats = [
  {
    val: "$4.4B",
    label: "Annual pipeline theft",
    desc: "Stolen from African pipelines every year. Most of it preventable with persistent surveillance.",
    tag: "Oil & Gas",
  },
  {
    val: "8,000",
    label: "Lives lost annually",
    desc: "Africans killed by insurgents and armed groups each year. Security forces always arrive after the fact.",
    tag: "Military / Security",
  },
  {
    val: "Zero",
    label: "Indigenous ISR systems",
    desc: "No persistent autonomous swarm surveillance system has been built in Africa. Until now.",
    tag: "Market gap",
  },
];

export function Numbers() {
  return (
    <div
      className="numbers-grid three-col"
      style={{
        borderTop: ".5px solid var(--border)",
        borderBottom: ".5px solid var(--border)",
      }}
    >
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.1}>
          <div
            style={{
              padding: "52px 48px",
              borderRight: i < 2 ? ".5px solid var(--border)" : "none",
              position: "relative",
            }}
          >
            {/* tag */}
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "var(--text-3)",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}>
              {s.tag}
            </div>

            {/* value */}
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 800,
              color: "var(--gold)",
              letterSpacing: "-.03em",
              lineHeight: 1,
              marginBottom: 10,
            }}>
              {s.val}
            </div>

            {/* label */}
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text)",
              letterSpacing: ".04em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}>
              {s.label}
            </div>

            {/* desc */}
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "var(--text-2)",
              lineHeight: 1.65,
              fontWeight: 300,
            }}>
              {s.desc}
            </p>

            {/* left accent line */}
            <div style={{
              position: "absolute",
              left: 0, top: "30%", height: "40%",
              width: 2,
              background: i === 0 ? "var(--gold)" : "transparent",
              borderRadius: 1,
            }} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
