import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Algorealm — Operational Intelligence for Critical Infrastructure",
  description:
    "Algorealm builds the operational intelligence platform for critical operations, turning observations from autonomous systems into clear, actionable next steps. Samaritan is the first application built on that platform.",
  openGraph: {
    title: "Algorealm — Operational Intelligence for Critical Infrastructure",
    description:
      "Critical operations generate enormous amounts of information — most of it never understood. Algorealm continuously observes, understands, and explains what is happening, so operators can act before problems escalate.",
    images: ["https://www.algorealm.tech/images/nigeria-threat-map.png"],
    url: "https://www.algorealm.ng",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algorealm — Operational Intelligence for Critical Infrastructure",
    description:
      "Critical operations generate enormous amounts of information — most of it never understood. Algorealm continuously observes, understands, and explains what is happening, so operators can act before problems escalate.",
    images: ["https://www.algorealm.tech/images/nigeria-threat-map.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${shareTechMono.variable}`}
    >
      <body style={{ fontFamily: "var(--font-body)" }}>{children}</body>
    </html>
  );
}
