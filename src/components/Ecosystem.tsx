"use client";
import { motion } from "framer-motion";

export default function Ecosystem() {
  return (
    <section className="w-full bg-surface border-y border-surfaceBorder py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-16">
          02 // Core Architecture (About)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="max-w-xl">
             <h3 className="text-3xl font-medium text-white mb-8 tracking-tight">The intersection of diagnostic logic and binary execution.</h3>
             <p className="text-muted leading-relaxed mb-6">
               My foundation isn't standard computer science—it's medicine. As a BHMS student, I was trained to diagnose complex biological systems. As a software engineer, I apply that exact diagnostic rigor to algorithms, infrastructure, and full-stack architecture.
             </p>
             <p className="text-muted leading-relaxed">
               Every system—whether human physiology or a distributed database—requires robust problem-solving, structural integrity, and the ability to isolate failures rapidly.
             </p>
          </div>

          {/* Skill Map - Custom Engineering Nodes Instead of "Bars" */}
          <div className="relative h-[400px] border border-surfaceBorder rounded-xl bg-background/50 p-6 flex flex-col justify-between">
            <div className="text-xs font-mono text-muted uppercase tracking-widest">Stack.Map</div>
            
            <div className="grid grid-cols-3 gap-4 mt-auto">
              {/* Node 1 */}
              <div className="p-4 border border-surfaceBorder bg-surface rounded flex flex-col gap-2">
                <span className="text-[10px] text-muted font-mono uppercase">Frontend</span>
                <span className="text-sm text-white font-medium">React / Next.js</span>
              </div>
              {/* Node 2 */}
              <div className="p-4 border border-surfaceBorder bg-surface rounded flex flex-col gap-2">
                <span className="text-[10px] text-muted font-mono uppercase">Backend</span>
                <span className="text-sm text-white font-medium">Node / Python</span>
              </div>
              {/* Node 3 */}
              <div className="p-4 border border-surfaceBorder bg-surface rounded flex flex-col gap-2">
                <span className="text-[10px] text-muted font-mono uppercase">Database</span>
                <span className="text-sm text-white font-medium">Postgres / Mongo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
