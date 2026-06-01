"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Work() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".project-panel");
    const graphics = gsap.utils.toArray(".graphic-state");

    // Pin the right side graphic container
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".graphic-container",
      pinSpacing: false,
    });

    // Fade graphics in and out based on which text panel is active
    panels.forEach((panel: any, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(graphics, { opacity: 0, duration: 0.4 });
          gsap.to(graphics[i], { opacity: 1, duration: 0.4, scale: 1, ease: "back.out" });
        },
        onEnterBack: () => {
          gsap.to(graphics, { opacity: 0, duration: 0.4 });
          gsap.to(graphics[i], { opacity: 1, duration: 0.4, scale: 1, ease: "back.out" });
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-stripe-navy relative">
      <div className="absolute inset-0 mesh-gradient-dark opacity-50 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* LEFT: Scrolling Text Panels */}
        <div className="py-[30vh] space-y-[40vh]">
          
          {/* Project 1 */}
          <div className="project-panel flex flex-col items-start min-h-[40vh]">
            <div className="bg-[#1a365d] border border-[#2a4365] px-3 py-1 rounded-full text-stripe-cyan text-xs font-mono mb-6">ALGORITHMIC ENGINE</div>
            <h3 className="text-4xl font-bold text-white mb-4">DSA Tracker</h3>
            <p className="text-[#adbdcc] text-lg leading-relaxed mb-6">
              A high-performance algorithmic tracking engine. Built to visualize complex data structures and manage progressive learning metrics with zero latency.
            </p>
            <div className="flex gap-3 font-mono text-xs">
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white">Next.js</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white">PostgreSQL</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-panel flex flex-col items-start min-h-[40vh]">
            <div className="bg-[#1a365d] border border-[#2a4365] px-3 py-1 rounded-full text-[#ff4db8] text-xs font-mono mb-6">DISTRIBUTED ARCHITECTURE</div>
            <h3 className="text-4xl font-bold text-white mb-4">Portfolio CMS</h3>
            <p className="text-[#adbdcc] text-lg leading-relaxed mb-6">
              A headless content management system built on aggressive edge caching. Handles high-throughput payload delivery across global CDNs.
            </p>
            <div className="flex gap-3 font-mono text-xs">
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white">TypeScript</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white">MongoDB</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-panel flex flex-col items-start min-h-[40vh]">
            <div className="bg-[#1a365d] border border-[#2a4365] px-3 py-1 rounded-full text-stripe-blurple text-xs font-mono mb-6">SYSTEM SIMULATION</div>
            <h3 className="text-4xl font-bold text-white mb-4">System Design Explorer</h3>
            <p className="text-[#adbdcc] text-lg leading-relaxed mb-6">
              An interactive canvas mapping large-scale system architectures. Employs complex state management to evaluate thousands of concurrent nodes.
            </p>
            <div className="flex gap-3 font-mono text-xs">
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white">React Flow</span>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-white">Supabase</span>
            </div>
          </div>
          
        </div>

        {/* RIGHT: Pinned Visualizer Graphic */}
        <div className="hidden md:flex flex-col justify-center h-screen graphic-container sticky top-0">
          <div className="relative w-full h-[500px] glass-panel rounded-2xl flex items-center justify-center overflow-hidden">
            
            {/* Graphic 1: Array Sorting Visualization */}
            <div className="graphic-state absolute inset-0 flex items-end justify-center gap-2 pb-12 opacity-100 scale-95">
              {[40, 80, 60, 100, 30, 90, 50].map((h, i) => (
                <div key={i} className="w-8 bg-stripe-cyan rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
              <div className="absolute top-12 left-12 bg-[#0a2540] border border-white/10 px-4 py-2 rounded text-xs font-mono text-white shadow-xl">
                O(n log n) Execution
              </div>
            </div>

            {/* Graphic 2: Global Edge CDN Map */}
            <div className="graphic-state absolute inset-0 flex items-center justify-center opacity-0 scale-90">
              <div className="w-64 h-64 border-2 border-dashed border-[#ff4db8]/50 rounded-full animate-[spin_20s_linear_infinite] relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ff4db8] rounded-full shadow-[0_0_15px_#ff4db8]" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ff4db8] rounded-full shadow-[0_0_15px_#ff4db8]" />
              </div>
              <div className="absolute bg-[#0a2540] border border-white/10 px-4 py-2 rounded text-xs font-mono text-white shadow-xl">
                Edge Replication
              </div>
            </div>

            {/* Graphic 3: Node Network */}
            <div className="graphic-state absolute inset-0 flex items-center justify-center opacity-0 scale-90">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <path d="M 100 250 L 400 100" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M 100 250 L 400 400" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <circle cx="100" cy="250" r="10" fill="#635bff" />
                <circle cx="400" cy="100" r="10" fill="#635bff" />
                <circle cx="400" cy="400" r="10" fill="#635bff" />
              </svg>
              <div className="absolute top-1/2 left-[50px] -translate-y-1/2 bg-[#0a2540] border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-white">Load Balancer</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
