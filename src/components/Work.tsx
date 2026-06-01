"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    tag: "ALGORITHMIC ENGINE",
    color: "text-stripe-cyan bg-[#00d4ff]/10 border-[#00d4ff]/20",
    borderActive: "border-stripe-cyan",
    title: "DSA Tracker",
    description: "A high-performance algorithmic tracking engine. Built to visualize complex data structures and manage progressive learning metrics with zero latency.",
    tech: ["Next.js", "PostgreSQL", "Redis Cache"],
  },
  {
    tag: "DISTRIBUTED ARCHITECTURE",
    color: "text-[#ff4db8] bg-[#ff4db8]/10 border-[#ff4db8]/20",
    borderActive: "border-[#ff4db8]",
    title: "Portfolio CMS",
    description: "A headless content management system built on aggressive edge caching. Handles high-throughput payload delivery across global CDNs.",
    tech: ["TypeScript", "MongoDB", "AWS Edge"],
  },
  {
    tag: "SYSTEM SIMULATION",
    color: "text-stripe-blurple bg-stripe-blurple/10 border-stripe-blurple/20",
    borderActive: "border-stripe-blurple",
    title: "System Design Explorer",
    description: "An interactive canvas mapping large-scale system architectures. Employs complex state management to evaluate thousands of concurrent nodes.",
    tech: ["React Flow", "Supabase", "WebSockets"],
  }
];

export default function Work() {
  const container = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // GSAP Animation triggers every time the activeIndex changes
  useGSAP(() => {
    if (!graphicRef.current) return;
    
    // Snappy fade and scale effect for the graphic swap
    gsap.fromTo(graphicRef.current, 
      { opacity: 0, scale: 0.98 }, 
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, { dependencies: [activeIndex], scope: container });

  // Bespoke Visualizations
  const Graphic1 = () => (
    <div className="w-full h-full bg-[#0a1930] rounded-2xl flex items-center justify-center relative overflow-hidden border border-[#1a365d] stripe-shadow">
      <div className="absolute top-6 left-6 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded font-mono text-[10px] text-stripe-cyan shadow-lg z-10">
        MEMORY_ALLOC: 0.4ms
      </div>
      <div className="flex items-end justify-center gap-2 md:gap-3 h-1/2 w-full px-8">
        {[40, 80, 50, 100, 30, 90, 60, 75].map((h, i) => (
          <div key={i} className="w-4 md:w-6 bg-stripe-cyan rounded-t-sm opacity-80" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="absolute bottom-6 bg-[#0a2540]/80 backdrop-blur-sm border border-[#1a365d] px-4 py-2 rounded font-mono text-xs text-white">
        O(n log n) Execution
      </div>
    </div>
  );

  const Graphic2 = () => (
    <div className="w-full h-full bg-gradient-to-br from-[#1a103c] to-[#0a1930] rounded-2xl flex items-center justify-center relative overflow-hidden border border-[#2d2159] stripe-shadow">
      <div className="absolute top-6 left-6 bg-[#0a2540] border border-[#2d2159] px-3 py-1 rounded font-mono text-[10px] text-[#ff4db8] shadow-lg z-10">
        EDGE_REPLICATION: ACTIVE
      </div>
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-[#ff4db8]/20 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full border border-dashed border-[#ff4db8]/40 animate-[spin_20s_linear_infinite]" />
        <div className="absolute w-3/4 h-3/4 rounded-full border border-[#ff4db8]/10" />
        <div className="w-12 h-12 bg-[#ff4db8] rounded-full shadow-[0_0_30px_#ff4db8] z-10 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full animate-ping" />
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#ff4db8]" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#ff4db8]" />
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#ff4db8]" />
      </div>
    </div>
  );

  const Graphic3 = () => (
    <div className="w-full h-full bg-[#051120] rounded-2xl flex items-center justify-center relative overflow-hidden border border-[#1a365d] stripe-shadow">
      <div className="absolute top-6 left-6 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded font-mono text-[10px] text-stripe-blurple shadow-lg z-10">
        SYS_TOPOLOGY_MAP
      </div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
        <path d="M 150 250 L 350 150" stroke="#1a365d" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 150 250 L 350 350" stroke="#1a365d" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="150" cy="250" r="12" fill="#635bff" />
        <circle cx="350" cy="150" r="12" fill="#635bff" />
        <circle cx="350" cy="350" r="12" fill="#635bff" />
      </svg>
      <div className="absolute top-1/2 left-[80px] -translate-y-1/2 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded text-[10px] font-mono text-white">Load Balancer</div>
      <div className="absolute top-[150px] right-[40px] -translate-y-1/2 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded text-[10px] font-mono text-white">Microservice A</div>
      <div className="absolute top-[350px] right-[40px] -translate-y-1/2 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded text-[10px] font-mono text-white">Microservice B</div>
    </div>
  );

  const Graphics = [Graphic1, Graphic2, Graphic3];
  const ActiveGraphic = Graphics[activeIndex];

  return (
    <section id="work" ref={container} className="w-full bg-[#0a2540] relative z-20 border-t border-[#1a365d] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a365d]/40 via-[#0a2540] to-[#0a2540] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-[#adbdcc] uppercase mb-4 block">01 // Proven Systems</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Deployed Architectures.
          </h2>
        </div>

        {/* DESKTOP VIEW: Interactive Console Layout */}
        <div className="hidden md:grid grid-cols-12 gap-12 h-[550px]">
          
          {/* Left: Tab List */}
          <div className="col-span-5 flex flex-col gap-4 h-full justify-center">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? `bg-[#1a365d]/60 ${project.borderActive} shadow-lg` 
                      : `bg-[#0a2540] border-transparent hover:border-[#1a365d] hover:bg-[#1a365d]/30 opacity-70 hover:opacity-100`
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-[#adbdcc]'}`}>
                      {project.title}
                    </h3>
                    <span className={`text-[10px] font-bold font-mono px-2 py-1 rounded border ${isActive ? project.color : 'text-[#adbdcc] border-[#2a4365] bg-[#1a365d]'}`}>
                      {project.tag}
                    </span>
                  </div>
                  
                  {/* Expand content smoothly when active */}
                  <div className={`overflow-hidden transition-all duration-400 ${isActive ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-[#adbdcc] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-[#0a2540] border border-[#2a4365] px-2 py-1 rounded text-[#e2e8f0]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Graphic Container */}
          <div className="col-span-7 h-full">
            <div ref={graphicRef} className="w-full h-full">
              <ActiveGraphic />
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: Stacked Cards (Unchanged, keeps native swipe behavior safe) */}
        <div className="flex md:hidden flex-col gap-16">
          {projects.map((project, index) => {
            const CurrentGraphic = Graphics[index];
            return (
              <div key={index} className="flex flex-col">
                <span className={`text-[10px] font-bold font-mono px-3 py-1.5 rounded border inline-block w-max ${project.color} mb-4`}>
                  {project.tag}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-[#adbdcc] text-base leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 font-mono text-[10px] mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-[#1a365d] border border-[#2a4365] px-2 py-1 rounded text-[#e2e8f0]">{tech}</span>
                  ))}
                </div>

                <div className="w-full h-[300px]">
                  <CurrentGraphic />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
