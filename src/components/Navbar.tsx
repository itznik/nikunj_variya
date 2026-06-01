"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // GSAP Scroll Logic: Hide on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;

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
  }, [lastScrollY, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 1. THE COMMAND PILL (Bulletproof Absolute Pinning)
        Using "left-4 right-4" on mobile guarantees it leaves exactly 1rem of space on both sides.
        On desktop (md:), it centers itself with a max width.
      */}
      <nav 
        ref={navRef} 
        className="fixed top-4 left-4 right-4 md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-50 bg-[#0a2540] border border-white/10 shadow-[0_20px_40px_rgba(10,37,64,0.5)] rounded-full px-5 py-3 flex items-center justify-between"
      >

        {/* LEFT: System Node (Identity) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative flex items-center justify-center w-6 h-6">
            <svg className="absolute inset-0 w-full h-full animate-[spin_6s_linear_infinite]" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 8" fill="none" opacity="0.8" />
            </svg>
            <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shadow-[0_0_10px_#00d4ff]" />
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            Nikunj.V
          </span>
        </div>

        {/* CENTER: Architectural Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-10">
          {['Work', 'Skills', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="group relative font-mono text-[10px] text-[#adbdcc] uppercase tracking-[0.25em] hover:text-white transition-colors duration-300"
            >
              {item}
              <span className="absolute -bottom-3 left-1/2 w-0 h-[1px] bg-[#00d4ff] group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* RIGHT: Connect Protocol & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          
          <div className="hidden sm:flex items-center gap-2 border-r border-white/10 pr-4">
            <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">Ping</span>
            <span className="text-[9px] font-mono text-[#00d4ff]">12ms</span>
          </div>
          
          {/* Desktop Connect Button */}
          <a href="mailto:your-email@example.com" className="hidden md:flex relative group overflow-hidden bg-white/10 border border-white/20 rounded-full px-5 py-2 text-[10px] font-mono text-white uppercase tracking-widest hover:border-[#00d4ff]/50 transition-colors duration-300">
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full animate-pulse shadow-[0_0_8px_#00d4ff]" />
              Connect
            </span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent -translate-x-full group-hover:animate-[scan_1.5s_ease-in-out_infinite]" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white shrink-0 hover:bg-white/20 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
          
        </div>

      </nav>

      {/* 2. THE MOBILE HUD OVERLAY
      */}
      <div 
        className={`fixed inset-0 z-40 bg-[#030303]/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Ambient HUD Glows */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#635bff] rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#00d4ff] rounded-full blur-[100px] opacity-10" />

        <div className="flex flex-col items-center gap-10 z-10">
          
          <span className="font-mono text-[10px] text-[#00d4ff] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#00d4ff]" /> System Menu <span className="w-4 h-[1px] bg-[#00d4ff]" />
          </span>

          {['Work', 'Skills', 'About'].map((item, i) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-bold text-white tracking-tighter hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00d4ff] hover:to-[#635bff] transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}.
            </a>
          ))}

          <div className="mt-12">
            <a 
              href="mailto:your-email@example.com" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative overflow-hidden bg-white/5 border border-white/20 rounded-full px-8 py-4 text-xs font-mono text-white uppercase tracking-widest flex items-center gap-3"
            >
              <span className="w-2 h-2 bg-[#ff4db8] rounded-full animate-pulse shadow-[0_0_10px_#ff4db8]" />
              Execute Protocol
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
