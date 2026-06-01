"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#f6f9fc] text-[#0a2540] pt-20">
      <div className="absolute top-0 right-0 w-[200vw] md:w-[150vw] h-[150vh] origin-top-right -rotate-12 bg-gradient-to-br from-stripe-blurple via-[#bf7cff] to-[#ff6699] opacity-90 z-0 translate-x-[20%] md:translate-x-[30%] -translate-y-[20%]" />
      
      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="flex flex-col items-start mt-10 md:mt-0">
          <span className="text-xs md:text-sm font-semibold tracking-wide text-stripe-blurple mb-4 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-stripe-blurple/20">
            v2.0.4 // Production Ready
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[1] md:leading-[0.9] text-[#0a2540] mb-6">
            Clinical <br className="hidden md:block" />
            logic for <br />
            <span className="text-stripe-blurple">the web.</span>
          </h1>
          
          <p className="text-base md:text-xl text-[#425466] font-medium max-w-md leading-relaxed mb-8">
            Applying diagnostic rigor to distributed systems. Full-stack software architecture engineered for absolute scale and precision.
          </p>

          <button className="bg-stripe-blurple text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#5851df] transition-all hover:scale-105 shadow-[0_10px_20px_rgba(99,91,255,0.3)] flex items-center gap-2 text-sm md:text-base">
            Explore Architecture <span className="text-xl leading-none">›</span>
          </button>
        </div>

        {/* Responsive Floating UI */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center lg:justify-end perspective-[1000px]">
          <motion.div 
            initial={{ y: 50, rotateX: 10, opacity: 0 }}
            animate={{ y: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="w-full max-w-[380px] md:max-w-[450px] bg-white rounded-2xl stripe-shadow p-6 md:p-8 flex flex-col z-20 relative"
          >
            <div className="absolute -top-4 -right-4 bg-[#0a2540] text-white text-[10px] font-mono px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              oversmartaloo_node
            </div>

            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0a2540] to-[#425466] flex items-center justify-center text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <span className="font-semibold text-[#0a2540] text-sm md:text-base">System Telemetry</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#425466] text-xs md:text-sm">Vortex Audio Engine</span>
                <span className="bg-[#e3fcf7] text-[#0d9488] px-2 py-1 rounded text-[10px] md:text-xs font-semibold">Synced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#425466] text-xs md:text-sm">Diagnostic Route</span>
                <span className="font-mono text-[#0a2540] text-xs md:text-sm">Active</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2, ease: "easeInOut" }} className="h-full bg-stripe-blurple" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
