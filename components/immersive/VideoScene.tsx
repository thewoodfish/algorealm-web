"use client";

import { useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────────────────
   The living operation — video edition.
   A pre-rendered recording of Samaritan investigating Bingham Canyon plays
   on loop. Chrome stays near-invisible: the headline shows while the loop
   begins, fades out as the investigation unfolds, and returns on replay.
   Poor connections: the 160KB poster paints immediately and the MP4
   (faststart) streams progressively — the screen is never blank.
   ──────────────────────────────────────────────────────────────────────── */

const HEADLINE_VISIBLE_SECONDS = 7;

export function VideoScene() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showHeadline, setShowHeadline] = useState(true);
  const [needsTap, setNeedsTap] = useState(false); // autoplay blocked

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect reduced-motion: leave the poster still until the user asks.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setNeedsTap(true);
      return;
    }

    const tryPlay = () => video.play().catch(() => setNeedsTap(true));
    tryPlay();

    const onTime = () => {
      // headline visible at the top of each loop, hidden while investigating
      setShowHeadline(video.currentTime < HEADLINE_VISIBLE_SECONDS);
    };
    // no visible controls exist, so any pause is unintended — resume quietly
    const onPause = () => {
      if (!video.ended) video.play().catch(() => setNeedsTap(true));
    };
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setNeedsTap(false)).catch(() => setNeedsTap(true));
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0b0d12", overflow: "hidden" }}>
      <style>{`
        @keyframes sceneFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* the operation */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster="/videos/samaritan-poster.jpg"
        src="/videos/samaritan-demo.mp4"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
        }}
      />

      {/* edge scrims so chrome reads over any frame */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background:
          "linear-gradient(180deg, rgba(11,13,18,.42) 0%, transparent 18%, transparent 64%, rgba(11,13,18,.55) 100%)",
      }} />

      {/* wordmark */}
      <div style={{ position: "absolute", top: 26, left: 34, zIndex: 5 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-cropped.svg" alt="Algorealm" style={{ height: 26, opacity: 0.92 }} />
      </div>

      {/* persistent, quiet demo CTA */}
      <a
        href="/#contact"
        style={{
          position: "absolute", top: 22, right: 30, zIndex: 5,
          display: "inline-flex", alignItems: "center",
          padding: "9px 18px", borderRadius: 999,
          background: "rgba(255,255,255,.10)",
          border: "1px solid rgba(255,255,255,.25)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontFamily: "var(--font-body, sans-serif)", fontSize: 13, fontWeight: 500,
          textDecoration: "none", letterSpacing: ".01em",
        }}
      >
        Book a demo
      </a>

      {/* headline — present while the loop opens, gone while Samaritan works */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 96, zIndex: 4,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
        opacity: showHeadline ? 1 : 0,
        transform: showHeadline ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 1.1s ease, transform 1.1s ease",
        pointerEvents: showHeadline ? "auto" : "none",
        animation: "sceneFadeUp 1s .2s cubic-bezier(.16,1,.3,1) backwards",
      }}>
        <h1 style={{
          fontFamily: "var(--font-display, sans-serif)",
          fontSize: "clamp(38px, 5.6vw, 80px)",
          fontWeight: 700,
          letterSpacing: "-.03em",
          lineHeight: 1.03,
          color: "#fff",
          textShadow: "0 2px 40px rgba(0,0,0,.6)",
          margin: 0,
        }}>
          See what happened.<br />Understand why.
        </h1>
        <a
          href="/#contact"
          style={{
            marginTop: 28,
            display: "inline-flex", alignItems: "center",
            padding: "13px 26px", borderRadius: 999,
            background: "#fff", color: "#0b0d12",
            fontFamily: "var(--font-body, sans-serif)", fontSize: 14, fontWeight: 600,
            textDecoration: "none", letterSpacing: ".01em",
          }}
        >
          Book a demo
        </a>
      </div>

      {/* autoplay fallback — poster stays, one tap starts the story */}
      {needsTap && (
        <button
          onClick={startPlayback}
          aria-label="Play"
          style={{
            position: "absolute", inset: 0, zIndex: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(11,13,18,.25)",
            border: "none", cursor: "pointer",
          }}
        >
          <span style={{
            width: 76, height: 76, borderRadius: "50%",
            background: "rgba(255,255,255,.12)",
            border: "1px solid rgba(255,255,255,.4)",
            backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
