import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Journey from "@/components/sections/Journey";
import Philosophy from "@/components/sections/Philosophy";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

import ScrollProgress from "@/components/visuals/ScrollProgress";
import NoiseTexture from "@/components/visuals/NoiseTexture";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <NoiseTexture />

      <Navbar />

      <main className="bg-[#f5f4ef] overflow-hidden">
        <Hero />

        <Featured />

        <Projects />

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
