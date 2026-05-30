import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f5f2]">
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
