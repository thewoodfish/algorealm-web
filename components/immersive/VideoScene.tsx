"use client";

import { useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────────────────
   The homepage — a living operation, nothing else.
   A recording of Samaritan investigating Bingham Canyon loops full-screen.
   The headline shows while each loop opens, fades while Samaritan works,
   and returns on replay. "Book a demo" opens a small glass form over the
   scene (posts to /api/contact). Poor connections: a 160KB poster paints
   immediately and the faststart MP4 streams progressively — never blank.
   ──────────────────────────────────────────────────────────────────────── */

// Flip to true when a proper recording lands in /public/videos.
const SHOW_VIDEO = false;
const STILL_SRC = "/images/samaritan-still.jpg";

const HEADLINE_VISIBLE_SECONDS = 7;

const FOCUS_OPTIONS = [
  "Understanding what's happening",
  "Investigating incidents faster",
  "Improving efficiency & uptime",
  "Safety & security",
  "Other",
];

export function VideoScene() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showHeadline, setShowHeadline] = useState(true);
  const [needsTap, setNeedsTap] = useState(false); // autoplay blocked
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!SHOW_VIDEO) return;
    const video = videoRef.current;
    if (!video) return;

    // Respect reduced-motion: leave the poster still until the user asks.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setNeedsTap(true);
      return;
    }

    video.play().catch(() => setNeedsTap(true));

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

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setNeedsTap(false)).catch(() => setNeedsTap(true));
  };

  const ctaStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "13px 26px",
    borderRadius: 999,
    background: "#fff",
    color: "#0b0d12",
    fontFamily: "var(--font-body, sans-serif)",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: ".01em",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0b0d12", overflow: "hidden" }}>
      <style>{`
        @keyframes sceneFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(14px) scale(.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* the operation */}
      {SHOW_VIDEO ? (
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
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={STILL_SRC}
          alt="Samaritan investigating a mining operation"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
          }}
        />
      )}

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
      <button
        onClick={() => setModalOpen(true)}
        style={{
          position: "absolute", top: 22, right: 30, zIndex: 5,
          display: "inline-flex", alignItems: "center",
          padding: "9px 18px", borderRadius: 999,
          background: "rgba(255,255,255,.10)",
          border: "1px solid rgba(255,255,255,.25)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          fontFamily: "var(--font-body, sans-serif)", fontSize: 13, fontWeight: 500,
          letterSpacing: ".01em", cursor: "pointer",
        }}
      >
        Book a demo
      </button>

      {/* headline — present while the loop opens, gone while Samaritan works */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 96, zIndex: 4,
        display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
        opacity: showHeadline && !modalOpen ? 1 : 0,
        transform: showHeadline && !modalOpen ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 1.1s ease, transform 1.1s ease",
        pointerEvents: showHeadline && !modalOpen ? "auto" : "none",
        animation: "sceneFadeUp 1s .2s cubic-bezier(.16,1,.3,1) backwards",
        padding: "0 20px",
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
        <button onClick={() => setModalOpen(true)} style={{ ...ctaStyle, marginTop: 28 }}>
          Book a demo
        </button>
      </div>

      {/* autoplay fallback — poster stays, one tap starts the story */}
      {needsTap && !modalOpen && (
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

      {/* demo form — the operation keeps moving behind the glass */}
      {modalOpen && <DemoModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

function DemoModal({ onClose }: { onClose: () => void }) {
  const [focus, setFocus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const orgRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current?.value,
          org: orgRef.current?.value,
          email: emailRef.current?.value,
          message: `Primary operational focus: ${focus}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Email us at algorealm.org@gmail.com");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.16)",
    borderRadius: 10,
    padding: "11px 14px",
    fontFamily: "var(--font-body, sans-serif)",
    fontSize: 14,
    color: "#fff",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono, monospace)",
    fontSize: 9,
    color: "rgba(255,255,255,.5)",
    letterSpacing: ".12em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 7,
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "absolute", inset: 0, zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(11,13,18,.45)",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(430px, 100%)",
          maxHeight: "calc(100vh - 48px)",
          overflowY: "auto",
          background: "rgba(15,17,23,.92)",
          border: "1px solid rgba(255,255,255,.14)",
          borderRadius: 16,
          backdropFilter: "blur(18px)",
          padding: "30px 28px",
          animation: "modalIn .35s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 6 }}>
          <h2 style={{
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: 24, fontWeight: 700, letterSpacing: "-.02em",
            color: "#fff", margin: 0,
          }}>
            Book a demo
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,.55)", fontSize: 20, lineHeight: 1,
              padding: 4, marginTop: 2,
            }}
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div style={{ paddingTop: 10 }}>
            <p style={{
              fontFamily: "var(--font-body, sans-serif)", fontSize: 15,
              color: "#fff", marginBottom: 8, fontWeight: 600,
            }}>
              Request received.
            </p>
            <p style={{
              fontFamily: "var(--font-body, sans-serif)", fontSize: 13.5,
              color: "rgba(255,255,255,.7)", lineHeight: 1.65, margin: 0,
            }}>
              We&apos;ll reach out within 24 hours. We&apos;ll take a real part
              of your operation, run Samaritan on it, and show you what it can
              tell you.
            </p>
          </div>
        ) : (
          <>
            <p style={{
              fontFamily: "var(--font-body, sans-serif)", fontSize: 13.5,
              color: "rgba(255,255,255,.65)", lineHeight: 1.6,
              margin: "0 0 22px",
            }}>
              Tell us a bit about your operation — we&apos;ll walk through a
              real situation from your site.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={labelStyle}>Full name</label>
                <input ref={nameRef} style={inputStyle} type="text" placeholder="Aminu Bello" required />
              </div>
              <div>
                <label style={labelStyle}>Corporate email</label>
                <input ref={emailRef} style={inputStyle} type="email" placeholder="a.bello@example.com" required />
              </div>
              <div>
                <label style={labelStyle}>Company</label>
                <input ref={orgRef} style={inputStyle} type="text" placeholder="Northbridge Industrial Ltd." required />
              </div>
              <div>
                <label style={labelStyle}>Primary operational focus</label>
                <select
                  style={{ ...inputStyle, cursor: "pointer", background: "rgba(255,255,255,.06)" }}
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  required
                >
                  <option value="" disabled style={{ color: "#0b0d12" }}>Select your primary focus</option>
                  {FOCUS_OPTIONS.map((c) => (
                    <option key={c} value={c} style={{ color: "#0b0d12" }}>{c}</option>
                  ))}
                </select>
              </div>
              {error && (
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#f87171", margin: 0 }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: 4,
                  padding: "12px 24px",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#0b0d12",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: 14, fontWeight: 600,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.65 : 1,
                }}
              >
                {loading ? "Sending…" : "Request demo"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
