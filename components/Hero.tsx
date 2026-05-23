"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  { text: "Nigeria is losing billions",           gold: false },
  { text: "to threats with detectable patterns.", gold: false },
  { text: "Nobody was watching. Until now.",      gold: true  },
];

function TypewriterHeadline() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const current = LINES[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex(c => c + 1), 38);
      return () => clearTimeout(t);
    }
    if (lineIndex < LINES.length - 1) {
      const t = setTimeout(() => { setLineIndex(l => l + 1); setCharIndex(0); }, 320);
      return () => clearTimeout(t);
    }
    setDone(true);
  }, [charIndex, lineIndex, done]);

  return (
    <h1 style={{
      fontFamily: "var(--font-mono)",
      fontSize: "clamp(22px, 3.5vw, 52px)",
      fontWeight: 400,
      letterSpacing: ".04em",
      lineHeight: 1.3,
      marginBottom: 28,
      textAlign: "center",
    }}>
      {LINES.map((line, i) => {
        const isActive = i === lineIndex;
        const isPast   = i < lineIndex;
        const visible  = isPast ? line.text : isActive ? line.text.slice(0, charIndex) : "";
        if (!visible && !isActive) return null;
        return (
          <span key={i} style={{
            display: "block",
            color: line.gold ? "var(--gold)" : "#fff",
            ...(line.gold ? {
              fontSize: "1.2em",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              textShadow: "0 0 24px rgba(201,168,76,.5), 0 0 60px rgba(201,168,76,.2)",
            } : {}),
          }}>
            {visible}
            {isActive && !done && (
              <span style={{
                display: "inline-block",
                width: "0.55em",
                height: "2px",
                background: "var(--gold)",
                verticalAlign: "middle",
                marginLeft: "3px",
                animation: "blink .6s step-end infinite",
              }} />
            )}
          </span>
        );
      })}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </h1>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "110vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 48px 80px",
        boxSizing: "border-box",
        backgroundImage: "url('/images/nigeria-threat-map.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 1,
        }}
      >
        <source src="/videos/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* bottom fade into next section */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "25%",
        background: "linear-gradient(to bottom, transparent, #090c12)",
        zIndex: 5,
        pointerEvents: "none",
      }} />

      {/* dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(6, 8, 12, 0.55)",
        zIndex: 2,
      }} />

      {/* grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(26,37,53,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(26,37,53,.35) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.4,
        pointerEvents: "none",
        zIndex: 3,
      }} />

      {/* content */}
      <div style={{ position: "relative", zIndex: 4, textAlign: "center", maxWidth: 860 }}>

        {/* headline */}
        <TypewriterHeadline />

        {/* sub */}
        <motion.p
          {...fadeUp(0.38)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            color: "rgba(255,255,255,.75)",
            lineHeight: 1.6,
            maxWidth: 480,
            margin: "0 auto 40px",
            fontWeight: 300,
          }}
        >
          AI surveillance intelligence for Nigerian critical infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.62)} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#demo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--gold)",
              color: "#0a0c12",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              padding: "11px 24px",
              borderRadius: 4,
              textDecoration: "none",
              letterSpacing: ".04em",
              transition: "background .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-2)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch demo
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 500,
              padding: "11px 24px",
              borderRadius: 4,
              border: ".5px solid rgba(255,255,255,.4)",
              textDecoration: "none",
              letterSpacing: ".04em",
              transition: "border-color .2s, color .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "var(--gold)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.4)"; e.currentTarget.style.color = "#fff"; }}
          >
            Request briefing
          </a>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        {...fadeUp(1)}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 4,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", letterSpacing: ".14em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{
          width: 1,
          height: 40,
          background: "linear-gradient(var(--border-2), transparent)",
        }} />
      </motion.div>
    </section>
  );
}
