"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Flowchart() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate data packets moving along SVG lines
    gsap.to(".data-packet-1", {
      motionPath: { path: "#path-1", align: "#path-1", alignOrigin: [0.5, 0.5] },
      duration: 2, repeat: -1, ease: "linear"
    });
    gsap.to(".data-packet-2", {
      motionPath: { path: "#path-2", align: "#path-2", alignOrigin: [0.5, 0.5] },
      duration: 2.5, repeat: -1, ease: "linear", delay: 0.5
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#051120] py-32 relative border-t border-[#1a365d] overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
          Unified API Architecture.
        </h2>
        <p className="text-[#adbdcc] text-lg text-center max-w-2xl mb-24">
          Robust, type-safe endpoints orchestrating thousands of database transactions, caching layers, and microservices seamlessly.
        </p>

        <div className="relative w-full h-[600px] flex justify-center items-center scale-75 md:scale-100">
          
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
             <path id="path-1" d="M 250 150 C 400 150 400 300 500 300" stroke="#2a4365" strokeWidth="2" strokeDasharray="4 4" fill="none" />
             <path id="path-2" d="M 750 150 C 600 150 600 300 500 300" stroke="#2a4365" strokeWidth="2" strokeDasharray="4 4" fill="none" />
             <path d="M 500 300 L 500 480" stroke="#2a4365" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          </svg>

          {/* Animated Packets */}
          <div className="data-packet-1 absolute w-3 h-3 bg-stripe-cyan rounded-full shadow-[0_0_10px_#00d4ff]" />
          <div className="data-packet-2 absolute w-3 h-3 bg-[#ff4db8] rounded-full shadow-[0_0_10px_#ff4db8]" />

          {/* Nodes */}
          <div className="absolute top-[120px] left-[150px] bg-white text-[#0a2540] px-6 py-4 rounded-xl font-bold shadow-xl z-10">
            Client SDK (React)
          </div>
          <div className="absolute top-[120px] right-[150px] bg-white text-[#0a2540] px-6 py-4 rounded-xl font-bold shadow-xl z-10">
            External API Layer
          </div>
          
          <div className="absolute top-[260px] left-1/2 -translate-x-1/2 w-32 h-32 bg-stripe-blurple rounded-2xl flex items-center justify-center z-20 shadow-[0_20px_40px_rgba(99,91,255,0.4)]">
            <span className="text-white font-bold text-xl">Core API</span>
          </div>

          <div className="absolute top-[460px] left-1/2 -translate-x-1/2 bg-[#1a365d] border border-[#2a4365] text-white px-8 py-4 rounded-xl font-mono text-sm z-10">
            PostgreSQL Cluster
          </div>
        </div>

      </div>
    </section>
  );
}
