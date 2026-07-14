"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#intelligence", label: "Platform" },
  { href: "#samaritan",    label: "Samaritan" },
  { href: "#industries",   label: "Industries" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: 58,
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        boxSizing: "border-box",
        background: scrolled ? "rgba(0,0,0,.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? ".5px solid var(--border)" : ".5px solid transparent",
        zIndex: 100,
        transition: "all .3s ease",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-cropped.svg" alt="Algorealm" style={{ height: 36, width: "auto" }} />
      </a>

      {/* Links */}
      <ul className="nav-links" style={{ alignItems: "center", gap: 2, marginLeft: "auto", listStyle: "none" }}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 500,
                color: "var(--text-2)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 4,
                letterSpacing: ".04em",
                transition: "color .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li style={{ marginLeft: 12 }}>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--gold)",
              textDecoration: "none",
              padding: "7px 16px",
              border: ".5px solid var(--gold-dim)",
              background: "var(--gold-glow)",
              borderRadius: 4,
              letterSpacing: ".04em",
              transition: "all .2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,.12)";
              e.currentTarget.style.color = "var(--gold-2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--gold-glow)";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Request Demo
          </a>
        </li>
      </ul>
    </nav>
  );
}
