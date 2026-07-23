"use client";
import { useRef, useState } from "react";
import { Reveal } from "./ui/Reveal";

const challenges = ["Understanding what's happening", "Investigating incidents faster", "Improving efficiency & uptime", "Safety & security", "Other"];

export function Contact() {
  const [challenge, setChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const nameRef  = useRef<HTMLInputElement>(null);
  const orgRef   = useRef<HTMLInputElement>(null);
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
          name:    nameRef.current?.value,
          org:     orgRef.current?.value,
          email:   emailRef.current?.value,
          message: `Primary operational focus: ${challenge}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Email us directly at algorealm.org@gmail.com");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg)",
    border: ".5px solid var(--border-2)",
    borderRadius: 3,
    padding: "11px 14px",
    fontFamily: "var(--font-body)",
    fontSize: 13,
    color: "var(--text)",
    outline: "none",
    transition: "border-color .2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: 9,
    color: "var(--text-3)",
    letterSpacing: ".12em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: "var(--surface)",
        borderTop: ".5px solid var(--border)",
      }}
    >
      <div className="two-col" style={{ maxWidth: 1200, margin: "0 auto", gap: 80 }}>

        {/* form */}
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 16 }}>
            Get started
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            color: "var(--text)",
            marginBottom: 16,
          }}>
            See your operation differently.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, fontWeight: 300, marginBottom: 32 }}>
            Tell us a little about your operation and we&apos;ll set up a demo.
            No generic slide deck — we walk through a real scenario from your
            site and the questions you actually want answered.
          </p>

          {submitted ? (
            <div style={{
              background: "var(--bg)",
              border: ".5px solid var(--border)",
              borderLeft: "2px solid var(--green)",
              padding: "24px",
              borderRadius: "0 4px 4px 0",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                Request received.
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-2)", lineHeight: 1.65 }}>
                We&apos;ll reach out within 24 hours to set up your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input ref={nameRef} style={inputStyle} type="text" placeholder="Aminu Bello" required />
              </div>

              <div>
                <label style={labelStyle}>Corporate Email</label>
                <input ref={emailRef} style={inputStyle} type="email" placeholder="a.bello@example.com" required />
              </div>

              <div>
                <label style={labelStyle}>Company Name</label>
                <input ref={orgRef} style={inputStyle} type="text" placeholder="Northbridge Industrial Ltd." required />
              </div>

              <div>
                <label style={labelStyle}>Primary Operational Focus</label>
                <select
                  style={{ ...inputStyle, cursor: "pointer" }}
                  value={challenge}
                  onChange={e => setChallenge(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your primary focus</option>
                  {challenges.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {error && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--red)", letterSpacing: ".04em" }}>{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "var(--gold)",
                  color: "#000000",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "12px 28px",
                  borderRadius: 4,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: ".04em",
                  transition: "background .2s",
                  alignSelf: "flex-start",
                  opacity: loading ? 0.6 : 1,
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "var(--gold-2)"; }}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
              >
                {loading ? "Sending…" : "Request a Demo"}
              </button>
            </form>
          )}
        </Reveal>

        {/* info */}
        <Reveal delay={0.15}>
          <div style={{ paddingTop: 8 }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-.01em",
              marginBottom: 16,
              lineHeight: 1.3,
            }}>
              Let us prove it on your operation.
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-2)", lineHeight: 1.75, fontWeight: 300, marginBottom: 36 }}>
              We don&apos;t expect you to commit based on a slide deck. We&apos;ll
              take a real part of your operation, run Algorealm against it,
              and show you exactly what it understands — what happened, why,
              and what you&apos;d do next.
            </p>

            {/* channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                  label: "Email",
                  value: "algorealm.org@gmail.com",
                  href: "mailto:algorealm.org@gmail.com",
                },
                {
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
                  label: "LinkedIn",
                  value: "linkedin.com/company/algorealm",
                  href: "https://www.linkedin.com/company/algorealm",
                },
                {
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                  label: "Headquarters",
                  value: "Lagos, Nigeria",
                  href: "#",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 16px",
                    background: "var(--bg)",
                    border: ".5px solid var(--border)",
                    borderRadius: 4,
                    textDecoration: "none",
                    transition: "border-color .2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-2)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{
                    width: 32, height: 32,
                    border: ".5px solid var(--border-2)",
                    background: "var(--surface)",
                    borderRadius: 3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-2)",
                    flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 2 }}>
                      {c.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-2)" }}>
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
