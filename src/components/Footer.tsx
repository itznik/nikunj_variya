"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Massive Typography Reveal
    gsap.fromTo(".contact-reveal", 
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );

    // 2. Converging Data Streams (SVG Lines)
    gsap.to(".stream-line", {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".horizon-graphic",
        start: "top 85%",
      }
    });

    // 3. Ambient Horizon Pulse
    gsap.to(".horizon-glow", {
      scale: 1.05,
      opacity: 0.6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  return (
    <footer ref={container} className="relative w-full bg-[#030303] pt-32 pb-8 overflow-hidden bg-noise border-t border-white/[0.02]">
      
      {/* THE VISUALIZER: Horizon Data Convergence
        Raw SVG geometry bending in perspective, drawing the eye to the CTA.
      */}
      <div className="horizon-graphic absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] md:w-[120vw] h-[60vh] pointer-events-none flex items-end justify-center z-0">
        
        {/* Massive Ambient Horizon Glow */}
        <div className="horizon-glow absolute bottom-[-20%] w-[60%] h-[50%] bg-gradient-to-t from-[#635bff] to-[#00d4ff] rounded-[100%] blur-[120px] opacity-30 mix-blend-screen" />
        
        {/* Converging Grid Lines */}
        <svg viewBox="0 0 1000 400" className="w-full h-full opacity-40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#635bff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Dynamic drawing paths simulating incoming connections */}
          <path className="stream-line" d="M 100 400 C 300 200, 450 100, 500 0" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="800" strokeDashoffset="800" />
          <path className="stream-line" d="M 300 400 C 400 200, 480 100, 500 0" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="600" strokeDashoffset="600" />
          <path className="stream-line" d="M 500 400 L 500 0" fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeDasharray="500" strokeDashoffset="500" />
          <path className="stream-line" d="M 700 400 C 600 200, 520 100, 500 0" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="600" strokeDashoffset="600" />
          <path className="stream-line" d="M 900 400 C 700 200, 550 100, 500 0" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="800" strokeDashoffset="800" />
        </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[50vh]">
        
        {/* Main CTA Sequence */}
        <div className="flex flex-col items-center text-center mb-24">
          <span className="contact-reveal flex items-center gap-3 font-mono text-[10px] md:text-xs text-[#00d4ff] uppercase tracking-[0.3em] mb-8">
            <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-ping" />
            System Runtime :: Ready
          </span>
          
          <h2 className="contact-reveal text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-[0.85] text-white mb-10">
            Establish <br />
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#635bff] to-[#ff4db8] text-gradient">Connection.</span>
          </h2>

          <div className="contact-reveal">
            {/* The "Anti-Button" - A raw, glowing execution protocol */}
            <a href="mailto:your-email@example.com" className="group relative inline-flex items-center gap-4 text-white font-mono text-sm md:text-base uppercase tracking-widest px-8 py-4 bg-white/5 border border-white/10 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 transition-all duration-500 overflow-hidden backdrop-blur-md">
              <span className="relative z-10 flex items-center gap-3">
                <FaEnvelope className="text-[#00d4ff]" /> Execute Handshake
              </span>
              {/* Scanline hover effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />
            </a>
          </div>
        </div>

        {/* Structural Footer Meta-Data */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 contact-reveal">
          
          {/* Identity & Location Node */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-mono text-[10px] text-zinc-500 uppercase tracking-widest text-center md:text-left">
            <div className="flex items-center gap-2 text-white">
              <div className="w-4 h-4 bg-gradient-to-tr from-[#635bff] to-[#00d4ff] text-[8px] flex items-center justify-center font-bold text-white rounded-sm">
                NV
              </div>
              Nikunj Variya
            </div>
            <span className="hidden md:block text-zinc-700">|</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> NODE: SURAT_IN
            </span>
            <span className="hidden md:block text-zinc-700">|</span>
            <span>© {new Date().getFullYear()} ALL SYSTEMS ACTIVE.</span>
          </div>

          {/* Social Network Targets */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-[#00d4ff] hover:-translate-y-1 transition-all duration-300">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-[#00d4ff] hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
          </div>
          
        </div>

      </div>
    </footer>
  );
}
