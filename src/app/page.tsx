import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      {/* We will add Work, Skills, About, Contact here in the next steps */}
    </main>
  );
}
