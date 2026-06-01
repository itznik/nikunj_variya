import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Ecosystem from "@/components/Ecosystem";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Hero />
      <Work />
      <Ecosystem />
      <Contact />
    </main>
  );
}
