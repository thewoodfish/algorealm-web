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
    "Algorealm helps organizations understand what is happening across their operations, uncover why problems occur, and make faster, better decisions. Samaritan, our operational investigation platform, explains what happened and why.",
  openGraph: {
    title: "Algorealm — Understand what's happening across your operations",
    description:
      "Every operation generates thousands of events a day, and most are never connected. Algorealm turns those events into clear answers — what happened, why, and what to do next.",
    images: ["https://www.algorealm.tech/images/nigeria-threat-map.png"],
    url: "https://www.algorealm.ng",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algorealm — Understand what's happening across your operations",
    description:
      "Every operation generates thousands of events a day, and most are never connected. Algorealm turns those events into clear answers — what happened, why, and what to do next.",
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
