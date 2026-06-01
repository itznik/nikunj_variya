"use client";

export default function Contact() {
  return (
    <section className="w-full bg-background pt-48 pb-32 flex flex-col items-center justify-center relative z-30">
      <div className="max-w-[1440px] mx-auto w-full px-6 text-center flex flex-col items-center">
        <span className="text-xs font-mono tracking-[0.35em] text-gray-500 uppercase mb-8">
          03 // DATA INITIALIZATION INGESTION
        </span>
        
        <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white hover:text-gray-300 transition-colors duration-500 cursor-pointer select-none mb-16">
          Connect Engine.
        </h2>

        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-xl w-full border-t border-border-premium pt-12 font-mono text-xs">
          <a href="mailto:nikunj@example.com" className="text-gray-500 hover:text-white transition-colors uppercase tracking-wider text-center">
            [ EMAIL ]
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase tracking-wider text-center">
            [ GITHUB ]
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase tracking-wider text-center">
            [ LINKEDIN ]
          </a>
        </div>
      </div>
    </section>
  );
}
