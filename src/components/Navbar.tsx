"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-200/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Note: Explicitly keeping the NV logo minimal per design standards */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-stripe-blurple to-stripe-pink flex items-center justify-center text-white font-bold text-sm shadow-md">
            NV
          </div>
          <span className={`font-semibold tracking-tight ${scrolled ? "text-[#0a2540]" : "text-[#0a2540]"}`}>
            Nikunj Variya
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#425466]">
          <a href="#work" className="hover:text-stripe-blurple transition-colors">Architecture</a>
          <a href="#journey" className="hover:text-stripe-blurple transition-colors">Trace Logic</a>
          <a href="#metrics" className="hover:text-stripe-blurple transition-colors">Telemetry</a>
        </div>

        <button className="bg-[#0a2540] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-stripe-blurple transition-colors shadow-md">
          Initialize
        </button>
      </div>
    </motion.nav>
  );
}
