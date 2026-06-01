"use client";
import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section id="journey" className="w-full bg-[#f6f9fc] py-24 md:py-32 relative text-[#0a2540]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Execution Trace.</h2>
          <p className="text-[#425466] text-lg">The systemic progression from biological diagnostics to digital architecture.</p>
        </div>

        <div className="relative border-l-2 border-stripe-blurple/20 ml-4 md:ml-8 space-y-16">
          
          {/* Node 1: Foundation */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-stripe-blurple rounded-full shadow-[0_0_0_4px_rgba(99,91,255,0.1)]" />
            <span className="text-xs font-bold tracking-widest text-stripe-blurple uppercase mb-1 block">Root Protocol</span>
            <h3 className="text-2xl font-bold mb-2">The Medical Lineage</h3>
            <p className="text-[#425466] leading-relaxed">
              Before the code, there was clinical rigor. Alongside my sister, I entered the medical field (BHMS/Radiology) backed by the unwavering foundational support of our father. It taught me how to isolate failures in the most complex system known: the human body.
            </p>
          </div>

          {/* Node 2: Pivot */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-stripe-cyan rounded-full shadow-[0_0_0_4px_rgba(0,212,255,0.1)]" />
            <span className="text-xs font-bold tracking-widest text-stripe-cyan uppercase mb-1 block">Context Switch</span>
            <h3 className="text-2xl font-bold mb-2">Diagnostic Engineering</h3>
            <p className="text-[#425466] leading-relaxed">
              Applying the scientific method to software. Studying toxicology and case analysis rewired my brain to handle system design, data structures, and edge-case debugging. The diagnostic pipeline remained; the medium shifted to Next.js, Node, and Python.
            </p>
          </div>

          {/* Node 3: Current State */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-[#ff4db8] rounded-full shadow-[0_0_0_4px_rgba(255,77,184,0.1)]" />
            <span className="text-xs font-bold tracking-widest text-[#ff4db8] uppercase mb-1 block">Current State</span>
            <h3 className="text-2xl font-bold mb-3">Building the Infrastructure</h3>
            <p className="text-[#425466] leading-relaxed mb-4">
              Now focused on architecting full-stack web products and sophisticated algorithms. Balancing high-performance engineering with personal constants.
            </p>
            {/* Terminal Easter Egg */}
            <div className="bg-[#0a2540] text-gray-300 rounded-md p-3 font-mono text-[10px] md:text-xs shadow-lg inline-block w-full max-w-sm">
              <span className="text-emerald-400">➜</span> ~ ./run_diagnostics<br/>
              <span className="text-stripe-blurple">[sys]</span> mounting core modules...<br/>
              <span className="text-stripe-blurple">[sys]</span> establishing connection to Priya... <span className="text-emerald-400">OK</span><br/>
              <span className="text-stripe-blurple">[sys]</span> launching audio_buffer: VORTEX
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
