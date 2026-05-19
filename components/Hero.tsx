"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LINES = [
  { text: "Intelligence before contact.", gold: false },
  { text: "Decisions before crisis.",     gold: false },
  { text: "Introducing Samaritan.",        gold: true  },
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
      fontSize: "clamp(28px, 4vw, 58px)",
      fontWeight: 400,
      letterSpacing: ".04em",
      lineHeight: 1.25,
      marginBottom: 28,
      textAlign: "center",
    }}>
      {LINES.map((line, i) => {
        const isActive = i === lineIndex;
        const isPast   = i < lineIndex;
        const visible  = isPast ? line.text : isActive ? line.text.slice(0, charIndex) : "";
        if (!visible && !isActive) return null;
        return (
          <span key={i} style={{ display: "block", color: line.gold ? "var(--gold)" : "#fff" }}>
            {visible}
            {isActive && !done && (
              <span style={{
                display: "inline-block",
                width: "0.6em",
                height: "2px",
                background: "var(--gold)",
                verticalAlign: "baseline",
                marginLeft: "2px",
                marginBottom: "4px",
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

function RadarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let angle = 0;
    let raf: number;

    const dots: { x: number; y: number; alpha: number; decay: number }[] = [];

    // seed some static contact blips
    const contacts = [
      { r: 0.48, a: 0.8 },
      { r: 0.62, a: 2.1 },
      { r: 0.31, a: 3.9 },
      { r: 0.72, a: 5.2 },
    ];

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) / 2 - 4;

      ctx.clearRect(0, 0, W, H);

      // rings
      [0.25, 0.5, 0.75, 1].forEach((f) => {
        ctx.beginPath();
        ctx.arc(cx, cy, R * f, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(201,168,76,.12)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // crosshairs
      ctx.strokeStyle = "rgba(201,168,76,.08)";
      ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - R * 0.707, cy - R * 0.707); ctx.lineTo(cx + R * 0.707, cy + R * 0.707); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx + R * 0.707, cy - R * 0.707); ctx.lineTo(cx - R * 0.707, cy + R * 0.707); ctx.stroke();

      // draw sweep arc (trailing glow)
      for (let i = 0; i < 60; i++) {
        const a = angle - (i * Math.PI) / 90;
        const alpha = (1 - i / 60) * 0.18;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, a - Math.PI / 90, a);
        ctx.closePath();
        ctx.fillStyle = `rgba(201,168,76,${alpha})`;
        ctx.fill();
      }

      // sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * R, cy + Math.sin(angle) * R);
      ctx.strokeStyle = "rgba(201,168,76,.7)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // light up blips as sweep passes
      contacts.forEach((c) => {
        const diff = ((angle - c.a) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        if (diff < 0.15) {
          dots.push({
            x: cx + Math.cos(c.a) * R * c.r,
            y: cy + Math.sin(c.a) * R * c.r,
            alpha: 1,
            decay: 0.012,
          });
        }
      });

      // render + decay blips
      for (let i = dots.length - 1; i >= 0; i--) {
        const d = dots[i];
        ctx.beginPath();
        ctx.arc(d.x, d.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239,68,68,${d.alpha})`;
        ctx.fill();
        // outer ring
        ctx.beginPath();
        ctx.arc(d.x, d.y, 7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(239,68,68,${d.alpha * 0.4})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        d.alpha -= d.decay;
        if (d.alpha <= 0) dots.splice(i, 1);
      }

      angle += 0.008;
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={640}
      height={640}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 640,
        height: 640,
        opacity: 0.22,
        pointerEvents: "none",
      }}
    />
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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 48px 80px",
      }}
    >
      {/* video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 1,
        }}
      >
        <source src="/videos/vid-1.mp4?v=2" type="video/mp4" />
      </video>


      {/* dark overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,.55)",
        zIndex: 1,
      }} />

      {/* radar */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none" }}>
        <RadarCanvas />
      </div>

      {/* content */}
      <div style={{ position: "relative", zIndex: 4, textAlign: "center", maxWidth: 860 }}>


        {/* eyebrow */}
        <motion.div {...fadeUp(0.15)} style={{ marginBottom: 24 }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--gold)",
          }}>
            — Introducing Samaritan —
          </span>
        </motion.div>

        {/* headline */}
        <TypewriterHeadline />

        {/* sub */}
        <motion.p
          {...fadeUp(0.5)}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            color: "#fff",
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto 40px",
            fontWeight: 300,
          }}
        >
          An AI-powered security system that monitors large areas and critical
          infrastructure, learns the pattern of threats, and tells you what is
          coming before it arrives.
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

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }`}</style>
    </section>
  );
}
