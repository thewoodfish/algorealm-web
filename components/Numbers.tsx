import { Reveal } from "./ui/Reveal";

const stats = [
  {
    val: "No Internet",
    desc: "Cloud-dependent cameras and standard commercial drones stop working the moment local cellular or internet networks drop out in the bush.",
    tag: "Connectivity gap",
  },
  {
    val: "Too Much Land",
    desc: "Physical fences are too expensive to build over a 100km² lease, and human foot patrols leave massive geographic gaps that organized thieves easily exploit.",
    tag: "Coverage gap",
  },
  {
    val: "Data Leaks",
    desc: "Sending your proprietary mine maps, concession layouts, and high-value transport schedules to foreign cloud servers leaves your business vulnerable to corporate espionage.",
    tag: "Security gap",
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
