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
    // 1. Reveal text rows smoothly
    gsap.utils.toArray(".project-text").forEach((text: any) => {
      gsap.fromTo(text, 
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          }
        }
      );
    });

    // 2. Draw SVG paths as you scroll (The "DrawSVG" effect without the premium plugin)
    gsap.utils.toArray(".draw-path").forEach((path: any) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: path,
          start: "top 75%",
        }
      });
    });

    // 3. Floating ambient nodes
    gsap.to(".ambient-node", {
      y: "random(-15, 15)",
      x: "random(-10, 10)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

  }, { scope: container });

  return (
    <section id="work" ref={container} className="w-full bg-[#0a2540] relative z-20 py-32 md:py-48 bg-noise border-t border-[#1a365d]">
      
      {/* Immersive Deep Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#635bff] rounded-full blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#00d4ff] rounded-full blur-[200px] opacity-10 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 flex flex-col gap-32 md:gap-56">
        
        {/* Section Header */}
        <div className="project-text flex flex-col items-center text-center">
          <span className="text-[10px] font-mono tracking-[0.4em] text-[#00d4ff] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#00d4ff]/50" /> 01 // Deployed Architectures <span className="w-12 h-[1px] bg-[#00d4ff]/50" />
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Systems in <span className="italic font-light text-[#635bff]">production.</span>
          </h2>
        </div>

        {/* ================= PROJECT 1 ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
          {/* Text */}
          <div className="project-text w-full lg:w-5/12 flex flex-col items-start order-2 lg:order-1">
            <span className="text-xs font-bold tracking-widest text-[#00d4ff] uppercase mb-4">Algorithmic Engine</span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">DSA Tracker.</h3>
            <p className="text-lg text-[#adbdcc] leading-relaxed mb-8">
              A high-performance algorithmic tracking engine. Engineered to visualize complex data structures and manage progressive learning metrics with zero rendering latency.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px] md:text-xs text-[#adbdcc] uppercase tracking-widest border-l-2 border-[#1a365d] pl-4">
              <span>Next.js</span> <span className="text-[#635bff]">/</span> <span>PostgreSQL</span> <span className="text-[#635bff]">/</span> <span>Redis</span>
            </div>
          </div>
          
          {/* Visualizer: Binary Search Tree Network */}
          <div className="w-full lg:w-7/12 relative aspect-square max-h-[500px] flex items-center justify-center order-1 lg:order-2">
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,212,255,0.2)]">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#635bff" />
                </linearGradient>
              </defs>
              
              {/* Animated Edges */}
              <path className="draw-path" d="M 250 100 L 150 220" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path className="draw-path" d="M 250 100 L 350 220" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path className="draw-path" d="M 150 220 L 80 350" stroke="#1a365d" strokeWidth="2" strokeDasharray="6 6" fill="none" />
              <path className="draw-path" d="M 150 220 L 220 350" stroke="url(#grad1)" strokeWidth="2" fill="none" />
              <path className="draw-path" d="M 350 220 L 420 350" stroke="#1a365d" strokeWidth="2" strokeDasharray="6 6" fill="none" />

              {/* Nodes */}
              <circle cx="250" cy="100" r="16" fill="#0a2540" stroke="#00d4ff" strokeWidth="3" className="ambient-node" />
              <circle cx="150" cy="220" r="12" fill="#0a2540" stroke="#635bff" strokeWidth="2" className="ambient-node" />
              <circle cx="350" cy="220" r="12" fill="#0a2540" stroke="#1a365d" strokeWidth="2" className="ambient-node" />
              <circle cx="220" cy="350" r="12" fill="#0a2540" stroke="#00d4ff" strokeWidth="2" className="ambient-node" />
              
              {/* Highlight Packet */}
              <circle cx="220" cy="350" r="4" fill="#00d4ff" className="animate-ping" />
            </svg>
            <div className="absolute bottom-[10%] left-[40%] font-mono text-[10px] text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-1 rounded">Target Found: O(log n)</div>
          </div>
        </div>

        {/* ================= PROJECT 2 ================= */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 w-full">
          {/* Text */}
          <div className="project-text w-full lg:w-5/12 flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest text-[#ff4db8] uppercase mb-4">Distributed Logistics Pipeline</span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Helpio.</h3>
            <p className="text-lg text-[#adbdcc] leading-relaxed mb-8">
              A full-stack algorithmic matching engine handling complex relational data. Built with strict verification middleware and real-time state synchronization to connect global supply with demand constraints.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px] md:text-xs text-[#adbdcc] uppercase tracking-widest border-l-2 border-[#1a365d] pl-4">
              <span>Node.js</span> <span className="text-[#ff4db8]">/</span> <span>PostgreSQL</span> <span className="text-[#ff4db8]">/</span> <span>WebSockets</span>
            </div>
          </div>
          
          {/* Visualizer: Global Routing Mesh */}
          <div className="w-full lg:w-7/12 relative aspect-square max-h-[500px] flex items-center justify-center">
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,77,184,0.15)]">
               {/* Orbital Grid */}
               <circle cx="250" cy="250" r="150" stroke="#1a365d" strokeWidth="1" strokeDasharray="4 4" fill="none" className="ambient-node" />
               <circle cx="250" cy="250" r="80" stroke="#1a365d" strokeWidth="1" fill="none" className="ambient-node" />
               
               {/* Pulsing Core */}
               <circle cx="250" cy="250" r="20" fill="#0a2540" stroke="#ff4db8" strokeWidth="4" />
               <circle cx="250" cy="250" r="6" fill="#ff4db8" className="animate-pulse" />

               {/* Connection Lines drawing outward */}
               <path className="draw-path" d="M 250 230 C 200 150, 150 150, 120 150" stroke="#ff4db8" strokeWidth="2" fill="none" />
               <path className="draw-path" d="M 270 250 C 350 250, 380 200, 380 180" stroke="#635bff" strokeWidth="2" fill="none" />
               <path className="draw-path" d="M 240 270 C 200 350, 200 380, 150 400" stroke="#00d4ff" strokeWidth="2" fill="none" />

               {/* Request Nodes */}
               <rect x="100" y="140" width="20" height="20" rx="4" fill="#0a2540" stroke="#ff4db8" strokeWidth="2" className="ambient-node" />
               <rect x="370" y="170" width="20" height="20" rx="4" fill="#0a2540" stroke="#635bff" strokeWidth="2" className="ambient-node" />
               <rect x="130" y="390" width="20" height="20" rx="4" fill="#0a2540" stroke="#00d4ff" strokeWidth="2" className="ambient-node" />
            </svg>
            <div className="absolute top-[25%] left-[10%] font-mono text-[9px] text-[#ff4db8] uppercase tracking-wider">Sync_Req_01</div>
            <div className="absolute bottom-[10%] left-[20%] font-mono text-[9px] text-[#00d4ff] uppercase tracking-wider">WebSocket_Active</div>
          </div>
        </div>

        {/* ================= PROJECT 3 ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
          {/* Text */}
          <div className="project-text w-full lg:w-5/12 flex flex-col items-start order-2 lg:order-1">
            <span className="text-xs font-bold tracking-widest text-[#635bff] uppercase mb-4">System Simulation</span>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">System Explorer.</h3>
            <p className="text-lg text-[#adbdcc] leading-relaxed mb-8">
              An interactive canvas mapping large-scale system architectures. Built with complex state management to evaluate thousands of concurrent nodes and connection telemetry under variable loads.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-[10px] md:text-xs text-[#adbdcc] uppercase tracking-widest border-l-2 border-[#1a365d] pl-4">
              <span>React Flow</span> <span className="text-[#635bff]">/</span> <span>Supabase</span> <span className="text-[#635bff]">/</span> <span>Node.js</span>
            </div>
          </div>
          
          {/* Visualizer: Massive Parallel Traces */}
          <div className="w-full lg:w-7/12 relative aspect-square max-h-[500px] flex items-center justify-center order-1 lg:order-2 overflow-hidden">
             {/* We use raw sweeping horizontal SVGs to simulate data traffic */}
             <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_20px_rgba(99,91,255,0.2)]">
               <path className="draw-path" d="M -50 200 C 150 200, 200 100, 350 100 L 550 100" stroke="#635bff" strokeWidth="3" fill="none" />
               <path className="draw-path" d="M -50 250 C 200 250, 250 300, 400 300 L 550 300" stroke="#00d4ff" strokeWidth="2" fill="none" strokeDasharray="8 4" />
               <path className="draw-path" d="M -50 300 C 150 300, 200 400, 350 400 L 550 400" stroke="#1a365d" strokeWidth="3" fill="none" />

               {/* Process Gates */}
               <rect x="250" y="50" width="4" height="400" fill="#1a365d" />
               <rect x="400" y="50" width="4" height="400" fill="#1a365d" />

               <circle cx="252" cy="145" r="6" fill="#635bff" className="ambient-node" />
               <circle cx="402" cy="275" r="6" fill="#00d4ff" className="ambient-node" />
             </svg>
             
             <div className="absolute top-[10%] left-[45%] font-mono text-[9px] text-[#635bff] uppercase tracking-wider">Gate 01: Ingress Proxy</div>
             <div className="absolute bottom-[20%] right-[5%] font-mono text-[9px] text-[#00d4ff] uppercase tracking-wider">Gate 02: Load Balancer</div>
          </div>
        </div>

      </div>
    </section>
  );
}
