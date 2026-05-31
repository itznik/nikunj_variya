import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

import ScrollProgress from "@/components/visuals/ScrollProgress";
import NoiseTexture from "@/components/visuals/NoiseTexture";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <NoiseTexture />

      <Navbar />

      <main className="bg-[#F6F4EE] overflow-hidden">
        <Hero />

        <Projects />

        <About />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
