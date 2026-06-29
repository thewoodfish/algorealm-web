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
  title: "Algorealm — Autonomous Intelligence Infrastructure",
  description:
    "Algorealm builds autonomous intelligence infrastructure for critical infrastructure protection, security operations, and sovereign environments. Persistent situational awareness. Early warning before contact. Built in Africa.",
  openGraph: {
    title: "Algorealm — Autonomous Intelligence Infrastructure",
    description:
      "Persistent intelligence for critical infrastructure, security operations, and sovereign environments. Autonomous situational awareness that prevents incidents before they occur.",
    images: ["https://www.algorealm.tech/images/nigeria-threat-map.png"],
    url: "https://www.algorealm.ng",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samaritan — Algorealm",
    description:
      "Nigeria's security and infrastructure spend already exceeds $20B annually — across pipeline security, national defense, and conflict-affected agriculture.",
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
