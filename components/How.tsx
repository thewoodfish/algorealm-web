import { Reveal } from "./ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Swarm deployment",
    body: "Multiple autonomous aircraft spread across your entire area simultaneously. They coordinate with each other — sharing what they see, dividing coverage, making collective decisions in real time. One fails: the others close the gap automatically.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Environmental understanding",
    body: "Thermal imaging, acoustic sensing, and optical systems continuously observe the environment. Their combined outputs are fused into a unified understanding of terrain, movement, and activity patterns.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M1 6l11 7L23 6" /><rect x="1" y="4" width="22" height="16" rx="2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Predictive intelligence",
    body: "Samaritan learns the normal operating patterns of your environment and identifies deviations the moment they emerge. Operators can ask questions in plain language — What happened overnight? Has this vehicle been seen before? Which routes are repeatedly used? — and receive answers grounded in their own operational data.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export function How() {
  return (
    <section
      id="how"
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
            How it works
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 64,
          }}>
            Three layers. One intelligence.
          </h2>
        </Reveal>

        <div className="three-col" style={{ gap: 1, background: "var(--border)" }}>
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div style={{
                background: "var(--surface)",
                padding: "44px 36px",
                position: "relative",
              }}>
                {/* number */}
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-3)",
                  letterSpacing: ".12em",
                  marginBottom: 28,
                }}>
                  {s.num}
                </div>

                {/* icon */}
                <div style={{
                  width: 40,
                  height: 40,
                  border: ".5px solid var(--gold-dim)",
                  background: "var(--gold-glow)",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}>
                  {s.icon}
                </div>

                {/* title */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-.01em",
                  marginBottom: 14,
                }}>
                  {s.title}
                </h3>

                {/* body */}
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {s.body}
                </p>

                {/* connector line between steps */}
                {i < 2 && (
                  <div style={{
                    position: "absolute",
                    top: 44,
                    right: -20,
                    width: 40,
                    height: 1,
                    background: "linear-gradient(90deg, var(--border-2), transparent)",
                    zIndex: 1,
                  }} />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
