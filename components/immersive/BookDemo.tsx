"use client";

import { useRef, useState } from "react";

/* Book a demo — an inline section, not a popup. Posts to /api/contact. */

const FOCUS_OPTIONS = [
  "Understanding what's happening",
  "Investigating incidents faster",
  "Improving efficiency & uptime",
  "Safety & security",
  "Other",
];

export function BookDemo() {
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
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.16)",
    borderRadius: 10,
    padding: "12px 15px",
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
    marginBottom: 8,
  };

  return (
    <section
      id="demo"
      style={{
        background: "#0b0d12",
        borderTop: "1px solid rgba(255,255,255,.08)",
        padding: "120px 24px 56px",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: 10,
          color: "#8ab4ff",
          letterSpacing: ".16em",
          textTransform: "uppercase",
          marginBottom: 24,
          textAlign: "center",
        }}>
          Get started
        </div>

        <h2 style={{
          fontFamily: "var(--font-display, sans-serif)",
          fontSize: "clamp(30px, 4vw, 48px)",
          fontWeight: 700,
          letterSpacing: "-.025em",
          lineHeight: 1.08,
          color: "#fff",
          margin: "0 0 16px",
          textAlign: "center",
        }}>
          Book a demo
        </h2>

        <p style={{
          fontFamily: "var(--font-body, sans-serif)",
          fontSize: 14.5,
          color: "rgba(255,255,255,.62)",
          lineHeight: 1.7,
          fontWeight: 300,
          margin: "0 0 44px",
          textAlign: "center",
        }}>
          Tell us a bit about your operation — we&apos;ll take a real part of
          it, run Samaritan on it, and show you what it can tell you.
        </p>

        {submitted ? (
          <div style={{
            border: "1px solid rgba(255,255,255,.14)",
            borderLeft: "3px solid #4ade80",
            borderRadius: "0 12px 12px 0",
            padding: "22px 24px",
            background: "rgba(255,255,255,.04)",
          }}>
            <p style={{
              fontFamily: "var(--font-body, sans-serif)", fontSize: 15,
              color: "#fff", margin: "0 0 6px", fontWeight: 600,
            }}>
              Request received.
            </p>
            <p style={{
              fontFamily: "var(--font-body, sans-serif)", fontSize: 13.5,
              color: "rgba(255,255,255,.65)", lineHeight: 1.65, margin: 0,
            }}>
              We&apos;ll reach out within 24 hours to set up your demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
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
                style={{ ...inputStyle, cursor: "pointer" }}
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
                marginTop: 6,
                padding: "13px 26px",
                borderRadius: 999,
                background: "#fff",
                color: "#0b0d12",
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14,
                fontWeight: 600,
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.65 : 1,
              }}
            >
              {loading ? "Sending…" : "Request demo"}
            </button>
          </form>
        )}
      </div>

      {/* footer line */}
      <p style={{
        fontFamily: "var(--font-body, sans-serif)",
        fontSize: 12,
        color: "rgba(255,255,255,.35)",
        textAlign: "center",
        margin: "96px 0 0",
      }}>
        © 2026 Algorealm, Inc. · Lagos, Nigeria ·{" "}
        <a href="mailto:algorealm.org@gmail.com" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>
          algorealm.org@gmail.com
        </a>
      </p>
    </section>
  );
}
