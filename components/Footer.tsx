export function Footer() {
  return (
    <footer className="footer-inner" style={{
      padding: "32px 48px",
      borderTop: ".5px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-cropped.svg" alt="Algorealm" style={{ height: 30, width: "auto", opacity: 0.7 }} />

<span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-3)" }}>
        © 2026 Algorealm Technologies · Lagos · Berlin
      </span>
    </footer>
  );
}
