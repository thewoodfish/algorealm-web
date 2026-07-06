import { Reveal } from "./ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Real Warnings, Not Just Video",
    body: "We don't just stream hours of raw, exhausting video for a human operator to watch. Our software automatically spots threats — like illegal pit setups, perimeter fences being cut, or armed groups in the bush — and alerts your team with the exact coordinates immediately.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "100% Offline (Zero-Bandwidth)",
    body: "Samaritan works completely without the internet. Every byte of security data is processed right at the mine site on local, rugged hardware you control. Your high-value maps and vulnerability logs stay completely private, sovereign, and offline.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
        <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Drones That Work Together (SwarmNL)",
    body: "The drones fly as a team and communicate natively with each other via an encrypted, peer-to-peer local radio network. Built on our open-source SwarmNL foundation, if one drone gets damaged or its battery runs low, the remaining drones automatically change their routes to cover the gap without requiring a human pilot.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Total Coverage With No Blind Spots",
    body: "The system moves the drones in unpredictable, randomized, AI-driven patrol matrices across your 100km² property. Because the flight schedules and paths change constantly, illicit mining syndicates can never time your patrols to sneak past your perimeter.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Mission-Hardened Hardware",
    body: "These are heavy-duty, weather-resistant industrial VTOL aircraft built to handle extreme heat, thick dust, and heavy mining blasts. Equipped with long-wave infrared (LWIR) thermal cameras, they cut through night darkness and tree canopy, launching directly from automated base stations or moving trucks.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z" />
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
            Our system: Samaritan
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 64,
          }}>
            Five simple reasons it works where others fail.
          </h2>
        </Reveal>

        <div className="three-col" style={{ gap: 1, background: "var(--border)" }}>
          {steps.map((s) => (
            <Reveal key={s.num} delay={parseInt(s.num, 10) * 0.05}>
              <div style={{
                background: "var(--surface)",
                padding: "44px 36px",
                height: "100%",
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
