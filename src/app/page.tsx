import Hero from "@/components/Hero";
import Flowchart from "@/components/Flowchart";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Hero />
      <Flowchart />
      <Metrics />
      
      {/* Simple Stripe-style Footer CTA */}
      <footer className="w-full bg-[#f6f9fc] text-[#0a2540] py-16 border-t border-gray-200 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to scale your architecture?</h2>
        <div className="flex gap-4 items-center">
          <a href="mailto:contact@example.com" className="bg-[#635bff] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#5851df] transition-colors shadow-md">
            Initialize Contact
          </a>
          <a href="#" className="text-[#0a2540] font-semibold hover:text-[#635bff] transition-colors flex items-center gap-1">
            View GitHub <span className="text-lg leading-none">›</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
