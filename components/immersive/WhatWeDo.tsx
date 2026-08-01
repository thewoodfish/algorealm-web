/* What we do — one statement, three quiet columns. Dark, calm, no glow. */

const pillars = [
  {
    title: "See what",
    body: "Every event across your site — people, vehicles, machines — in one live picture.",
  },
  {
    title: "Understand why",
    body: "Samaritan traces a problem back through the events that led to it and explains what happened.",
  },
  {
    title: "Decide",
    body: "Act on a clear account — where to look, what caused it, what to do next.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what"
      style={{
        background: "#0b0d12",
        borderTop: "1px solid rgba(255,255,255,.08)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 10,
          color: "#8ab4ff",
          letterSpacing: ".16em",
          textTransform: "uppercase",
          marginBottom: 24,
        }}>
          What we do
        </div>

        <h2 style={{
          fontFamily: "var(--font-display, sans-serif)",
          fontSize: "clamp(30px, 4.4vw, 56px)",
          fontWeight: 700,
          letterSpacing: "-.025em",
          lineHeight: 1.08,
          color: "#fff",
          margin: "0 0 26px",
          maxWidth: 820,
        }}>
          A complete understanding of your operation, guiding every decision.
        </h2>

        <p style={{
          fontFamily: "var(--font-body, sans-serif)",
          fontSize: 16,
          color: "rgba(255,255,255,.66)",
          lineHeight: 1.75,
          fontWeight: 300,
          maxWidth: 640,
          margin: "0 0 72px",
        }}>
          Samaritan brings together thousands of fragmented operational events
          and shows you what is happening across your site, why it is
          happening, and what it means for you — so you can make the best
          decisions.
        </p>

        <div className="three-col" style={{ gap: 48 }}>
          {pillars.map((p) => (
            <div key={p.title} style={{ borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 22 }}>
              <h3 style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "-.01em",
                color: "#fff",
                margin: "0 0 10px",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14,
                color: "rgba(255,255,255,.6)",
                lineHeight: 1.7,
                fontWeight: 300,
                margin: 0,
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
