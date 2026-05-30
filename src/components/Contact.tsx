"use client";

import { ArrowRight, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 sm:py-32 bg-[#F6F9FC] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-[#80E9FF]/40 to-[#7A73FF]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0A2540] tracking-tight mb-6">
            Ready to scale your architecture?
          </h2>
          <p className="text-lg text-[#425466] mb-8">
            Whether you need a high-performance web application, a robust distributed backend system, or technical consultation, let's build something exceptional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:hello@example.com" className="bg-[#635BFF] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#0A2540] transition-all hover:shadow-[0_10px_20px_rgba(99,91,255,0.3)] hover:-translate-y-0.5">
              Start a project <ArrowRight size={18} />
            </a>
            <a href="#" className="bg-white border border-gray-200 text-[#0A2540] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:border-gray-300 transition-all">
              <Terminal size={18} /> View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
