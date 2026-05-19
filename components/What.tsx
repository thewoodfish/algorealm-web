"use client";
import { Reveal } from "./ui/Reveal";

function MapVisual() {
  return (
    <div style={{
      position: "relative",
      background: "var(--surface)",
      border: ".5px solid var(--border)",
      borderRadius: 4,
      overflow: "hidden",
      aspectRatio: "1 / 1",
      maxWidth: 460,
    }}>
      {/* grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(26,37,53,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(26,37,53,.35) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <svg viewBox="0 0 480 480" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id="heat-nw" cx="20%" cy="20%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity=".2" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-g">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* terrain blobs */}
        <ellipse cx="80" cy="320" rx="140" ry="80" fill="#040a12" opacity=".7" />
        <ellipse cx="380" cy="120" rx="100" ry="70" fill="#040a12" opacity=".6" />

        {/* heat overlay */}
        <rect width="480" height="480" fill="url(#heat-nw)" />

        {/* perimeter zone */}
        <polygon points="200,160 310,144 348,230 302,296 196,282 172,210"
          fill="rgba(201,168,76,.05)" stroke="#c9a84c" strokeWidth="1"
          strokeDasharray="4,5" opacity=".6" />

        {/* patrol envelope */}
        <polygon points="164,130 332,112 378,244 314,330 158,316 124,206"
          fill="none" stroke="#3b82f6" strokeWidth=".5"
          strokeDasharray="2,6" opacity=".3" />

        {/* track line */}
        <line x1="370" y1="96" x2="302" y2="234" stroke="#a78bfa"
          strokeWidth=".75" strokeDasharray="3,3" opacity=".7" />

        {/* contact blip */}
        <circle cx="302" cy="234" r="14" fill="#ef444406" stroke="#ef4444" strokeWidth=".8" filter="url(#glow-g)" opacity=".8" />
        <circle cx="302" cy="234" r="5" fill="#ef444422" stroke="#ef4444" strokeWidth="1.5" />
        <circle cx="302" cy="234" r="2.5" fill="#ef4444" />

        {/* aircraft */}
        <g transform="translate(148,104) rotate(220)">
          <path d="M0,-6 L1.2,-1.2 L6,.6 L6,2 L1.2,1.2 L.6,4.5 L2,5.5 L2,6 L0,5.5 L-2,6 L-2,5.5 L-.6,4.5 L-1.2,1.2 L-6,2 L-6,.6 L-1.2,-1.2 Z"
            fill="#4ade80" filter="url(#glow-g)" />
        </g>
        <g transform="translate(368,96) rotate(135)">
          <path d="M0,-6 L1.2,-1.2 L6,.6 L6,2 L1.2,1.2 L.6,4.5 L2,5.5 L2,6 L0,5.5 L-2,6 L-2,5.5 L-.6,4.5 L-1.2,1.2 L-6,2 L-6,.6 L-1.2,-1.2 Z"
            fill="#4ade80" filter="url(#glow-g)" />
        </g>
        <g transform="translate(408,266) rotate(45)">
          <path d="M0,-6 L1.2,-1.2 L6,.6 L6,2 L1.2,1.2 L.6,4.5 L2,5.5 L2,6 L0,5.5 L-2,6 L-2,5.5 L-.6,4.5 L-1.2,1.2 L-6,2 L-6,.6 L-1.2,-1.2 Z"
            fill="#4ade80" filter="url(#glow-g)" />
        </g>
        <g transform="translate(370,96) rotate(170)">
          <path d="M0,-7 L1.4,-1.4 L7,.8 L7,2.2 L1.4,1.4 L.8,5.5 L2.5,6.5 L2.5,7 L0,6.5 L-2.5,7 L-2.5,6.5 L-.8,5.5 L-1.4,1.4 L-7,2.2 L-7,.8 L-1.4,-1.4 Z"
            fill="#a78bfa" />
        </g>

        {/* FOB marker */}
        <circle cx="240" cy="228" r="5" fill="none" stroke="#c9a84c" strokeWidth="1" opacity=".5" />
        <circle cx="240" cy="228" r="1.5" fill="#c9a84c" opacity=".7" />
      </svg>

      {/* vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(9,12,18,.6) 100%)",
        pointerEvents: "none",
      }} />

      {/* status badge */}
      <div style={{
        position: "absolute",
        bottom: 16, left: 16,
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "var(--gold)",
        background: "rgba(9,12,18,.85)",
        border: ".5px solid var(--border)",
        padding: "5px 10px",
        borderRadius: 2,
        letterSpacing: ".08em",
      }}>
        Live · 6 aircraft · 2 contacts · 0300 UTC
      </div>

      {/* scanlines */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.04) 2px, rgba(0,0,0,.04) 4px)",
        pointerEvents: "none",
      }} />
    </div>
  );
}

export function What() {
  return (
    <section id="what" style={{ padding: "120px 48px" }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}>
        {/* copy */}
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
            What it is
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 3.5vw, 46px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            lineHeight: 1.1,
            marginBottom: 24,
            color: "var(--text)",
          }}>
            Persistent eyes.<br />Intelligent analysis.<br />Before it happens.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
            Samaritan is an AI-powered security system that monitors large areas
            and complex terrain and infrastructure, learns and analyses threat patterns,
            and helps you prevent incidents before they happen.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 36 }}>
            It does this by deploying a swarm of small autonomous aircraft over the
            area you need to protect — spreading out, covering the entire area
            simultaneously, day and night, without a human pilot controlling each aircraft.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["How it works", "See solutions"].map((label, i) => (
              <a
                key={label}
                href={i === 0 ? "#how" : "#solutions"}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--text-2)",
                  padding: "9px 18px",
                  border: ".5px solid var(--border-2)",
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "color .2s, border-color .2s",
                  letterSpacing: ".04em",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderColor = "var(--gold-dim)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border-2)"; }}
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        {/* visual */}
        <Reveal delay={0.15}>
          <MapVisual />
        </Reveal>
      </div>
    </section>
  );
}
