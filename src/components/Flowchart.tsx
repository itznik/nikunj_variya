"use client";
import { motion } from "framer-motion";

export default function Flowchart() {
  return (
    <section className="w-full bg-stripe-navy py-32 relative overflow-hidden">
      {/* Background Mesh Gradient (Matches Screenshot 9) */}
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
          Choose an integration path.
        </h2>
        <p className="text-[#adbdcc] text-lg text-center max-w-2xl mb-24">
          Connect your frontend layers, backend microservices, and databases through robust, typed APIs and pre-built architectures.
        </p>

        {/* The Node Diagram */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          
          {/* Dashed Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
             {/* Top Lines */}
             <path d="M 300 150 L 500 250" stroke="#425466" strokeWidth="2" strokeDasharray="4 4" fill="none" />
             <path d="M 700 150 L 500 250" stroke="#425466" strokeWidth="2" strokeDasharray="4 4" fill="none" />
             {/* Bottom Lines */}
             <path d="M 500 250 L 500 380" stroke="#425466" strokeWidth="2" strokeDasharray="4 4" fill="none" />
             <path d="M 500 250 L 750 300" stroke="#425466" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          </svg>

          {/* Top Left Node */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="absolute top-[100px] left-10 md:left-[200px] bg-[#635bff] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_10px_20px_rgba(99,91,255,0.4)] z-10">
            Next.js App Router
          </motion.div>

          {/* Top Right Node */}
          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="absolute top-[100px] right-10 md:right-[200px] bg-[#635bff] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_10px_20px_rgba(99,91,255,0.4)] z-10">
            Mobile Clients
          </motion.div>

          {/* Center Hub Node (Stripe style large square) */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute top-[200px] left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-[#635bff] to-[#4035c5] rounded-2xl stripe-shadow flex items-center justify-center z-20 border border-[#8a84ff]/30"
          >
            <span className="text-white font-bold text-xl tracking-tight">API Core</span>
          </motion.div>

          {/* Bottom Center Node */}
          <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="absolute top-[380px] left-1/2 -translate-x-1/2 bg-[#635bff] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_10px_20px_rgba(99,91,255,0.4)] z-10">
            PostgreSQL / MongoDB
          </motion.div>

          {/* Right Floating Node */}
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-[280px] right-4 md:right-[150px] bg-[#635bff] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_10px_20px_rgba(99,91,255,0.4)] z-10">
            AWS Pipeline
          </motion.div>

        </div>
      </div>
    </section>
  );
}
