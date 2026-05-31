import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Journey from "@/components/sections/Journey";
import Philosophy from "@/components/sections/Philosophy";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

import ScrollProgress from "@/components/visuals/ScrollProgress";
import NoiseTexture from "@/components/visuals/NoiseTexture";
import FloatingOrbs from "@/components/visuals/FloatingOrbs";
import SectionDivider from "@/components/visuals/SectionDivider";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      <NoiseTexture />

      <FloatingOrbs />

      <Navbar />

      <main className="relative z-10 overflow-hidden bg-[#f5f4ef]">
        <Hero />

        <SectionDivider />

        <Projects />

        <SectionDivider />

        <TechStack />

        <Journey />

        <Philosophy />

        <Stats />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
