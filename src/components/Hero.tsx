"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Linear-style Ambient Glow - Deep and subtle, not a cheap gradient */}
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Apple-style Massive Typography & Linear-style Data */}
        <div className="lg:col-span-5 flex flex-col z-20 relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-surfaceBorder/30 border border-surfaceBorder px-2.5 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-accent/70 tracking-widest uppercase">System Online</span>
            </div>
            <span className="text-[10px] font-mono text-muted tracking-widest uppercase">
              V.2.0.4 // Architecture
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] text-accent mb-6"
          >
            Diagnostic <br />
            <span className="text-muted">Engineering.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-muted/80 max-w-sm leading-relaxed mb-10"
          >
            Bridging the clinical diagnostic logic of medicine with highly scalable, low-latency full-stack product architecture.
          </motion.p>

          {/* Dense, Technical Action Area */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex gap-6 items-center">
             <button className="bg-accent text-background px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors">
               Initialize Protocol
             </button>
             <div className="flex flex-col gap-1 font-mono text-[10px] text-muted">
               <span className="flex justify-between w-32"><span>Latency:</span> <span className="text-accent">12ms</span></span>
               <span className="flex justify-between w-32"><span>Throughput:</span> <span className="text-accent">99.9%</span></span>
             </div>
          </motion.div>
        </div>

        {/* Right Column: Stripe-style Custom Architecture Diagram */}
        <div className="lg:col-span-7 relative h-[600px] w-full flex items-center justify-end select-none">
          
          {mounted && (
            <div className="relative w-full max-w-[700px] h-full border border-surfaceBorder/30 bg-surface/20 rounded-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center">
              
              {/* Complex SVG Data Flow Network */}
              <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.05))' }}>
                {/* Main Node to Sub Nodes Paths */}
                <path d="M 200,300 C 350,300 350,150 500,150" fill="none" stroke="var(--color-surfaceBorder)" strokeWidth="1" />
                <path d="M 200,300 C 350,300 350,450 500,450" fill="none" stroke="var(--color-surfaceBorder)" strokeWidth="1" />
                <path d="M 500,150 L 600,150" fill="none" stroke="var(--color-surfaceBorder)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 500,450 L 600,450" fill="none" stroke="var(--color-surfaceBorder)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Animated Data Packets (Moving along paths) */}
                <motion.circle r="2" fill="var(--color-accent)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ offsetPath: "path('M 200,300 C 350,300 350,150 500,150')" }}
                />
                <motion.circle r="2" fill="var(--color-accent)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }}
                  style={{ offsetPath: "path('M 200,300 C 350,300 350,450 500,450')" }}
                />
              </svg>

              {/* Central Processor UI Component (Left) */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute left-[80px] top-[260px] w-64 bg-[#0A0A0A] border border-[#222] shadow-2xl rounded-lg p-4 z-10"
              >
                <div className="flex justify-between items-center mb-4 border-b border-[#222] pb-2">
                  <span className="text-xs font-mono text-accent">Root_Balancer</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#222]" />
                    <div className="w-2 h-2 rounded-full bg-[#222]" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-[#1A1A1A] rounded overflow-hidden">
                    <motion.div className="h-full bg-accent/50" animate={{ width: ["40%", "70%", "45%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-muted uppercase">
                    <span>CPU Load</span>
                    <span>Active</span>
                  </div>
                </div>
              </motion.div>

              {/* Sub Node UI 1 (Top Right) */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute right-[80px] top-[110px] w-48 bg-[#0A0A0A] border border-[#222] shadow-xl rounded-lg p-3 z-10"
              >
                <span className="text-[10px] font-mono text-muted block mb-2">DB_Cluster_01</span>
                <div className="text-xs text-accent font-medium">PostgreSQL High-Avail</div>
                <div className="mt-2 text-[9px] font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/10 inline-block px-1.5 py-0.5 rounded">SYNCED</div>
              </motion.div>

              {/* Sub Node UI 2 (Bottom Right) */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute right-[80px] top-[410px] w-48 bg-[#0A0A0A] border border-[#222] shadow-xl rounded-lg p-3 z-10"
              >
                <span className="text-[10px] font-mono text-muted block mb-2">Cache_Layer</span>
                <div className="text-xs text-accent font-medium">Redis Distributed</div>
                <div className="mt-2 text-[9px] font-mono text-amber-500 border border-amber-500/20 bg-amber-500/10 inline-block px-1.5 py-0.5 rounded">PURGING</div>
              </motion.div>

              {/* Floating Code/Log Terminal */}
              <motion.div
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 w-72 bg-[#050505] border border-[#222] rounded-md p-3 font-mono text-[9px] text-muted leading-relaxed z-20 shadow-2xl"
              >
                <div className="flex gap-2 mb-2 opacity-50">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <p><span className="text-emerald-500">➜</span> [OK] Client connection established</p>
                <p><span className="text-emerald-500">➜</span> [OK] Resolving diagnostic path</p>
                <p className="text-accent/50 animate-pulse">_ Waiting for handshake...</p>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
