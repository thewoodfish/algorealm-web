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
  title: "Algorealm — Intelligent Aerial Security for African Mines",
  description:
    "Algorealm deploys autonomous drone swarms to protect remote African mining concessions — perimeter surveillance, convoy escort, and offline threat detection. Built in Africa, for African terrain.",
  openGraph: {
    title: "Algorealm — Intelligent Aerial Security for African Mines",
    description:
      "Illegal mining and haulage ambushes cost African mining operators billions annually. Samaritan is the aerial intelligence layer that catches it before it happens — built for mines with no reliable internet connection.",
    images: ["https://www.algorealm.tech/images/nigeria-threat-map.png"],
    url: "https://www.algorealm.ng",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samaritan — Algorealm",
    description:
      "Illegal mining and haulage ambushes cost African mining operators billions annually. Samaritan is the aerial intelligence layer that catches it before it happens — built for mines with no reliable internet connection.",
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
