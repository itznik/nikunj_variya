"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.fromTo(".hero-text", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );

    nodesRef.current.forEach((node, i) => {
      if (!node) return;
      gsap.to(node, {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        duration: "random(2.5, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#f6f9fc] pt-24 pb-12 lg:pt-0 lg:pb-0">
      
      {/* Stripe-style Diagonal Gradient Background */}
      <div className="absolute top-0 right-0 w-[200vw] lg:w-[150vw] h-[150vh] origin-top-right -rotate-12 bg-gradient-to-br from-stripe-blurple via-[#bf7cff] to-[#ff4db8] opacity-10 lg:opacity-15 z-0 translate-x-[20%] lg:translate-x-[30%] -translate-y-[10%]" />
      
      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT: Typography */}
        <div className="flex flex-col items-start z-20 mt-8 lg:mt-0">
          <span className="hero-text text-[10px] md:text-xs font-bold tracking-widest text-stripe-blurple uppercase mb-4 bg-stripe-blurple/10 px-3 py-1.5 rounded-full border border-stripe-blurple/20">
            System Design & Algorithms
          </span>
          
          <h1 className="hero-text text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-[#0a2540] mb-6">
            Digital <br />
            infrastructure <br className="hidden md:block" />
            <span className="text-stripe-blurple">to scale.</span>
          </h1>
          
          <p className="hero-text text-base md:text-lg text-[#425466] font-medium max-w-md leading-relaxed mb-8">
            Architecting high-performance data structures, distributed systems, and low-latency full-stack applications.
          </p>

          <div className="hero-text">
            <button className="bg-[#0a2540] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-[#1a365d] transition-all shadow-lg flex items-center gap-2">
              Explore Architecture <span className="text-xl leading-none">›</span>
            </button>
          </div>
        </div>

        {/* RIGHT: Fixed Responsive Floating UI */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center lg:justify-end">
          
          {/* We wrap the entire UI cluster in a relative div that centers it */}
          <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square flex items-center justify-center">
            
            {/* Background SVG Connectors */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 400 400">
              <path d="M 200 200 L 80 120" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 200 200 L 320 100" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 200 200 L 200 340" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Central Main Node (Larger, better text contrast) */}
            <div className="relative w-[260px] md:w-[320px] bg-white rounded-2xl stripe-shadow p-5 md:p-6 z-20 border border-gray-100 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-xs md:text-sm font-bold text-[#0a2540] uppercase tracking-wide">Root Execution</span>
                <span className="flex items-center gap-1.5 bg-[#e3fcf7] text-[#0d9488] px-2 py-0.5 rounded text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  ACTIVE
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs md:text-sm font-mono border-b border-gray-50 pb-2">
                  <span className="text-[#425466]">Time Complexity</span>
                  <span className="text-stripe-blurple font-bold bg-stripe-blurple/10 px-2 py-0.5 rounded">O(1)</span>
                </div>
                <div className="flex justify-between items-center text-xs md:text-sm font-mono border-b border-gray-50 pb-2">
                  <span className="text-[#425466]">Space Complexity</span>
                  <span className="text-[#00d4ff] font-bold bg-[#00d4ff]/10 px-2 py-0.5 rounded">O(n)</span>
                </div>
                <div className="flex justify-between items-center text-xs md:text-sm font-mono">
                  <span className="text-[#425466]">Data Pipeline</span>
                  <span className="text-[#0a2540] font-bold">Synced</span>
                </div>
              </div>

              {/* Orbiting Nodes placed RELATIVE to the Main Card so they never overlap it */}
              
              {/* Top Left Node */}
              <div 
                ref={(el) => { if (el) nodesRef.current[0] = el; }}
                className="absolute -top-10 -left-6 md:-left-12 bg-[#0a2540] text-white px-4 py-2 rounded-lg font-mono text-[10px] md:text-xs stripe-shadow-sm whitespace-nowrap"
              >
                Data Pipeline
              </div>

              {/* Top Right Node */}
              <div 
                ref={(el) => { if (el) nodesRef.current[1] = el; }}
                className="absolute -top-8 -right-6 md:-right-10 bg-white text-[#0a2540] border border-gray-200 px-4 py-2 rounded-lg font-mono text-[10px] md:text-xs stripe-shadow-sm whitespace-nowrap flex items-center gap-2"
              >
                Load Balancer
              </div>

              {/* Bottom Node (Redis Cache - fixed!) */}
              <div 
                ref={(el) => { if (el) nodesRef.current[2] = el; }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-stripe-blurple to-[#ff4db8] text-white px-5 py-2 rounded-lg font-mono text-[10px] md:text-xs stripe-shadow-sm whitespace-nowrap"
              >
                Redis Cache Layer
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

