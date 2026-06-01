"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    tag: "ALGORITHMIC ENGINE",
    color: "text-stripe-cyan bg-[#00d4ff]/10 border-[#00d4ff]/20",
    title: "DSA Tracker",
    description: "A high-performance algorithmic tracking engine. Built to visualize complex data structures and manage progressive learning metrics with zero latency.",
    tech: ["Next.js", "PostgreSQL", "Redis Cache"],
  },
  {
    tag: "DISTRIBUTED ARCHITECTURE",
    color: "text-[#ff4db8] bg-[#ff4db8]/10 border-[#ff4db8]/20",
    title: "Portfolio CMS",
    description: "A headless content management system built on aggressive edge caching. Handles high-throughput payload delivery across global CDNs.",
    tech: ["TypeScript", "MongoDB", "AWS CloudFront"],
  },
  {
    tag: "SYSTEM SIMULATION",
    color: "text-stripe-blurple bg-stripe-blurple/10 border-stripe-blurple/20",
    title: "System Design Explorer",
    description: "An interactive canvas mapping large-scale system architectures. Employs complex state management to evaluate thousands of concurrent nodes.",
    tech: ["React Flow", "Supabase", "WebSockets"],
  }
];

export default function Work() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We use matchMedia so scroll-pinning ONLY happens on Desktop.
    // On mobile, they just stack normally without breaking the viewport.
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // 1. Pin the right-side visualizer container
      ScrollTrigger.create({
        trigger: ".work-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".right-pinned-section",
        pinSpacing: false,
      });

      // 2. Animate graphics fading in/out based on active text panel
      const panels = gsap.utils.toArray(".project-text-panel");
      const graphics = gsap.utils.toArray(".desktop-graphic");

      // Set initial state (show first graphic)
      gsap.set(graphics, { opacity: 0, scale: 0.95 });
      gsap.set(graphics[0], { opacity: 1, scale: 1 });

      panels.forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(graphics, { opacity: 0, scale: 0.95, duration: 0.4, ease: "power2.out" });
              gsap.to(graphics[i], { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
            }
          }
        });
      });
    });

    return () => mm.revert(); // Cleanup on unmount
  }, { scope: container });

  // Bespoke SVG / CSS Graphics for each project
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
        {/* Core Node */}
        <div className="w-12 h-12 bg-[#ff4db8] rounded-full shadow-[0_0_30px_#ff4db8] z-10 flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full animate-ping" />
        </div>
        {/* Edge Nodes */}
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
      <div className="absolute top-1/2 left-[80px] -translate-y-1/2 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded text-[10px] font-mono text-white">
        Load Balancer
      </div>
      <div className="absolute top-[150px] right-[40px] -translate-y-1/2 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded text-[10px] font-mono text-white">
        Microservice A
      </div>
      <div className="absolute top-[350px] right-[40px] -translate-y-1/2 bg-[#0a2540] border border-[#1a365d] px-3 py-1 rounded text-[10px] font-mono text-white">
        Microservice B
      </div>
    </div>
  );

  const Graphics = [Graphic1, Graphic2, Graphic3];

  return (
    <section id="work" ref={container} className="w-full bg-[#0a2540] relative z-20 border-t border-[#1a365d]">
      
      {/* Dark Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a365d]/40 via-[#0a2540] to-[#0a2540] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 work-container">
        
        {/* Section Header */}
        <div className="pt-24 pb-12 md:py-24 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-[#adbdcc] uppercase mb-4 block">01 // Proven Systems</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Deployed <br className="hidden md:block" /> Architectures.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pb-24 md:pb-0">
          
          {/* LEFT: Scrolling Text Panels (Desktop) / Stacked Cards (Mobile) */}
          <div className="flex flex-col gap-24 md:gap-0 md:pb-[30vh]">
            {projects.map((project, index) => {
              const CurrentGraphic = Graphics[index];
              return (
                <div key={index} className="project-text-panel flex flex-col items-start justify-center md:min-h-screen">
                  
                  <span className={`text-[10px] font-bold font-mono px-3 py-1.5 rounded-full border ${project.color} mb-6`}>
                    {project.tag}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#adbdcc] text-base md:text-lg leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 font-mono text-xs mb-8 md:mb-0">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-[#1a365d] border border-[#2a4365] px-3 py-1.5 rounded text-[#e2e8f0]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* MOBILE ONLY: Inline Graphic (Hidden on Desktop) */}
                  <div className="w-full h-[300px] mt-8 block md:hidden">
                    <CurrentGraphic />
                  </div>

                </div>
              );
            })}
          </div>

          {/* RIGHT: Pinned Visualizer Graphic (Desktop ONLY) */}
          <div className="hidden md:flex right-pinned-section flex-col justify-center h-screen sticky top-0 pb-[10vh]">
            <div className="relative w-full aspect-square max-h-[500px]">
              {Graphics.map((Graphic, index) => (
                <div key={index} className="desktop-graphic absolute inset-0 w-full h-full">
                  <Graphic />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
