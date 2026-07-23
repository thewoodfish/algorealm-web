import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Industries } from "@/components/Industries";
import { Outcomes } from "@/components/Outcomes";
import { Flow } from "@/components/Flow";
import { What } from "@/components/What";
import { Intelligence } from "@/components/Intelligence";
import { Why } from "@/components/Why";
import { Closing } from "@/components/Closing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Industries />
        <Outcomes />
        <Flow />
        <What />
        <Intelligence />
        <Why />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
