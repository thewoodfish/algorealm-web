"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#how",        label: "How it works" },
  // { href: "#samaritan",  label: "Samaritan" },  // hidden for now
  { href: "#industries", label: "Industries" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the hero photo (top) text is light; over the white page (scrolled) it's dark.
  const linkColor  = scrolled ? "var(--text-2)" : "rgba(255,255,255,.8)";
  const linkHover  = scrolled ? "var(--text)"   : "#ffffff";
  const ctaColor   = scrolled ? "var(--gold)"   : "#ffffff";
  const ctaBorder  = scrolled ? "var(--gold-dim)" : "rgba(255,255,255,.35)";
  const ctaBg      = scrolled ? "var(--gold-glow)" : "rgba(255,255,255,.08)";
  const ctaBgHover = scrolled ? "rgba(0,0,0,.08)" : "rgba(255,255,255,.2)";

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
        background: scrolled ? "rgba(255,255,255,.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? ".5px solid var(--border)" : ".5px solid transparent",
        zIndex: 100,
        transition: "all .3s ease",
      }}
    >
      {/* Logo (white artwork — invert it to dark once the nav is on white) */}
      <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-cropped.svg"
          alt="Algorealm"
          style={{
            height: 36,
            width: "auto",
            filter: scrolled ? "invert(1)" : "none",
            transition: "filter .3s ease",
          }}
        />
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
                color: linkColor,
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 4,
                letterSpacing: ".04em",
                transition: "color .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
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
              color: ctaColor,
              textDecoration: "none",
              padding: "7px 16px",
              border: `.5px solid ${ctaBorder}`,
              background: ctaBg,
              borderRadius: 4,
              letterSpacing: ".04em",
              transition: "all .2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = ctaBgHover)}
            onMouseLeave={e => (e.currentTarget.style.background = ctaBg)}
          >
            Request Demo
          </a>
        </li>
      </ul>
    </nav>
  );
}
