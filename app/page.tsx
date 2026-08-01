import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Industries } from "@/components/Industries";
import { Outcomes } from "@/components/Outcomes";
import { Flow } from "@/components/Flow";
// import { What } from "@/components/What";              // Samaritan product — hidden for now
// import { Intelligence } from "@/components/Intelligence"; // Samaritan in action — hidden for now
// import { Why } from "@/components/Why";                // "Why Algorealm" section — removed
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
        {/* Samaritan sections hidden for now */}
        {/* <What /> */}
        {/* <Intelligence /> */}
        {/* <Why /> — "Why Algorealm" section removed */}
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
