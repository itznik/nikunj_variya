"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.div
      variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: -100, opacity: 0 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-white/40 stripe-shadow-sm rounded-full px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-stripe-navy flex items-center justify-center text-white font-bold text-xs">
            NV
          </div>
          <span className="font-semibold tracking-tight text-[#0a2540] hidden sm:block">
            Nikunj Variya
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#425466]">
          <a href="#work" className="hover:text-stripe-blurple transition-colors">Architecture</a>
          <a href="#skills" className="hover:text-stripe-blurple transition-colors">Stack</a>
          <a href="#about" className="hover:text-stripe-blurple transition-colors">About</a>
        </div>

        {/* CTA Button */}
        <button className="bg-stripe-blurple text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5851df] transition-colors">
          Initialize
        </button>
      </nav>
    </motion.div>
  );
}
