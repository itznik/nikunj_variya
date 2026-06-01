"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Work() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect for the massive background typography
    gsap.to(".bg-text", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Fade up execution for each project row
    gsap.utils.toArray(".project-row").forEach((row: any) => {
      gsap.fromTo(row, 
        { opacity: 0, y: 100 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="work" ref={container} className="w-full bg-black relative py-32 overflow-hidden border-t border-white/5">
      
      {/* Massive Background Typography (Linear Style) */}
      <div className="absolute top-10 left-[-5%] text-[15vw] font-bold text-white/[0.02] tracking-tighter leading-none whitespace-nowrap bg-text select-none pointer-events-none z-0">
        SYSTEMS ARCHITECTURE
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col gap-40">
        
        {/* Project 1: Boundless Row */}
        <div className="project-row flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            <span className="font-mono text-xs text-[#00d4ff] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#00d4ff]" /> Algorithmic Engine
            </span>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">DSA Tracker.</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              A sub-millisecond execution engine mapping array traversals and time complexity visually. Zero rendering latency, built on absolute state control.
            </p>
            <div className="flex gap-4 font-mono text-xs text-zinc-500 uppercase tracking-widest border-l-2 border-white/10 pl-4">
              <span>Next.js</span> • <span>PostgreSQL</span> • <span>O(1)</span>
            </div>
          </div>
          
          {/* Custom Visualizer (No border-radius generic card, raw UI in the void) */}
          <div className="w-full lg:w-7/12 relative h-[400px] flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[#00d4ff] blur-[150px] opacity-10 rounded-full" />
            
            {/* The Interface Component */}
            <div className="w-full h-full bg-[#050505] border-t border-white/10 flex flex-col relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
              <div className="w-full h-10 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>
                <span className="font-mono text-[9px] text-zinc-600 uppercase">Memory Allocation Trace</span>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-end gap-2">
                 {/* Raw SVG Graphing */}
                 <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 100 C 30 80, 50 10, 100 5" fill="none" stroke="#00d4ff" strokeWidth="1" strokeDasharray="2 2" />
                    <path d="M 0 100 L 100 0" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                 </svg>
                 <div className="w-full flex justify-between text-[10px] font-mono text-zinc-500 mt-4 border-t border-white/5 pt-2">
                   <span>n = 10,000</span>
                   <span className="text-[#00d4ff]">0.02ms</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Boundless Row (Reversed) */}
        <div className="project-row flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 w-full">
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            <span className="font-mono text-xs text-stripe-magenta uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-stripe-magenta" /> Distributed Data
            </span>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">Portfolio CMS.</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Headless delivery via edge networks. Cryptographically secure asset caching across multiple availability zones ensures instantaneous payload resolution.
            </p>
            <div className="flex gap-4 font-mono text-xs text-zinc-500 uppercase tracking-widest border-l-2 border-white/10 pl-4">
              <span>MongoDB</span> • <span>AWS CDN</span> • <span>Edge</span>
            </div>
          </div>
          
          {/* Visualizer: Glowing Edge Map */}
          <div className="w-full lg:w-7/12 relative h-[400px] flex items-center justify-center">
             <div className="absolute inset-0 bg-stripe-magenta blur-[150px] opacity-10 rounded-full" />
             
             <div className="relative w-full h-full flex items-center justify-center z-10">
               {/* Central Core */}
               <div className="w-16 h-16 bg-black border border-stripe-magenta/30 shadow-[0_0_40px_rgba(255,77,184,0.3)] flex items-center justify-center rotate-45 z-20">
                 <div className="w-2 h-2 bg-stripe-magenta rounded-full animate-ping" />
               </div>
               
               {/* Radiating Lines connecting to Edge Nodes */}
               <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400">
                 <path d="M 200 200 L 100 100" stroke="rgba(255,77,184,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                 <path d="M 200 200 L 300 100" stroke="rgba(255,77,184,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                 <path d="M 200 200 L 100 300" stroke="rgba(255,77,184,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                 <path d="M 200 200 L 300 300" stroke="rgba(255,77,184,0.4)" strokeWidth="1" strokeDasharray="4 4" />
               </svg>

               {/* Text Tags in the void */}
               <div className="absolute top-[15%] left-[15%] font-mono text-[9px] text-zinc-500 uppercase">EU-West-1</div>
               <div className="absolute bottom-[15%] right-[15%] font-mono text-[9px] text-zinc-500 uppercase">US-East-2</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
