// src/app/page.tsx
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components below the fold
const Work = dynamic(() => import("@/components/Work"));
const Skills = dynamic(() => import("@/components/Skills"));
const Journey = dynamic(() => import("@/components/Journey"));
const About = dynamic(() => import("@/components/About"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-[100vw] overflow-x-hidden relative bg-[#f6f9fc]">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Journey />
      <About />
      <Footer />
    </main>
  );
}
