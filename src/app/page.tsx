import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Journey from "@/components/Journey";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Navbar />
      <Hero />
      <Work />
      <Journey />
      <Metrics />
      
      <footer className="w-full bg-[#0a2540] text-white py-20 border-t border-[#1a365d] flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-[800px] w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to compile?</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-16">
            <a href="mailto:contact@example.com" className="bg-white text-[#0a2540] px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Start the Server
            </a>
            <a href="#" className="text-[#adbdcc] font-semibold hover:text-white transition-colors flex items-center gap-1 mt-4 md:mt-0">
              View GitHub <span className="text-xl leading-none">›</span>
            </a>
          </div>
          
          <div className="border-t border-[#1a365d] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#adbdcc] font-mono">
            <span>© 2026 NIKUNJ VARIYA.</span>
            <span className="mt-4 md:mt-0">SYSTEMS ARCHITECT // DIAGNOSTIC LOGIC</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
