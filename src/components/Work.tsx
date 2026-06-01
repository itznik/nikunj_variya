"use client";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section id="work" className="w-full bg-stripe-navy py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 md:mb-24 text-center">
          Deployed Architectures.
        </h2>

        <div className="flex flex-col gap-24 md:gap-40">
          
          {/* Project 1: RadView Cloud (DICOM/Medical focus) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start order-2 lg:order-1">
              <div className="bg-[#1a365d] border border-[#2a4365] px-3 py-1 rounded-full text-stripe-cyan text-[10px] md:text-xs font-mono mb-6">MEDICAL IMAGING PIPELINE</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">RadView Cloud</h3>
              <p className="text-[#adbdcc] text-base md:text-lg leading-relaxed mb-8">
                A cloud-native DICOM viewer engineered for real-time diagnostic scanning. Bridging Next.js full-stack capabilities with Cornerstone.js to render complex anatomical telemetry without latency.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="border-t border-[#2a4365] pt-3">
                  <p className="text-[#adbdcc] text-xs uppercase tracking-wider mb-1">Renderer</p>
                  <p className="text-white font-medium">Cornerstone.js</p>
                </div>
                <div className="border-t border-[#2a4365] pt-3">
                  <p className="text-[#adbdcc] text-xs uppercase tracking-wider mb-1">Framework</p>
                  <p className="text-white font-medium">Next.js Edge</p>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-[300px] md:h-[400px] bg-[#0a192f] border border-[#1a365d] rounded-2xl p-4 md:p-6 shadow-2xl order-1 lg:order-2 overflow-hidden flex items-center justify-center">
              {/* Abstract DICOM/Brain Scan Visualization */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[80%] h-[80%] border border-stripe-cyan/20 rounded-full border-dashed" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[60%] h-[60%] border border-stripe-blurple/30 rounded-full border-dotted" />
              <div className="absolute bg-[#0a2540] px-4 py-2 border border-stripe-cyan/50 rounded font-mono text-xs text-stripe-cyan shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                SCAN_RENDER: ACTIVE
              </div>
            </div>
          </div>

          {/* Project 2: Helpio (Gamified Logistics) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#635bff] to-[#4035c5] rounded-2xl p-4 md:p-6 stripe-shadow overflow-hidden flex items-center justify-center">
               {/* Real-time Graph Concept */}
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                 <motion.path 
                   d="M0,200 C100,200 150,100 250,100 C350,100 400,250 500,250 L500,400 L0,400 Z" 
                   fill="rgba(255,255,255,0.1)"
                   initial={{ y: 50 }} animate={{ y: 0 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                 />
                 <path d="M0,200 C100,200 150,100 250,100 C350,100 400,250 500,250" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
               </svg>
               <div className="bg-white text-[#0a2540] px-4 py-2 rounded shadow-xl font-bold text-sm relative z-10 flex items-center gap-2">
                 <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Match Verified
               </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="bg-[#1a365d] border border-[#2a4365] px-3 py-1 rounded-full text-[#ff4db8] text-[10px] md:text-xs font-mono mb-6">GAMIFIED LOGISTICS</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Helpio</h3>
              <p className="text-[#adbdcc] text-base md:text-lg leading-relaxed mb-8">
                A full-stack algorithmic matching engine connecting donor liquidity with active requests. Features strict verification middleware and competitive leaderboard gamification.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="border-t border-[#2a4365] pt-3">
                  <p className="text-[#adbdcc] text-xs uppercase tracking-wider mb-1">Database</p>
                  <p className="text-white font-medium">PostgreSQL</p>
                </div>
                <div className="border-t border-[#2a4365] pt-3">
                  <p className="text-[#adbdcc] text-xs uppercase tracking-wider mb-1">State</p>
                  <p className="text-white font-medium">Real-time Node</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
