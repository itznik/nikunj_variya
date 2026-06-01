"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // 1. Text Entrance Animation
    gsap.fromTo(".hero-text", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );

    // 2. Floating UI Nodes Animation
    nodesRef.current.forEach((node, i) => {
      if (!node) return;
      gsap.to(node, {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">
      
      {/* Stripe-style Mesh Background */}
      <div className="absolute inset-0 mesh-gradient-light opacity-60 pointer-events-none z-0" />
      
      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT: Typography (Mobile stacks on top) */}
        <div className="flex flex-col items-start z-20 mt-10 lg:mt-0">
          <span className="hero-text text-xs md:text-sm font-bold tracking-widest text-stripe-blurple uppercase mb-4 bg-stripe-blurple/10 px-3 py-1 rounded-full">
            System Design & Algorithms
          </span>
          
          <h1 className="hero-text text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[1] md:leading-[0.9] text-[#0a2540] mb-6">
            Engineering <br />
            <span className="text-stripe-blurple">at Scale.</span>
          </h1>
          
          <p className="hero-text text-base md:text-xl text-[#425466] font-medium max-w-md leading-relaxed mb-8">
            Architecting high-performance data structures, distributed systems, and low-latency full-stack applications.
          </p>

          <div className="hero-text flex gap-4">
            <button className="bg-[#0a2540] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:bg-[#1a365d] transition-all shadow-lg flex items-center gap-2">
              Explore Architecture <span className="text-lg leading-none">›</span>
            </button>
          </div>
        </div>

        {/* RIGHT: Floating UI / Visualizer (Responsive Box) */}
        <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center lg:justify-end perspective-[1000px]">
          <div className="relative w-full max-w-[380px] md:max-w-[450px] h-full flex items-center justify-center">
            
            {/* Background SVG Connectors */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 450 500" preserveAspectRatio="xMidYMid meet">
              <path d="M 225 250 L 100 150" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 225 250 L 350 150" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 225 250 L 225 400" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Central Main Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-56 bg-white rounded-2xl stripe-shadow p-5 z-20 border border-gray-100 flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-xs font-bold text-[#425466] uppercase">Root Execution</span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#425466]">Time Complexity</span>
                  <span className="text-stripe-blurple font-bold">O(1)</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#425466]">Space Complexity</span>
                  <span className="text-[#00d4ff] font-bold">O(n)</span>
                </div>
              </div>
            </div>

            {/* Orbiting / Floating Nodes */}
            {[
              { label: "Data Pipeline", top: "15%", left: "5%", color: "bg-[#0a2540]", text: "text-white" },
              { label: "Load Balancer", top: "20%", right: "5%", color: "bg-white", text: "text-[#0a2540]", border: "border border-gray-200" },
              { label: "Redis Cache", bottom: "15%", left: "50%", transform: "-translate-x-1/2", color: "bg-stripe-blurple", text: "text-white" },
            ].map((node, i) => (
              <div 
                key={i}
                ref={(el) => { if (el) nodesRef.current[i] = el; }}
                className={`absolute ${node.top ? `top-[${node.top}]` : ''} ${node.bottom ? `bottom-[${node.bottom}]` : ''} ${node.left ? `left-[${node.left}]` : ''} ${node.right ? `right-[${node.right}]` : ''} ${node.color} ${node.text} ${node.border || ''} px-4 py-2 rounded-lg font-mono text-[10px] md:text-xs stripe-shadow-sm z-30 whitespace-nowrap`}
                style={{ transform: node.transform ? node.transform : 'none' }}
              >
                {node.label}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
