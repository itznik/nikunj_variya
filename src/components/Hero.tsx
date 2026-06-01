"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Staggered entrance for text
    gsap.fromTo(".hero-text", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

    // Floating animation for data cloud nodes
    nodesRef.current.forEach((node, i) => {
      gsap.to(node, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-stripe-bg text-[#0a2540]">
      {/* Light Stripe Mesh Gradient */}
      <div className="absolute top-0 right-0 w-[150vw] h-[150vh] origin-top-right -rotate-12 bg-gradient-to-br from-[#635bff] via-[#bf7cff] to-[#00d4ff] opacity-10 z-0 translate-x-[30%] -translate-y-[20%]" />
      
      <div className="max-w-[1200px] mx-auto w-full px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
        
        <div className="flex flex-col items-start z-20">
          <span className="hero-text text-sm font-bold tracking-widest text-stripe-blurple uppercase mb-4">
            System Design & Algorithms
          </span>
          
          <h1 className="hero-text text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#0a2540] mb-6">
            Engineering <br />
            <span className="text-stripe-blurple">at Scale.</span>
          </h1>
          
          <p className="hero-text text-lg md:text-xl text-[#425466] font-medium max-w-md leading-relaxed mb-8">
            Specializing in high-performance data structures, distributed system architecture, and algorithmic optimization.
          </p>

          <button className="hero-text bg-stripe-blurple text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5851df] transition-all hover:scale-105 shadow-[0_15px_30px_rgba(99,91,255,0.3)]">
            View Architecture 
          </button>
        </div>

        {/* GSAP Data Cloud Visualizer */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px] h-full">
            
            {/* Core Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-2xl stripe-shadow flex items-center justify-center z-20 border border-gray-100">
              <span className="font-bold text-stripe-blurple text-xl">O(1)</span>
            </div>

            {/* Floating Data Nodes */}
            {[
              { label: "Graph Traversal", top: "10%", left: "10%", color: "bg-[#0a2540]" },
              { label: "B-Trees", top: "20%", right: "10%", color: "bg-stripe-blurple" },
              { label: "Hash Maps", bottom: "10%", left: "20%", color: "bg-[#00d4ff]" },
              { label: "Dynamic Prog", bottom: "25%", right: "15%", color: "bg-[#0a2540]" },
            ].map((node, i) => (
              <div 
                key={i}
                ref={(el) => { if (el) nodesRef.current[i] = el; }}
                className={`absolute ${node.top ? `top-[${node.top}]` : ''} ${node.bottom ? `bottom-[${node.bottom}]` : ''} ${node.left ? `left-[${node.left}]` : ''} ${node.right ? `right-[${node.right}]` : ''} ${node.color} text-white px-4 py-2 rounded-lg font-mono text-xs shadow-xl z-10 whitespace-nowrap`}
                style={{ top: node.top, bottom: node.bottom, left: node.left, right: node.right }}
              >
                {node.label}
              </div>
            ))}

            {/* Connecting SVG Lines (Static for visual structure) */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 450 500">
              <path d="M 225 250 L 100 100" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 225 250 L 350 150" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 225 250 L 150 400" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 225 250 L 380 350" stroke="#0a2540" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
