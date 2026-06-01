"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f6f9fc] text-[#0a2540]">
      
      {/* Stripe Diagonal Color Sweep */}
      <div className="absolute top-0 right-0 w-[150vw] h-[150vh] origin-top-right -rotate-12 bg-gradient-to-br from-stripe-blurple via-[#bf7cff] to-[#ff6699] opacity-90 z-0 translate-x-[30%] -translate-y-[20%]" />
      
      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
        
        {/* Left: Massive Typography */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold tracking-wide text-stripe-blurple mb-4">
            Nikunj Variya // System Architect
          </span>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#0a2540] mb-6">
            Digital <br />
            infrastructure <br />
            <span className="text-stripe-blurple">to scale.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#425466] font-medium max-w-md leading-relaxed mb-8">
            Flexible, high-performance software architecture. Build products with the most comprehensive set of full-stack integrations.
          </p>

          <button className="bg-stripe-blurple text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5851df] transition-all hover:scale-105 shadow-lg flex items-center gap-2">
            Request Architecture Review <span className="text-xl leading-none">›</span>
          </button>
        </div>

        {/* Right: Floating White UI Card (Like the Zenflow receipt in your images) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-full max-w-[450px] mx-auto bg-white rounded-2xl stripe-shadow p-8 flex flex-col z-20"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-stripe-blurple to-stripe-pink flex items-center justify-center text-white font-bold text-xs">NV</div>
            <span className="font-semibold text-[#0a2540]">Platform Initialization</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#425466] text-sm">Status</span>
              <span className="bg-[#e3fcf7] text-[#0d9488] px-2 py-1 rounded text-xs font-semibold">Active Engine</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#425466] text-sm">Latency</span>
              <span className="font-mono text-[#0a2540] text-sm">12ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#425466] text-sm">Core Stack</span>
              <span className="flex gap-2">
                 <span className="text-xs font-bold bg-[#f6f9fc] px-2 py-1 rounded border border-gray-200 text-[#0a2540]">React</span>
                 <span className="text-xs font-bold bg-[#f6f9fc] px-2 py-1 rounded border border-gray-200 text-[#0a2540]">Node</span>
              </span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-end">
            <span className="text-[#425466] text-sm">Uptime</span>
            <span className="text-2xl font-bold text-[#0a2540]">99.999%</span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
