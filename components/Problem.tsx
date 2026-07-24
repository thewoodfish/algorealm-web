import { Reveal } from "./ui/Reveal";

const events = [
  "People move.",
  "Machines stop.",
  "Vehicles travel.",
  "Equipment fails.",
  "Weather changes.",
  "Incidents happen.",
];

export function Problem() {
  return (
    <section
      id="problem"
      className="section-pad"
      style={{
        borderTop: ".5px solid var(--border)",
        borderBottom: ".5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
            The problem
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            lineHeight: 1.1,
            color: "var(--text)",
            marginBottom: 28,
            maxWidth: 720,
          }}>
            Running a big operation shouldn&apos;t feel like guesswork.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, maxWidth: 640, marginBottom: 56 }}>
            A lot happens across a site every day. Most of it never gets
            connected. So when something goes wrong, working out what
            actually happened takes hours — or never happens at all.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="three-col" style={{ gap: 1, background: "var(--border)", marginBottom: 40 }}>
            {events.map((e) => (
              <div
                key={e}
                style={{
                  background: "var(--bg)",
                  padding: "28px 24px",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-.01em",
                }}>
                  {e}
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
          }}>
            You already have cameras, sensors, and software.{" "}
            <span style={{ color: "var(--text-2)", fontWeight: 300 }}>
              What you&apos;re missing is a straight answer to what happened, and why.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
