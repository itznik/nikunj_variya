"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden linear-grid">
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
      
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20">
        
        {/* Left: Monolithic Typography Hierarchy */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-2 bg-white/[0.02] border border-border-premium px-3 py-1 rounded-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-stripe-indigo animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-400 uppercase">SYSTEM_STATE: STABLE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.85] text-white mb-8">
            Architecting <br />
            <span className="text-gray-500 font-medium">Production systems.</span>
          </h1>
          
          <p className="text-base text-gray-400 max-w-sm leading-relaxed mb-12 font-normal">
            Building rigorous, deterministic full-stack applications with absolute precision in state, memory, and data distribution.
          </p>

          <div className="flex items-center gap-8 border-t border-border-premium pt-8 w-full max-w-sm">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Engine Edition</span>
              <span className="text-sm font-medium text-white mt-1">2026.1.0</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Core Operations</span>
              <span className="text-sm font-medium text-white mt-1">Full-Stack / Scale</span>
            </div>
          </div>
        </div>

        {/* Right: Dense High-Fidelity Stripe UI Architecture Map */}
        <div className="lg:col-span-7 relative w-full h-[620px] flex items-center justify-center">
          
          {/* Main Node / Orchestrator Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-12 left-4 w-[340px] bg-surface border border-border-premium rounded-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] p-4 z-30"
          >
            <div className="flex justify-between items-center border-b border-border-premium pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-green-500/40" />
                <span className="text-[11px] font-mono text-gray-400 ml-1">gateway_router.ts</span>
              </div>
              <span className="text-[10px] font-mono text-stripe-indigo bg-stripe-indigo/10 px-2 py-0.5 rounded">EDGE</span>
            </div>
            <div className="font-mono text-[11px] text-gray-400 space-y-1.5 bg-black/40 p-3 rounded border border-white/[0.02]">
              <p className="text-gray-600"><span className="text-stripe-indigo">const</span> upstream = <span className="text-cyber-cyan">Deno.env</span>.get(<span className="text-emerald-500">"NODE_POOL"</span>);</p>
              <p className="text-gray-400"><span className="text-stripe-indigo">await</span> cluster.<span className="text-amber-400">dispatch</span>(req, {</p>
              <p className="text-gray-400">  strategy: <span className="text-emerald-500">"weighted_round_robin"</span>,</p>
              <p className="text-gray-400">  fallback: <span className="text-emerald-500">"failover_replica"</span></p>
              <p className="text-gray-400">});</p>
            </div>
          </motion.div>

          {/* Infrastructure Metrics Sub-Window */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 right-4 w-[380px] bg-surface border border-border-premium rounded-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] p-5 z-20"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono tracking-wider text-gray-400">METRICS::REPLICA_POOL</span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                HEALTHY
              </span>
            </div>
            
            {/* Hardcoded Custom Diagram System Grid */}
            <div className="space-y-4">
              <div className="border border-white/[0.02] bg-black/20 rounded p-3 flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Primary DB Connection Pool</p>
                  <p className="text-lg font-semibold text-white mt-0.5">04 / 64 <span className="text-xs text-gray-600 font-normal">active</span></p>
                </div>
                <svg className="w-16 h-8 text-stripe-indigo opacity-80" viewBox="0 0 60 20" fill="none">
                  <path d="M0 15 Q 15 5, 30 12 T 60 2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="border border-white/[0.02] bg-black/20 rounded p-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 mb-2">
                  <span>CACHE HIT RATE</span>
                  <span className="text-white">99.42%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "99.42%" }} 
                    transition={{ duration: 1.2, delay: 0.5 }} 
                    className="h-full bg-gradient-to-r from-stripe-indigo to-cyber-cyan" 
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deep Layer Background Architectural Connection Map */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 700 600" fill="none">
            <motion.path 
              d="M 240 220 C 350 220, 300 420, 440 420" 
              stroke="url(#stripeGradient)" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="stripeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#635BFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
          
        </div>
      </div>
    </section>
  );
}
