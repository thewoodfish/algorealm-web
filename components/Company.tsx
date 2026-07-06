import { Reveal } from "./ui/Reveal";

const pillars = [
  {
    title: "0 to 1",
    body: "We build products that solve a problem no one else has solved yet — not incremental features bolted onto an existing tool.",
  },
  {
    title: "Product design",
    body: "We care deeply about how the product feels to use. If it's not intuitive for the security team on the ground, it isn't done.",
  },
];

export function Company() {
  return (
    <section id="company" className="section-pad" style={{}}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div className="two-col" style={{ gap: 80 }}>
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
              color: "#ffffff",
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
                We build and operate the hardware and software{" "}
                <em style={{ color: "var(--gold)", fontStyle: "normal" }}>ourselves</em>
                {" "}— not a reseller putting a local badge on someone else&apos;s drone platform.
              </p>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300 }}>
                Illegal mining, haulage ambushes, and tailings sabotage cost
                operators real money every year. We started in Nigeria because
                that&apos;s where we have the site access and relationships to test
                Samaritan against real conditions before we take it to other
                concessions on the continent.
              </p>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300 }}>
                We&apos;re a small team right now, running pilot deployments and
                iterating on the hardware directly with the operators using it.
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
              <div className="three-col" style={{
                gap: 1,
                background: "var(--border)",
                marginTop: 8,
              }}>
                {[
                  { val: "2", label: "Core workflows" },
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
