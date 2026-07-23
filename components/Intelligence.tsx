import { Reveal } from "./ui/Reveal";

const features = [
  {
    title: "Learns what normal looks like",
    body: "After a few days of watching, Samaritan knows the usual rhythm of your operation — the normal flow of people, vehicles, and equipment. When something drifts from that, it notices.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Connects the dots over time",
    body: "A loader that keeps idling before every slowdown. A gate that backs up at the same hour each week. Samaritan links these events together so a recurring problem stops looking like a run of bad luck.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Answers plain-language questions",
    body: "Ask it the way you'd ask a colleague. \"Why did output drop yesterday?\" \"What happened before the alarm?\" \"Where should we look first?\" You get a specific answer, drawn from what actually happened.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const chatLines = [
  { role: "q", text: "Why did production drop yesterday afternoon?" },
  { role: "a", text: "Output fell about 18% after 14:20. It traces back to the primary crusher: it stopped twice, 22 minutes total, and haul trucks queued behind it — six waiting at the peak. The same stall pattern showed up on the 9th and 14th. Worth having maintenance look at the crusher before the next shift." },
  { role: "q", text: "Anything else slowing us down today?" },
  { role: "a", text: "One thing. Trucks on the north ramp are waiting an average of 7 minutes longer than usual — a grader has been parked across the passing bay since 08:10. Moving it would clear the backup." },
];

export function Intelligence() {
  return (
    <section
      id="intel-layer"
      className="section-pad"
      style={{
        background: "var(--surface)",
        borderTop: ".5px solid var(--border)",
        borderBottom: ".5px solid var(--border)",
      }}
    >
      <div className="two-col" style={{
        maxWidth: 1200,
        margin: "0 auto",
        gap: 80,
        alignItems: "start",
      }}>
        {/* left */}
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
            Samaritan in action
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 20,
          }}>
            It doesn&apos;t just show you footage.<br />It explains it.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 48 }}>
            Most tools hand you a feed and leave the thinking to you.
            Samaritan works like an analyst who never sleeps — it has
            watched every hour of your operation and can tell you, in plain
            words, what happened and why.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {features.map((f) => (
              <div key={f.title} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 16, alignItems: "start" }}>
                <div style={{
                  width: 28, height: 28,
                  border: ".5px solid var(--gold-dim)",
                  background: "var(--gold-glow)",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 6,
                  }}>
                    {f.title}
                  </h4>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, fontWeight: 300 }}>
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* right: chat terminal */}
        <Reveal delay={0.15}>
          <div style={{
            background: "var(--bg)",
            border: ".5px solid var(--border)",
            borderRadius: 4,
            overflow: "hidden",
          }}>
            {/* terminal bar */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderBottom: ".5px solid var(--border)",
              background: "var(--surface-2)",
            }}>
              {["#ef4444", "#f59e0b", "#4ade80"].map((c) => (
                <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: .7 }} />
              ))}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-3)", marginLeft: 8, letterSpacing: ".06em" }}>
                Samaritan Intel · Site Overview, Sector 4
              </span>
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "pulse 2s infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--green)", letterSpacing: ".08em" }}>LIVE</span>
              </div>
            </div>

            {/* messages */}
            <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 20 }}>
              {chatLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: line.role === "q" ? "row-reverse" : "row",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  {/* avatar */}
                  <div style={{
                    width: 26,
                    height: 26,
                    borderRadius: 3,
                    background: line.role === "q" ? "var(--surface-2)" : "var(--gold-glow)",
                    border: `.5px solid ${line.role === "q" ? "var(--border)" : "var(--gold-dim)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    color: line.role === "q" ? "var(--text-3)" : "var(--gold)",
                    letterSpacing: ".06em",
                  }}>
                    {line.role === "q" ? "OP" : "AI"}
                  </div>
                  <div style={{
                    background: line.role === "q" ? "var(--surface-2)" : "var(--surface)",
                    border: `.5px solid ${line.role === "q" ? "var(--border)" : "var(--border-2)"}`,
                    borderRadius: line.role === "q" ? "4px 0 4px 4px" : "0 4px 4px 4px",
                    padding: "10px 14px",
                    maxWidth: "85%",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: line.role === "q" ? "var(--text-2)" : "var(--text)",
                    lineHeight: 1.65,
                  }}>
                    {line.text}
                  </div>
                </div>
              ))}

              {/* typing indicator */}
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{
                  width: 26, height: 26,
                  borderRadius: 3,
                  background: "var(--gold-glow)",
                  border: ".5px solid var(--gold-dim)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--gold)", letterSpacing: ".06em",
                }}>
                  AI
                </div>
                <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  {[0, 0.2, 0.4].map((d) => (
                    <div key={d} style={{
                      width: 5, height: 5,
                      borderRadius: "50%",
                      background: "var(--text-3)",
                      animation: `blink 1.4s ${d}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes blink { 0%,80%,100%{opacity:.2} 40%{opacity:1} }
          `}</style>
        </Reveal>
      </div>
    </section>
  );
}
