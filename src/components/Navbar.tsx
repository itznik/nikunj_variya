"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // GSAP Scroll Logic: Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.4, ease: "power2.inOut" });
      } else {
        // Scrolling up
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div ref={navRef} className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      
      {/* 
        The Glassmorphic Shell 
        Deep black, heavy blur, ultra-thin border. It contrasts beautifully against the light Hero 
        and blends seamlessly into the dark Work sections.
      */}
      <nav className="pointer-events-auto bg-[#030303]/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-full px-3 py-2 md:px-4 md:py-2 flex items-center justify-between w-full max-w-4xl transition-all duration-500 hover:border-white/20 hover:bg-[#030303]/80">

        {/* LEFT: System Node (Identity) */}
        <div className="flex items-center gap-3 pl-2">
          {/* Orbital Logo Element */}
          <div className="relative flex items-center justify-center w-6 h-6">
            <svg className="absolute inset-0 w-full h-full animate-[spin_6s_linear_infinite]" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="#00d4ff" strokeWidth="1" strokeDasharray="4 8" fill="none" opacity="0.6" />
            </svg>
            <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shadow-[0_0_10px_#00d4ff]" />
          </div>
          <span className="font-mono text-[10px] md:text-xs font-bold text-white tracking-widest uppercase hidden sm:block">
            Nikunj.V
          </span>
        </div>

        {/* CENTER: Architectural Links (Hidden on mobile to maintain clean UI) */}
        <div className="hidden md:flex items-center gap-10">
          {['Work', 'Skills', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="group relative font-mono text-[9px] text-zinc-400 uppercase tracking-[0.25em] hover:text-white transition-colors duration-300"
            >
              {item}
              {/* Graphic Design Underline Effect */}
              <span className="absolute -bottom-3 left-1/2 w-0 h-[1px] bg-[#635bff] group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* RIGHT: Telemetry & Connect Protocol */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Faux System Latency Monitor */}
          <div className="hidden sm:flex items-center gap-2 border-r border-white/10 pr-4">
            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Ping</span>
            <span className="text-[9px] font-mono text-[#ff4db8]">12ms</span>
          </div>
          
          {/* Connect Button with Scanline Hover */}
          <a href="mailto:your-email@example.com" className="relative group overflow-hidden bg-white/5 border border-white/10 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-[9px] md:text-[10px] font-mono text-white uppercase tracking-widest hover:border-[#00d4ff]/50 transition-colors duration-300">
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse shadow-[0_0_8px_#00d4ff]" />
              Connect
            </span>
            {/* Borrowed the scanline effect from the footer for consistency */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />
          </a>
          
        </div>

      </nav>
    </div>
  );
}
