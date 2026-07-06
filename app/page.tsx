import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HeroBridge } from "@/components/HeroBridge";
import { Numbers } from "@/components/Numbers";
import { What } from "@/components/What";
import { How } from "@/components/How";
import { Solutions } from "@/components/Solutions";
import { Intelligence } from "@/components/Intelligence";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HeroBridge />
        <Numbers />
        <What />
        <How />
        <Solutions />
        <Intelligence />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
