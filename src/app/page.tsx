// src/app/page.tsx

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

import WordStack from "@/components/visuals/WordStack";
import ParallaxSection from "@/components/visuals/ParallaxSection";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      <NoiseTexture />

      <Navbar />

      <main className="relative overflow-hidden bg-[#f5f4ef]">
        {/* Hero */}
        <Hero />

        {/* Featured Project */}
        <Featured />

        {/* Projects */}
        <Projects />

        {/* Transition */}
        <WordStack />

        {/* Visual Break */}
        <ParallaxSection />

        {/* Skills */}
        <TechStack />

        {/* Journey */}
        <Journey />

        {/* Philosophy */}
        <Philosophy />

        {/* Metrics */}
        <Stats />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
