"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Crisp typography reveal
    gsap.fromTo(".hero-text", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // Orbital Rotations
    gsap.to(".orbit-ring-1", { rotation: 360, duration: 40, repeat: -1, ease: "linear" });
    gsap.to(".orbit-ring-2", { rotation: -360, duration: 60, repeat: -1, ease: "linear" });
    
    // Floating Data Dots
    gsap.to(".data-particle", {
      y: "random(-15, 15)",
      x: "random(-15, 15)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#f6f9fc] pt-24 pb-12 lg:pt-0 lg:pb-0">
      
      {/* Massive Vibrant Diagonal Sweep */}
      <div className="absolute top-0 right-0 w-[200vw] lg:w-[150vw] h-[150vh] origin-top-right -rotate-12 bg-gradient-to-bl from-[#635bff] via-[#bf7cff] to-[#00d4ff] opacity-[0.12] lg:opacity-[0.15] z-0 translate-x-[20%] lg:translate-x-[30%] -translate-y-[10%] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT: Structural Typography (No Boxes) */}
        <div className="flex flex-col items-start z-20">
          <div className="hero-text flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#635bff]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#635bff] uppercase">
              System Design & Algorithms
            </span>
          </div>
          
          <h1 className="hero-text text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-[#0a2540] mb-6">
            Digital <br />
            infrastructure <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#635bff] to-[#ff4db8] text-gradient">to scale.</span>
          </h1>
          
          <p className="hero-text text-base md:text-lg text-[#425466] font-medium max-w-md leading-relaxed mb-10 border-l-2 border-[#635bff]/20 pl-4">
            Architecting high-performance data structures, distributed systems, and low-latency full-stack applications.
          </p>

          <div className="hero-text flex gap-6 items-center">
            <button className="group relative text-[#0a2540] font-bold text-sm md:text-base flex items-center gap-2 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 border-b-2 border-[#0a2540] pb-1">
                Explore Architecture <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <span className="font-mono text-xs text-[#425466] uppercase tracking-widest hidden md:block">
              [ O(1) Execution ]
            </span>
          </div>
        </div>

        {/* RIGHT: Boundless Orbital Node Graph (ZERO CARDS) */}
        <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center lg:justify-end scale-90 md:scale-100">
          
          <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
            
            {/* Raw SVG Connecting Geometry in the void */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-30" viewBox="0 0 450 450">
              <path d="M 225 225 L 50 100" stroke="#635bff" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 225 225 L 400 150" stroke="#ff4db8" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 225 225 L 150 400" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
            </svg>

            {/* Geometric Orbit Rings */}
            <div className="orbit-ring-1 absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-[#635bff]/10" />
            <div className="orbit-ring-2 absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-[#635bff]/20 border-dashed" />

            {/* Central Core (No borders, just gradient and glow) */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-[#635bff] to-[#00d4ff] flex items-center justify-center z-20 shadow-[0_0_50px_rgba(99,91,255,0.3)]">
               <div className="absolute inset-1 rounded-full bg-[#f6f9fc] flex flex-col items-center justify-center gap-1">
                 <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse shadow-[0_0_10px_#00d4ff]" />
                 <span className="text-[10px] md:text-xs font-bold text-[#0a2540] uppercase tracking-wider">Root</span>
               </div>
            </div>

            {/* Floating Data Points (No box containers, just raw text + nodes) */}
            
            {/* Top Left Node */}
            <div className="data-particle absolute top-[15%] left-[5%] flex flex-col items-end gap-1 z-30">
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm font-bold text-[#0a2540]">Load Balancer</span>
                <div className="w-3 h-3 bg-[#635bff] rounded-full" />
              </div>
              <span className="font-mono text-[9px] md:text-[10px] text-[#425466]">Active // 12ms</span>
            </div>

            {/* Right Node */}
            <div className="data-particle absolute top-[25%] right-[5%] flex flex-col items-start gap-1 z-30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ff4db8] rounded-full" />
                <span className="text-xs md:text-sm font-bold text-[#0a2540]">Redis Cache</span>
              </div>
              <span className="font-mono text-[9px] md:text-[10px] text-[#425466]">O(1) Time</span>
            </div>

            {/* Bottom Left Node */}
            <div className="data-particle absolute bottom-[15%] left-[25%] flex flex-col items-start gap-1 z-30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00d4ff] rounded-full" />
                <span className="text-xs md:text-sm font-bold text-[#0a2540]">PostgreSQL</span>
              </div>
              <span className="font-mono text-[9px] md:text-[10px] text-[#425466]">Master // Slave</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
