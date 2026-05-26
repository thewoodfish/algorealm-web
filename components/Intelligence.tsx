import { Reveal } from "./ui/Reveal";

const features = [
  {
    title: "Learns your baseline",
    body: "After days of watching, Samaritan knows what normal looks like on your specific ground. It builds a model of expected activity — and flags deviations the moment they appear.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Finds recurring patterns",
    body: "A vehicle that appeared three Tuesday nights in a row. An approach vector used in every previous incident. Samaritan surfaces these patterns before they become the next incident.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Answers plain-language questions",
    body: "Ask anything. \"What happened overnight?\" \"Has this vehicle been seen before?\" \"Which sector is highest risk tonight?\" Samaritan answers from your operational data — specific, grounded, actionable.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Stays in your country",
    body: "Every byte of operational data is processed on hardware you control, inside your country. No foreign servers. No data-sharing agreements. No dependency on external networks that can be switched off.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const chatLines = [
  { role: "q", text: "What happened overnight at KP 47?" },
  { role: "a", text: "Three vehicle approaches between 0130–0300. Two were classified as maintenance teams based on registration and time-of-day profile. The third — arriving at 0247 — does not match any known profile. Thermal signature matches the May 15 bunkering crew. It departed without approaching the pipeline. Recommend flag for tonight." },
  { role: "q", text: "Same truck as last week?" },
  { role: "a", text: "Yes. 94% confidence match on thermal and movement profile. This is the 4th appearance in 22 days. Previous three visits were surveillance runs. Tonight may be operational." },
];

export function Intelligence() {
  return (
    <section
      id="intelligence"
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
            The intelligence layer
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 20,
          }}>
            It does not just watch.<br />It thinks.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 48 }}>
            Every previous surveillance pitch has been about a camera. Samaritan
            is an analyst that never sleeps — learning your specific ground, your
            specific threats, your specific patterns.
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
                Samaritan Intel · KP 47 · Pipeline corridor
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
