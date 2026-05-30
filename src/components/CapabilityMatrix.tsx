"use client";

import { Binary, Cpu, LayoutTemplate, Braces, Database, Terminal, GitBranch, Layers } from "lucide-react";

const capabilities = [
  {
    layer: "01 // LOGIC & ALGORITHMS",
    title: "Data Structures & Core Logic",
    description: "Deep expertise in algorithmic efficiency, graph theory, and advanced data structures. Writing highly optimized, bug-free logic before touching the DOM.",
    tech: ["Python", "TypeScript", "C++", "DSA Mapping"],
    icon: Binary,
  },
  {
    layer: "02 // SYSTEM ARCHITECTURE",
    title: "Backend & Database Design",
    description: "Architecting scalable server environments, building robust REST APIs, and designing normalized relational databases that handle high concurrent throughput.",
    tech: ["Node.js", "Express", "PostgreSQL", "MongoDB", "System Design"],
    icon: Database,
  },
  {
    layer: "03 // INTERFACE & STATE",
    title: "Full-Stack UI Engineering",
    description: "Translating complex data into high-performance, pixel-perfect user interfaces using modern hydration techniques and strict typed state management.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    icon: LayoutTemplate,
  },
];

export default function CapabilityMatrix() {
  return (
    <div className="w-full border border-edge rounded-2xl bg-surface p-6 sm:p-12 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col gap-12 relative z-10">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          const isLast = idx === capabilities.length - 1;

          return (
            <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
              
              {/* SVG Connecting Pipeline Line */}
              {!isLast && (
                <div className="absolute left-[1.15rem] top-[3rem] bottom-[-3rem] w-[1px] bg-edge hidden md:block">
                  <div className="w-full h-0 bg-accent group-hover:h-full transition-all duration-700 ease-in-out"></div>
                </div>
              )}

              {/* Icon Node */}
              <div className="shrink-0 relative">
                <div className="w-10 h-10 rounded-xl border border-edge bg-canvas flex items-center justify-center text-text-sub group-hover:text-accent group-hover:border-accent/50 transition-colors z-10 relative">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 w-full">
                <div>
                  <span className="font-mono text-[10px] text-text-sub tracking-widest uppercase">
                    {cap.layer}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-main mt-1">
                    {cap.title}
                  </h3>
                </div>
                
                <p className="text-sm text-text-sub leading-relaxed max-w-2xl font-light">
                  {cap.description}
                </p>
                
                {/* Tech Tags with micro-icons */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {cap.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-canvas border border-edge rounded-md text-text-main group-hover:border-text-sub/30 transition-colors">
                      <Terminal size={12} className="text-accent opacity-70" strokeWidth={2} />
                      <span className="font-mono text-[10px] uppercase tracking-wider">{tech}</span>
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
