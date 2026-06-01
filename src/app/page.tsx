import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Flowchart from "@/components/Flowchart";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Hero />
      <Work />
      <Flowchart />
      
      {/* Footer / Final CTA */}
      <footer className="w-full bg-[#0a2540] text-white py-24 border-t border-[#1a365d] flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-[800px] w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to architect the future?</h2>
          <p className="text-[#adbdcc] text-lg mb-12">
            Let's build scalable, high-performance engineering solutions together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-stripe-blurple text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#5851df] transition-colors shadow-lg">
              Contact Engineering
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
