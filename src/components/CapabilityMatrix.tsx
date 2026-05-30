"use client";

import { Binary, LayoutTemplate, Database } from "lucide-react";

const capabilities = [
  {
    layer: "01",
    title: "Data Structures & Logic",
    description: "Deep expertise in algorithmic efficiency and graph theory. Writing highly optimized, bug-free core logic.",
    tech: ["Python", "TypeScript", "C++"],
    icon: Binary,
  },
  {
    layer: "02",
    title: "Backend & Database",
    description: "Architecting scalable server environments and designing relational databases for high throughput.",
    tech: ["Node.js", "PostgreSQL", "Firebase", "Supabase"],
    icon: Database,
  },
  {
    layer: "03",
    title: "Full-Stack UI Engineering",
    description: "Translating complex logic into high-performance, pixel-perfect user interfaces using strict state management.",
    tech: ["React", "Next.js", "Tailwind"],
    icon: LayoutTemplate,
  },
];

export default function CapabilityMatrix() {
  return (
    <div className="w-full relative pl-6 sm:pl-10">
      {/* The Continuous Connecting Line */}
      <div className="absolute left-[15px] sm:left-[27px] top-2 bottom-2 w-[1px] bg-edge">
        {/* Animated glowing progress indicator */}
        <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-accent to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      <div className="flex flex-col gap-12">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <div key={idx} className="relative flex flex-col sm:flex-row gap-6 group pl-6 sm:pl-10">
              
              {/* The Node on the line */}
              <div className="absolute -left-[30px] sm:-left-[39px] top-0 w-8 h-8 rounded-full border-2 border-surface bg-canvas flex items-center justify-center z-10 group-hover:border-accent transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <Icon size={14} className="text-text-sub group-hover:text-accent transition-colors" />
              </div>

              <div className="bg-surface border border-edge rounded-2xl p-6 sm:p-8 w-full group-hover:border-text-sub/30 transition-colors relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-accent">//{cap.layer}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-main tracking-tight">{cap.title}</h3>
                  </div>
                  <p className="text-sm text-text-sub leading-relaxed max-w-2xl font-light mb-6">
                    {cap.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-canvas border border-edge rounded-md text-text-main font-mono text-[10px] uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
