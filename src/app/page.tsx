import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Navbar />
      <Hero />
      {/* We will add Work, Skills, About, Contact here in the next steps */}
    </main>
  );
}
