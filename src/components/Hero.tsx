"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 md:pb-32 overflow-hidden border-b border-surfaceBorder">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] md:bg-[size:64px_64px] opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Typography */}
        <div className="flex flex-col space-y-6 md:space-y-8 mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-muted font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 block">
              Nikunj Variya // System Architect
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] md:leading-[0.9] text-white">
              Engineering <br />
              <span className="text-muted">Precision.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted max-w-md leading-relaxed"
          >
            I architect high-performance software systems. Bridging diagnostic logic from my medical background with scalable full-stack engineering.
          </motion.p>
        </div>

        {/* Right: Architecture Concept (Now Mobile Responsive) */}
        <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
          {/* Card 1 - Server */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 20, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="absolute top-4 right-4 md:top-10 md:right-10 w-[200px] md:w-64 h-32 md:h-48 bg-surface/80 backdrop-blur-md border border-surfaceBorder rounded-xl shadow-2xl p-4 md:p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] md:text-xs font-mono text-muted">Core API</span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="space-y-2">
              <div className="h-1.5 md:h-2 w-full bg-white/10 rounded-full" />
              <div className="h-1.5 md:h-2 w-3/4 bg-white/10 rounded-full" />
              <div className="h-1.5 md:h-2 w-5/6 bg-white/10 rounded-full" />
            </div>
          </motion.div>

          {/* Card 2 - Database */}
          <motion.div
            initial={{ opacity: 0, x: -40, z: -50 }}
            animate={{ opacity: 1, x: 0, z: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="absolute bottom-4 left-4 md:bottom-10 md:left-10 w-[220px] md:w-72 h-24 md:h-32 bg-surface/90 backdrop-blur-md border border-surfaceBorder rounded-xl shadow-2xl p-4 md:p-6 flex items-center gap-4"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white md:w-5 md:h-5">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div>
              <div className="text-xs md:text-sm font-medium text-white">PostgreSQL Cluster</div>
              <div className="text-[10px] md:text-xs text-muted mt-1">99.99% Uptime</div>
            </div>
          </motion.div>

          {/* Connecting Line */}
          <svg className="absolute inset-0 w-full h-full z-[-1]" preserveAspectRatio="none">
             <motion.path
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 0.3 }}
               transition={{ duration: 1.5, delay: 0.8, ease: "circInOut" }}
               d="M50,250 Q150,250 200,100 T350,50"
               fill="none"
               stroke="white"
               strokeWidth="1.5"
               strokeDasharray="4 4"
               className="md:hidden"
             />
             <motion.path
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 0.3 }}
               transition={{ duration: 1.5, delay: 0.8, ease: "circInOut" }}
               d="M100,350 Q250,350 300,150 T450,100"
               fill="none"
               stroke="white"
               strokeWidth="1.5"
               strokeDasharray="4 4"
               className="hidden md:block"
             />
          </svg>
        </div>
      </div>
    </section>
  );
}
