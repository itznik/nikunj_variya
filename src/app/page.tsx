import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f5f2] text-zinc-950">
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
