"use client";

import { Binary, LayoutTemplate, Database, Terminal } from "lucide-react";

const capabilities = [
  {
    layer: "01 // LOGIC & ALGORITHMS",
    title: "Data Structures",
    description: "Deep expertise in algorithmic efficiency, graph theory, and advanced data structures. Writing highly optimized, bug-free logic.",
    tech: ["Python", "TypeScript", "C++"],
    icon: Binary,
  },
  {
    layer: "02 // SYSTEM ARCHITECTURE",
    title: "Backend Design",
    description: "Architecting scalable server environments, building robust APIs, and designing relational databases for high throughput.",
    tech: ["Node.js", "PostgreSQL", "MongoDB"],
    icon: Database,
  },
  {
    layer: "03 // INTERFACE & STATE",
    title: "UI Engineering",
    description: "Translating complex data into high-performance, pixel-perfect user interfaces using strict typed state management.",
    tech: ["Next.js", "React", "Framer"],
    icon: LayoutTemplate,
  },
];

export default function CapabilityMatrix() {
  return (
    // Mobile: Full bleed horizontal scrolling. Desktop: Standard boxed vertical layout.
    <div className="w-full relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none hidden md:block"></div>

      {/* THE MAGIC: 
        flex-row on mobile with overflow-x-auto and snap-mandatory.
        flex-col on desktop, removing the scroll.
      */}
      <div className="flex flex-row md:flex-col gap-4 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-6 md:pb-0 md:bg-surface md:border md:border-edge md:rounded-2xl md:p-12 relative z-10 w-[calc(100vw-40px)] md:w-full -ml-5 sm:-ml-12 md:ml-0 px-5 sm:px-12 md:px-0">
        
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          const isLast = idx === capabilities.length - 1;

          return (
            <div 
              key={idx} 
              // Snap center on mobile, shrink-0 ensures it doesn't get crushed
              className="relative flex flex-col md:flex-row gap-5 md:gap-12 group w-[85vw] sm:w-[60vw] md:w-full shrink-0 snap-center md:snap-align-none bg-surface md:bg-transparent border border-edge md:border-none p-6 md:p-0 rounded-2xl md:rounded-none"
            >
              
              {/* Desktop Vertical Pipeline Line */}
              {!isLast && (
                <div className="absolute left-[1.15rem] top-[3rem] bottom-[-3rem] w-[1px] bg-edge hidden md:block">
                  <div className="w-full h-0 bg-accent group-hover:h-full transition-all duration-700 ease-in-out"></div>
                </div>
              )}

              {/* Icon Node */}
              <div className="shrink-0 relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-edge bg-canvas flex items-center justify-center text-text-sub group-hover:text-accent group-hover:border-accent/50 transition-colors z-10 relative">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                <div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-text-sub tracking-widest uppercase">
                    {cap.layer}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-main mt-1 tracking-tight">
                    {cap.title}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm text-text-sub leading-relaxed max-w-2xl font-light">
                  {cap.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2 md:pt-0">
                  {cap.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-canvas border border-edge rounded-md text-text-main group-hover:border-text-sub/30 transition-colors">
                      <Terminal size={10} className="text-accent opacity-70 hidden sm:block" strokeWidth={2} />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
