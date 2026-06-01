"use client";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section className="w-full bg-background pt-32 pb-40 relative z-30 border-t border-border-premium">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-start mb-32">
          <span className="text-xs font-mono tracking-[0.3em] text-gray-500 uppercase mb-4">01 // PROVEN ARCHITECTURES</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Core Production Releases.</h2>
        </div>

        <div className="flex flex-col gap-56">

          {/* Project 1: DSA Tracker — Data Execution Pipeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="font-mono text-xs text-stripe-indigo bg-stripe-indigo/10 px-2.5 py-1 rounded mb-6">DATA EXTRACTION ENGINE</span>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">DSA Tracker</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                An analytical parsing engine engineered to visualize space-time complexity arrays natively. Implements sub-millisecond memory execution monitoring hooks.
              </p>
              <div className="font-mono text-xs text-gray-500 space-y-2 w-full border-t border-border-premium pt-6">
                <div className="flex justify-between"><span className="text-gray-600">STATE SYNCHRONIZATION</span> <span className="text-white">Reactive Streams</span></div>
                <div className="flex justify-between"><span className="text-gray-600">STORAGE PERSISTENCE</span> <span className="text-white">PostgreSQL Timescale</span></div>
              </div>
            </div>

            {/* Unique Graphic Asset — Live Call Stack Simulator */}
            <div className="lg:col-span-7 bg-surface border border-border-premium rounded-lg p-6 h-[440px] flex flex-col justify-between overflow-hidden relative shadow-2xl">
              <div className="flex justify-between items-center text-[11px] font-mono text-gray-500 border-b border-border-premium pb-3">
                <span>MEM_ALLOC_TRACE</span>
                <span className="text-cyber-cyan">0.024ms EXEC TIME</span>
              </div>
              <div className="space-y-3 my-auto">
                {[
                  { label: "root_node_traverse", size: "w-full", color: "bg-stripe-indigo/60" },
                  { label: "binary_search_pivot", size: "w-[85%]", color: "bg-stripe-indigo/40" },
                  { label: "quicksort_partition", size: "w-[60%]", color: "bg-cyber-cyan/50" },
                  { label: "pointer_swap_execution", size: "w-[40%]", color: "bg-emerald-500/40" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    className="h-10 border border-white/[0.03] bg-black/40 rounded flex items-center justify-between px-4 font-mono text-xs"
                  >
                    <span className="text-gray-300">{item.label}</span>
                    <div className={`${item.size} h-1.5 ${item.color} rounded-sm ml-4`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Project 2: Portfolio CMS — Headless Distribution Architecture Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Unique Graphic Asset — Distributed Matrix */}
            <div className="lg:col-span-7 bg-surface border border-border-premium rounded-lg h-[440px] p-8 flex flex-col justify-between relative shadow-2xl order-2 lg:order-1">
              <div className="flex justify-between items-center text-[11px] font-mono text-gray-500 border-b border-border-premium pb-3">
                <span>HEADLESS_CDN_MAP</span>
                <span className="text-white">EDGE REPLICATION</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 font-mono my-auto">
                {['US-EAST (Primary)', 'EU-WEST (Replica)', 'AP-SOUTH (Replica)'].map((region, i) => (
                  <div key={i} className="border border-white/[0.03] bg-black/30 p-4 rounded flex flex-col justify-between h-36">
                    <span className="text-[10px] text-gray-500">{region}</span>
                    <div className="flex flex-col">
                      <span className="text-xl font-medium text-white">{i === 0 ? "0ms" : i === 1 ? "14ms" : "42ms"}</span>
                      <span className="text-[9px] text-gray-600 mt-1">REPLICATION SYNC</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start order-1 lg:order-2">
              <span className="font-mono text-xs text-cyber-cyan bg-cyber-cyan/10 px-2.5 py-1 rounded mb-6">ASSET INFRASTRUCTURE</span>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Portfolio CMS</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                A decoupled micro-CMS providing strict cryptographic asset distribution across geographical content delivery nodes via atomic transactional definitions.
              </p>
              <div className="font-mono text-xs text-gray-500 space-y-2 w-full border-t border-border-premium pt-6">
                <div className="flex justify-between"><span className="text-gray-600">DATA INTERFACE</span> <span className="text-white">GraphQL JSON Type</span></div>
                <div className="flex justify-between"><span className="text-gray-600">VALIDATION PROTOCOL</span> <span className="text-white">Strict Type Assertion</span></div>
              </div>
            </div>
          </div>

          {/* Project 3: System Design Explorer — High Density Pipeline Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded mb-6">SIMULATION SYSTEM</span>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">System Design Explorer</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                An architectural state canvas for mapping distributed systems engineering constraints, measuring real-time connection telemetry under variable loads.
              </p>
              <div className="font-mono text-xs text-gray-500 space-y-2 w-full border-t border-border-premium pt-6">
                <div className="flex justify-between"><span className="text-gray-600">STATE BACKEND</span> <span className="text-white">Immutability Engine</span></div>
                <div className="flex justify-between"><span className="text-gray-600">CONCURRENCY LIMIT</span> <span className="text-white">10k Nodes Evaluated</span></div>
              </div>
            </div>

            {/* Unique Graphic Asset — Distributed Mesh Array */}
            <div className="lg:col-span-7 bg-surface border border-border-premium rounded-lg h-[440px] p-6 flex flex-col justify-between relative shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center text-[11px] font-mono text-gray-500 border-b border-border-premium pb-3">
                <span>MESH_TOPOLOGY_TRACE</span>
                <span className="text-emerald-400">STATE ACTIVE</span>
              </div>
              
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute left-8 border border-white/10 bg-black p-3 rounded font-mono text-xs text-white z-10">
                  Ingress Proxy
                </div>
                <div className="absolute right-8 top-12 border border-white/5 bg-black/40 p-3 rounded font-mono text-[11px] text-gray-400">
                  Instance Group alpha
                </div>
                <div className="absolute right-8 bottom-12 border border-white/5 bg-black/40 p-3 rounded font-mono text-[11px] text-gray-400">
                  Instance Group beta
                </div>
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 300">
                  <path d="M 120 150 C 250 150, 200 70, 360 70" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
                  <path d="M 120 150 C 250 150, 200 230, 360 230" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
