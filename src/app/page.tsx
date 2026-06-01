import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // THE FIX: w-full, max-w-[100vw], and overflow-x-hidden strictly enforce bounds.
    <main className="flex flex-col w-full max-w-[100vw] overflow-x-hidden relative bg-[#f6f9fc]">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
