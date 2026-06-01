import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Navbar />
      <Hero />
      <Work />
      {/* We will add Work, Skills, About, Contact here in the next steps */}
    </main>
  );
}
