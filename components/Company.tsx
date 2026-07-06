import { Reveal } from "./ui/Reveal";

const pillars = [
  {
    title: "Engineering-First",
    body: "We don't buy off-the-shelf software and label it ours. Algorealm builds core, low-level infrastructure from scratch. Our decentralized sharding and replication foundation is fully public and open-source at ://github.com, proving our technical capabilities to your engineering and security teams before we ever step onto your site.",
  },
  {
    title: "Guaranteed Data Sovereignty",
    body: "Your high-value geospatial mine maps and vulnerability logs will never live on a foreign cloud network. Samaritan runs entirely on local, ruggedized server hardware deployed directly at your mine site. You maintain 100% physical and digital ownership of your security intelligence, making it completely secure from network cut-offs and corporate espionage.",
  },
  {
    title: "Absolute Focus on Avoidance",
    body: "Traditional surveillance tools are purely reactive — they record footage of an incident while it is happening or after a loss has occurred. Samaritan is designed for avoidance. Our edge AI models convert raw camera pixels into real-time location coordinates and early warning windows, giving your tactical teams the time they need to step in before your perimeters or truck convoys are touched.",
  },
  {
    title: "Local Field Execution",
    body: "We are headquartered in Lagos, Nigeria, placing our engineering and deployment teams in the same time zones and geographic regions as your remote concessions. We don't troubleshoot your hardware or software bugs from a remote office across the ocean; we manage, service, and deploy our systems directly on your dirt.",
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
                We are building the intelligence infrastructure{" "}
                <em style={{ color: "var(--gold)", fontStyle: "normal" }}>Africa needs</em>
                {" "}— owned by Africans, operated by Africans, and designed for the realities of African environments.
              </p>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300 }}>
                Africa loses billions annually to threats that could be prevented
                with persistent, intelligent surveillance. We started in Nigeria — where
                our relationships are deepest and the urgency is most acute. The tools
                that exist require foreign technicians, send data to foreign servers,
                and cannot learn from operational history.
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
