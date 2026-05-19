import { Reveal } from "./ui/Reveal";

const pillars = [
  {
    title: "Nigerian technology",
    body: "Built here. For here. Not a foreign product sold to Nigeria — an indigenous capability developed by a Nigerian team for Nigerian conditions.",
  },
  {
    title: "Data sovereignty",
    body: "Your operational intelligence never leaves the country. No foreign cloud. No data-sharing agreements. No dependency on external networks that can be switched off.",
  },
  {
    title: "Platform, not product",
    body: "One engine. Military, pipeline, telecoms, agriculture. Samaritan adapts to the domain — the intelligence layer is the same underneath.",
  },
  {
    title: "Predictive, not reactive",
    body: "Every existing security system in this market tells you what happened. Samaritan tells you what is about to happen. That is not an incremental improvement. It is a different product entirely.",
  },
];

export function Company() {
  return (
    <section id="company" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          {/* left */}
          <Reveal>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
              The company
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              color: "var(--gold)",
              lineHeight: 1,
              marginBottom: 48,
            }}>
              Algorealm
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {pillars.map((p) => (
                <div key={p.title} style={{
                  paddingLeft: 20,
                  borderLeft: ".5px solid var(--border-2)",
                  transition: "border-color .2s",
                }}>
                  <h4 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 6,
                    letterSpacing: "-.01em",
                  }}>
                    {p.title}
                  </h4>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--text-2)",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* right */}
          <Reveal delay={0.15}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              paddingTop: 8,
            }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.4,
                letterSpacing: "-.02em",
              }}>
                We are building the security infrastructure{" "}
                <em style={{ color: "var(--gold)", fontStyle: "normal" }}>Africa needs</em>{" "}
                — owned by Africans, operated by Africans, serving African conditions.
              </p>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300 }}>
                Nigeria loses billions annually to threats that could be prevented
                with persistent, intelligent surveillance. The tools that exist require
                foreign technicians, send data to foreign servers, and cannot learn from
                operational history.
              </p>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300 }}>
                Samaritan is the system that should have existed ten years ago.
                We are building it now.
              </p>

              {/* quote block */}
              <div style={{
                marginTop: 8,
                background: "var(--surface)",
                border: ".5px solid var(--border)",
                borderLeft: "2px solid var(--gold)",
                padding: "20px 24px",
                borderRadius: "0 4px 4px 0",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  color: "var(--text-3)",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}>
                  On data sovereignty
                </div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  fontWeight: 300,
                }}>
                  &ldquo;The intelligence picture of your ground should never live on
                  someone else&apos;s server. Samaritan is built from the ground up
                  to ensure it never does.&rdquo;
                </p>
              </div>

              {/* metrics strip */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: "var(--border)",
                marginTop: 8,
              }}>
                {[
                  { val: "4", label: "Sectors served" },
                  { val: "100km²", label: "Per deployment" },
                  { val: "24/7", label: "Autonomous watch" },
                ].map((m) => (
                  <div key={m.label} style={{
                    background: "var(--surface)",
                    padding: "18px 16px",
                    textAlign: "center",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--text)",
                      letterSpacing: "-.02em",
                      marginBottom: 4,
                    }}>
                      {m.val}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      color: "var(--text-3)",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                    }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
