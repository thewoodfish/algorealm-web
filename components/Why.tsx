import { Reveal } from "./ui/Reveal";

const reasons = [
  {
    title: "Built for the field, not the office",
    body: "This isn't an office dashboard pointed at your site. It's built for big, messy, moving operations where the real work happens on the ground.",
  },
  {
    title: "Works with what you already have",
    body: "Your cameras, sensors, and systems stay put. Algorealm plugs into them — no ripping anything out and starting over.",
  },
  {
    title: "Tells you why, not just what",
    body: "An alert says something happened. Algorealm tells you why, and what led up to it. That's the part that actually helps you fix it.",
  },
  {
    title: "Always paying attention",
    body: "It doesn't wait to be asked. Algorealm keeps a running picture of your operation, so the answer's ready the moment you need it.",
  },
  {
    title: "Gets you to a decision faster",
    body: "Less time working out what happened means more time acting on it. Your team decides with a clear picture, not a hunch.",
  },
];

export function Why() {
  return (
    <section
      id="why"
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
            Why Algorealm
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 56,
            maxWidth: 640,
          }}>
            What makes it different.
          </h2>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="why-row" style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: 24,
                alignItems: "baseline",
                padding: "28px 0",
                borderTop: ".5px solid var(--border)",
                ...(i === reasons.length - 1 ? { borderBottom: ".5px solid var(--border)" } : {}),
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-3)",
                  letterSpacing: ".1em",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 40 }} className="why-cols">
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-.015em",
                    lineHeight: 1.2,
                  }}>
                    {r.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--text-2)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}>
                    {r.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
