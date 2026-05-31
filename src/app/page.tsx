// src/app/page.tsx

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Journey from "@/components/sections/Journey";
import Philosophy from "@/components/sections/Philosophy";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#f5f4ef]">
      <Navbar />

      <Hero />
      <Projects />
      <TechStack />
      <Journey />
      <Philosophy />
      <Stats />
      <Contact />

      <Footer />
    </main>
  );
}
