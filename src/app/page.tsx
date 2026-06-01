import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Footer />
      {/* We will add Work, Skills, About, Contact here in the next steps */}
    </main>
  );
}
