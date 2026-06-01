"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".hero-text", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }
    );

    // Floating 3D layers animation
    gsap.to(".layer-1", { z: 40, y: -10, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".layer-2", { z: 80, y: -20, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.2 });
    gsap.to(".layer-3", { z: 120, y: -30, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.4 });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Intense Boundless Glows (Stripe/Linear vibe) */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-stripe-blurple rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-stripe-cyan rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Typography - Absolute Apple Scale */}
        <div className="flex flex-col items-start z-20">
          <div className="hero-text flex items-center gap-3 mb-8">
            <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse glow-cyan" />
            <span className="font-mono text-xs text-[#00d4ff] uppercase tracking-[0.3em]">Full-Stack Architecture</span>
          </div>
          
          <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-gradient-hero">
            Engineered <br />
            to scale.
          </h1>
          
          <p className="hero-text text-lg md:text-xl text-zinc-400 font-medium max-w-lg leading-relaxed mb-10">
            I don't just write code. I design resilient data structures, architect distributed systems, and build UIs that feel flawless.
          </p>

          <button className="hero-text group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Initialize Sequence <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-stripe-cyan to-stripe-blurple opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>

        {/* The 3D Isometric Visualizer - NO BOXES */}
        <div className="relative w-full h-[500px] md:h-[600px] perspective-container flex items-center justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] preserve-3d isometric-tilt">
            
            {/* Layer 1: Database (Bottom) */}
            <div className="layer-1 absolute inset-0 bg-black/40 border border-stripe-blurple/30 backdrop-blur-md rounded-2xl flex items-center justify-center preserve-3d transform transition-transform shadow-[0_20px_50px_rgba(99,91,255,0.2)]">
              <div className="absolute -left-12 bottom-4 text-[10px] font-mono text-stripe-blurple -rotate-90 origin-bottom-left tracking-widest uppercase">PostgreSQL / Base</div>
              <svg className="w-24 h-24 text-stripe-blurple/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
            </div>

            {/* Layer 2: API/Backend (Middle) */}
            <div className="layer-2 absolute inset-0 bg-black/40 border border-stripe-cyan/40 backdrop-blur-md rounded-2xl flex items-center justify-center preserve-3d transform transition-transform glow-cyan">
              <div className="absolute -left-12 bottom-4 text-[10px] font-mono text-stripe-cyan -rotate-90 origin-bottom-left tracking-widest uppercase">Node.js / Logic</div>
              
              {/* Data Flow Lines */}
              <div className="w-full h-full relative overflow-hidden rounded-2xl">
                <div className="absolute top-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-stripe-cyan to-transparent opacity-50" />
                <div className="absolute top-2/4 w-full h-[1px] bg-gradient-to-r from-transparent via-stripe-cyan to-transparent opacity-50" />
                <div className="absolute top-3/4 w-full h-[1px] bg-gradient-to-r from-transparent via-stripe-cyan to-transparent opacity-50" />
                {/* Moving Packet */}
                <div className="absolute top-2/4 left-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff] animate-[ping_2s_linear_infinite]" />
              </div>
            </div>

            {/* Layer 3: Frontend/UI (Top) */}
            <div className="layer-3 absolute inset-0 bg-white/5 border border-white/20 backdrop-blur-xl rounded-2xl flex flex-col p-6 preserve-3d transform transition-transform shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="absolute -left-12 bottom-4 text-[10px] font-mono text-white -rotate-90 origin-bottom-left tracking-widest uppercase">Next.js / Client</div>
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="w-3/4 h-4 bg-white/10 rounded-md mb-3" />
              <div className="w-full h-20 bg-white/5 rounded-md border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/50">UI_RENDERED</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
