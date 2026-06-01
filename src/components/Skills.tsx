"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, 
  SiPostgresql, SiMongodb, SiTailwindcss, SiFramer, 
  SiPython, SiSupabase, SiFirebase
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stackCategories = [
  {
    category: "Client & Interfaces",
    color: "#00d4ff",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, hoverColor: "group-hover:text-black group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]" },
      { name: "React", icon: SiReact, hoverColor: "group-hover:text-[#61DAFB] group-hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.5)]" },
      { name: "TailwindCSS", icon: SiTailwindcss, hoverColor: "group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" },
      { name: "Framer Motion", icon: SiFramer, hoverColor: "group-hover:text-[#0055FF] group-hover:drop-shadow-[0_0_15px_rgba(0,85,255,0.5)]" },
    ]
  },
  {
    category: "Core Logic & Processing",
    color: "#635bff",
    tech: [
      { name: "TypeScript", icon: SiTypescript, hoverColor: "group-hover:text-[#3178C6] group-hover:drop-shadow-[0_0_15px_rgba(49,120,198,0.5)]" },
      { name: "Node.js", icon: SiNodedotjs, hoverColor: "group-hover:text-[#339933] group-hover:drop-shadow-[0_0_15px_rgba(51,153,51,0.5)]" },
      { name: "Python", icon: SiPython, hoverColor: "group-hover:text-[#3776AB] group-hover:drop-shadow-[0_0_15px_rgba(55,118,171,0.5)]" },
    ]
  },
  {
    category: "Data & State Persistence",
    color: "#ff4db8",
    tech: [
      { name: "PostgreSQL", icon: SiPostgresql, hoverColor: "group-hover:text-[#4169E1] group-hover:drop-shadow-[0_0_15px_rgba(65,105,225,0.5)]" },
      { name: "MongoDB", icon: SiMongodb, hoverColor: "group-hover:text-[#47A248] group-hover:drop-shadow-[0_0_15px_rgba(71,162,72,0.5)]" },
      { name: "Supabase", icon: SiSupabase, hoverColor: "group-hover:text-[#3ECF8E] group-hover:drop-shadow-[0_0_15px_rgba(62,207,142,0.5)]" },
      { name: "Firebase", icon: SiFirebase, hoverColor: "group-hover:text-[#FFCA28] group-hover:drop-shadow-[0_0_15px_rgba(255,202,40,0.5)]" },
    ]
  },
  {
    category: "Infrastructure & Edge",
    color: "#0a2540",
    tech: [
      { name: "AWS Cloud", icon: FaAws, hoverColor: "group-hover:text-[#232F3E] group-hover:drop-shadow-[0_0_15px_rgba(35,47,62,0.5)]" },
    ]
  }
];

export default function Skills() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Line-by-line category reveal
    gsap.utils.toArray(".stack-row").forEach((row: any) => {
      gsap.fromTo(row,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          }
        }
      );
    });

    // 2. Icon pop-in animation
    gsap.utils.toArray(".tech-node").forEach((node: any, i) => {
      gsap.fromTo(node,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: node,
            start: "top 90%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="w-full bg-[#f6f9fc] py-32 md:py-48 relative overflow-hidden blueprint-grid">
      
      {/* Decorative Blueprint Markers */}
      <div className="absolute top-10 left-10 w-4 h-4 border-l-2 border-t-2 border-[#0a2540]/20" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-r-2 border-b-2 border-[#0a2540]/20" />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-20 lg:gap-32">
        
        {/* LEFT: Structural Typography */}
        <div className="w-full lg:w-4/12 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#635bff]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#635bff] uppercase">
              Technology Matrix
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-[#0a2540] mb-8">
            The core <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635bff] to-[#00d4ff]">engine.</span>
          </h2>
          
          <p className="text-lg text-[#425466] font-medium leading-relaxed border-l-2 border-[#635bff]/20 pl-4">
            A deliberately selected stack designed for maximum algorithmic throughput, type safety, and global edge distribution.
          </p>
        </div>

        {/* RIGHT: Boundless Stack Nodes */}
        <div className="w-full lg:w-8/12 flex flex-col gap-16">
          {stackCategories.map((group, groupIndex) => (
            <div key={groupIndex} className="stack-row flex flex-col relative">
              
              {/* Category Line / Label */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0a2540]">
                  {group.category}
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-200 to-transparent" />
              </div>

              {/* Icon Nodes (No boxes, sitting purely on the grid) */}
              <div className="flex flex-wrap gap-12 md:gap-16">
                {group.tech.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div 
                      key={i} 
                      className="tech-node group relative flex flex-col items-center justify-center cursor-crosshair"
                    >
                      {/* Subtle connection point beneath icon */}
                      <div className="absolute -bottom-4 w-1 h-1 bg-[#0a2540]/20 rounded-full group-hover:bg-[#0a2540] transition-colors" />
                      
                      <Icon className={`text-4xl md:text-5xl text-[#0a2540]/30 transition-all duration-300 ${tech.hoverColor}`} />
                      
                      <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 font-mono text-[9px] md:text-[10px] font-bold text-[#0a2540] uppercase tracking-widest transition-opacity duration-300 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
