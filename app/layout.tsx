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
  title: "Algorealm — Understand what's happening across your operations",
  description:
    "A big operation is hard to keep track of. Algorealm helps you see what's happening across yours, understand why problems happen, and decide what to do — without waiting hours for an answer.",
  openGraph: {
    title: "Algorealm — Understand what's happening across your operations",
    description:
      "A lot happens across a site every day, and most of it never gets connected. Algorealm helps you see what's happening, work out why, and decide what to do next.",
    images: ["https://www.algorealm.tech/images/nigeria-threat-map.png"],
    url: "https://www.algorealm.ng",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algorealm — Understand what's happening across your operations",
    description:
      "A lot happens across a site every day, and most of it never gets connected. Algorealm helps you see what's happening, work out why, and decide what to do next.",
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
