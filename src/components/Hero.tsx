"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Cinematic Typography Reveal
    gsap.fromTo(".reveal-text", 
      { y: 60, opacity: 0, rotateX: -20 }, 
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    );

    // 2. Data Stream Animations (The sweeping lines)
    gsap.to(".data-stream", {
      strokeDashoffset: -1000,
      duration: 15,
      repeat: -1,
      ease: "none",
    });

    // 3. Ambient Breathing of the System Core
    gsap.to(".system-core", {
      scale: 1.05,
      opacity: 0.8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 4. Orbiting Data Packets
    gsap.to(".orbit-packet", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 20,
      repeat: -1,
      ease: "linear"
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#f6f9fc] pt-24 pb-12 lg:pt-0 lg:pb-0 bg-noise">
      
      {/* 
        THE VISUALIZER: Massive Edge-to-Edge SVG Geometry
        We place this absolutely so it acts as an integrated graphic background, 
        interacting directly with the typography without being trapped in a box.
      */}
      <div className="absolute top-0 right-0 w-[150vw] md:w-[80vw] h-[100vh] translate-x-[20%] md:translate-x-[10%] opacity-80 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 800 800" className="w-full h-full max-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Stripe-style vibrant gradients */}
            <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#635bff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff4db8" stopOpacity="1" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#635bff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#635bff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Full Stack Concentric Rings */}
          <g className="system-rings" stroke="#0a2540" strokeOpacity="0.05" fill="none">
            {/* Database Layer */}
            <circle cx="400" cy="400" r="100" strokeWidth="1" strokeDasharray="4 4" />
            {/* API/Server Layer */}
            <circle cx="400" cy="400" r="220" strokeWidth="1" />
            {/* Client/Edge Layer */}
            <circle cx="400" cy="400" r="340" strokeWidth="1" strokeDasharray="2 8" />
          </g>

          {/* Glowing System Core */}
          <circle cx="400" cy="400" r="150" fill="url(#coreGlow)" className="system-core" />
          <circle cx="400" cy="400" r="15" fill="#635bff" className="system-core" />

          {/* Flowing Data Streams (Sweeping Bezier Curves) */}
          <path className="data-stream" d="M -100 800 C 200 800, 300 400, 400 400" fill="none" stroke="url(#streamGrad)" strokeWidth="3" strokeDasharray="200 800" strokeLinecap="round" />
          <path className="data-stream" d="M 800 -100 C 600 100, 500 400, 400 400" fill="none" stroke="url(#streamGrad)" strokeWidth="3" strokeDasharray="200 800" strokeLinecap="round" />
          <path className="data-stream" d="M 900 600 C 600 700, 500 400, 400 400" fill="none" stroke="url(#streamGrad)" strokeWidth="2" strokeDasharray="150 900" strokeLinecap="round" />

          {/* Orbiting Data Packets on the API Ring */}
          <g className="orbit-packet" style={{ transformOrigin: '400px 400px' }}>
            <circle cx="400" cy="180" r="6" fill="#00d4ff" />
            <circle cx="400" cy="620" r="4" fill="#ff4db8" />
          </g>
        </svg>
      </div>

      {/* 
        THE CONTENT: Integrated Typographic Layout 
        Positioned to flow perfectly with the graphic on both mobile and desktop.
      */}
      <div className="max-w-[1300px] mx-auto w-full px-6 relative z-10 flex flex-col justify-center h-full">
        
        <div className="max-w-3xl">
          <div className="reveal-text flex items-center gap-4 mb-8">
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#0a2540] rounded-full" />
              <span className="w-1.5 h-1.5 bg-[#0a2540] rounded-full opacity-50" />
              <span className="w-1.5 h-1.5 bg-[#0a2540] rounded-full opacity-20" />
            </div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#0a2540] uppercase">
              End-To-End Product Architecture
            </span>
          </div>
          
          <h1 className="reveal-text text-6xl sm:text-7xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.9] text-[#0a2540] mb-8">
            Engineered <br />
            <span className="bg-gradient-to-r from-[#635bff] to-[#00d4ff] text-gradient">products.</span> <br />
            Not just code.
          </h1>
          
          <p className="reveal-text text-lg md:text-2xl text-[#425466] font-medium max-w-xl leading-relaxed mb-12">
            I build scalable MERN stack applications, optimize complex algorithms, and architect distributed systems. From backend logic to high-performance user interfaces.
          </p>

          <div className="reveal-text flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            {/* Graphic Design style CTA (No bulky buttons, pure typography and iconography) */}
            <button className="group relative flex items-center gap-4 text-[#0a2540] font-bold text-lg md:text-xl">
              <div className="w-12 h-12 rounded-full border-2 border-[#0a2540] flex items-center justify-center group-hover:bg-[#0a2540] group-hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <span className="relative overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">View Projects</span>
                <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[#635bff]">Analyze Systems</span>
              </span>
            </button>

            {/* Technical Metatags floating on canvas */}
            <div className="flex gap-4 font-mono text-[10px] md:text-xs text-[#425466] uppercase tracking-widest sm:border-l sm:border-[#0a2540]/10 sm:pl-8">
              <div className="flex flex-col gap-1">
                <span className="text-[#0a2540] font-bold">Stack</span>
                <span>Full-Stack MERN</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#0a2540] font-bold">Logic</span>
                <span>DSA / Scale</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
