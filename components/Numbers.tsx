import { Reveal } from "./ui/Reveal";

const stats = [
  {
    val: "No Connectivity",
    desc: "Cloud-dependent cameras and sensors stop working the moment local networks drop out — exactly where large, remote operations tend to happen.",
    tag: "Connectivity gap",
  },
  {
    val: "Too Much Ground",
    desc: "Physical fencing and human patrols don't scale to sites spanning tens or hundreds of square kilometers. Coverage gaps are the default, not the exception.",
    tag: "Coverage gap",
  },
  {
    val: "No Institutional Memory",
    desc: "Every incident is treated like the first time. Without a system that learns a site's specific patterns over time, teams re-learn the same lessons after every incident.",
    tag: "Memory gap",
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
        <Reveal key={s.val} delay={i * 0.1}>
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
              fontSize: "clamp(26px, 2.6vw, 36px)",
              fontWeight: 800,
              color: "var(--gold)",
              letterSpacing: "-.02em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}>
              {s.val}
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
