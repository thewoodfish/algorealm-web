import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algorealm — A living operation",
  description: "Watch Samaritan think.",
};

export default function ImmersiveLayout({ children }: { children: React.ReactNode }) {
  return children;
}
