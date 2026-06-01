"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Cinematic fade and slide up for text elements
    gsap.utils.toArray(".about-reveal").forEach((el: any) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    // Parallax effect on the image container
    gsap.fromTo(".profile-parallax", 
      { y: 50 },
      {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, { scope: container });

  return (
    <section id="about" ref={container} className="w-full bg-black py-32 md:py-48 relative overflow-hidden bg-noise border-t border-white/5">
      
      {/* Deep Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#635bff] rounded-full blur-[200px] opacity-20 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: System HUD Photo Frame (Col-span-5) */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start order-2 lg:order-1 profile-parallax">
          
          <div className="relative w-full max-w-[400px] aspect-[4/5] flex items-center justify-center group">
            
            {/* Raw SVG Viewfinder Corners (No generic border box) */}
            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 400 500" fill="none">
              {/* Top Left */}
              <path d="M 0 40 L 0 0 L 40 0" stroke="#00d4ff" strokeWidth="2" />
              {/* Top Right */}
              <path d="M 360 0 L 400 0 L 400 40" stroke="#00d4ff" strokeWidth="2" />
              {/* Bottom Left */}
              <path d="M 0 460 L 0 500 L 40 500" stroke="#00d4ff" strokeWidth="2" />
              {/* Bottom Right */}
              <path d="M 360 500 L 400 500 L 400 460" stroke="#00d4ff" strokeWidth="2" />
              
              {/* Telemetry Target */}
              <circle cx="200" cy="250" r="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="250" r="2" fill="#ff4db8" className="animate-ping" />
            </svg>

            {/* The Actual Image Wrapper */}
<div className="relative w-[calc(100%-2rem)] h-[calc(100%-2rem)] bg-[#0a0a0a] overflow-hidden">
  
  {/* Your Actual Photo */}
  <Image 
    src="/profile-photo.jpg" 
    alt="Nikunj Variya" 
    fill 
    className="object-cover transition-all duration-500 mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105"
  />
  
  {/* GSAP Scanline overlay */}
  <div className="absolute top-0 left-0 w-full h-[20%] scanline mix-blend-screen pointer-events-none z-10" />
  
  {/* Vignette Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-20" />
</div>


            {/* Floating Data Tag */}
            <div className="absolute -right-6 bottom-12 bg-black border border-white/10 px-3 py-1.5 flex flex-col gap-1 z-30 shadow-[0_0_30px_rgba(0,0,0,1)]">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Verified</span>
              <span className="text-[10px] font-mono text-[#00d4ff] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse" /> Nikunj Variya
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT: Structural Typography (Col-span-7) */}
        <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
          
          <div className="about-reveal flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-[#ff4db8]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#ff4db8] uppercase">
              The Architect
            </span>
          </div>
          
          <h2 className="about-reveal text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.9] text-white mb-10">
            Driven by logic. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4db8] to-[#635bff]">
              Obsessed with scale.
            </span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl border-l border-white/10 pl-6">
            <p className="about-reveal">
              I am a Full-Stack Software Engineer focused on constructing resilient, low-latency applications. My engineering philosophy demands strict algorithmic efficiency, clean data structures, and uncompromised systemic integrity.
            </p>
            <p className="about-reveal">
              Every system whether a real-time matching engine or a distributed headless CMS is approached as a rigorous mathematical problem. I don't just assemble frameworks; I architect complete, deterministic environments engineered for peak execution.
            </p>
          </div>

          {/* Core Competencies (Raw Data Look, No Boxes) */}
          <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-8 w-full max-w-2xl">
            <div className="about-reveal flex flex-col gap-2">
              <span className="font-mono text-3xl text-white font-light tracking-tighter">01</span>
              <span className="text-sm font-bold text-[#00d4ff] uppercase tracking-widest">Algorithmic Precision</span>
              <span className="text-xs font-mono text-zinc-500">Space & Time Complexity optimization mapping.</span>
            </div>
            <div className="about-reveal flex flex-col gap-2">
              <span className="font-mono text-3xl text-white font-light tracking-tighter">02</span>
              <span className="text-sm font-bold text-[#635bff] uppercase tracking-widest">System Design</span>
              <span className="text-xs font-mono text-zinc-500">Distributed microservices & horizontal scaling.</span>
            </div>
            <div className="about-reveal flex flex-col gap-2">
              <span className="font-mono text-3xl text-white font-light tracking-tighter">03</span>
              <span className="text-sm font-bold text-[#ff4db8] uppercase tracking-widest">Data Architecture</span>
              <span className="text-xs font-mono text-zinc-500">Relational logic & high-throughput caching.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
