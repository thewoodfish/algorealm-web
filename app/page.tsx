import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HeroBridge } from "@/components/HeroBridge";
import { Numbers } from "@/components/Numbers";
import { What } from "@/components/What";
import { WhyMining } from "@/components/WhyMining";
import { Intelligence } from "@/components/Intelligence";
import { Flow } from "@/components/Flow";
import { How } from "@/components/How";
import { Solutions } from "@/components/Solutions";
import { Industries } from "@/components/Industries";
import { Closing } from "@/components/Closing";
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
        <WhyMining />
        <Intelligence />
        <Flow />
        <How />
        <Solutions />
        <Industries />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
