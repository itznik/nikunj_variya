"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, Activity, Cpu } from "lucide-react";
// Corrected Official Imports - Zero Build Errors
import { 
  SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiPostgresql, SiMongodb, SiFirebase, SiSupabase, 
  SiDocker, SiRedis, SiWebgl, SiThreedotjs 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#030816] text-[#F4F0E6] selection:bg-[#635BFF] selection:text-white font-sans overflow-x-hidden">
      
      {/* BACKGROUND GRAPHICS: Full-bleed radial glows to prevent edge gaps */}
      <div className="fixed top-[-10%] right-[-5%] w-[80vw] h-[80vw] rounded-full bg-[#635BFF] opacity-[0.07] blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#00D4FF] opacity-[0.04] blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* EDGE-TO-EDGE NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#030816]/80 backdrop-blur-xl border-b border-white/5">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#635BFF] shadow-[0_0_12px_#635BFF] rounded-full"></div>
            <span className="font-bold text-sm sm:text-base tracking-widest text-white">NV.SYS</span>
          </div>
          <nav className="flex gap-4 sm:gap-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#8A9FB1] overflow-x-auto no-scrollbar">
            <a href="#deployments" className="hover:text-white transition-colors shrink-0">Deployments</a>
            <a href="#infrastructure" className="hover:text-white transition-colors shrink-0">Infrastructure</a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col relative pt-24 sm:pt-32 pb-24">
        
        {/* HERO SECTION */}
        <main className="min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center relative z-10 border-b border-white/5 pb-16">
          <div className="relative w-full">
            <h1 className="text-[13vw] sm:text-[clamp(4.5rem,9.5vw,9.5rem)] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 z-20 relative">
              SYSTEMS.<br />ARCHITECT.
            </h1>
            <div className="absolute right-0 top-10 sm:top-1/4 w-32 h-32 sm:w-64 sm:h-64 opacity-10 pointer-events-none -z-10 animate-[spin_40s_linear_infinite]">
               <svg viewBox="0 0 100 100" className="w-full h-full text-[#635BFF]" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="30" />
                  <path d="M50 0 L50 100 M0 50 L100 50" strokeDasharray="2 2" />
               </svg>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mt-8 sm:mt-12 w-full">
            <p className="text-sm sm:text-lg text-[#8A9FB1] font-light max-w-md leading-relaxed border-l-2 border-[#635BFF] pl-4 sm:pl-6">
              Engineering fault-tolerant distributed systems, high-performance web applications, and uncompromising UI/UX. Driven by pure code clarity.
            </p>
            <button className="bg-[#635BFF] text-white px-6 sm:px-8 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 w-full md:w-auto hover:bg-white hover:text-[#030816] transition-colors duration-300 shadow-[0_0_20px_rgba(99,91,255,0.2)]">
              Initialize Sequence <ArrowUpRight size={16} />
            </button>
          </div>
        </main>

        {/* BENTO GRID: HTML MOCK-UI PROJECTS */}
        <section id="deployments" className="py-24 relative z-10 border-b border-white/5">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">Deployments.</h2>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* HELPIO - Massive Mock UI Card */}
            <div className="col-span-1 lg:col-span-2 bg-[#0B1221] border border-[#1E293B] rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-[#635BFF]/50 transition-all duration-500 shadow-xl">
              <div className="w-full md:w-3/5 p-6 sm:p-10 bg-[#050B14] border-b md:border-b-0 md:border-r border-[#1E293B] relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                {/* HTML Dashboard Graphic */}
                <div className="w-full bg-[#0B1221] rounded-xl border border-[#1E293B] p-4 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700">
                  <div className="flex justify-between items-center mb-4 border-b border-[#1E293B] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#635BFF] flex items-center justify-center text-[10px] font-bold text-white">H</div>
                      <span className="text-xs font-bold text-white">Helpio DB_Auth</span>
                    </div>
                    <span className="px-2 py-1 bg-[#10B981]/10 text-[#10B981] text-[9px] font-mono rounded border border-[#10B981]/20">200 OK</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-[#1E293B] rounded overflow-hidden">
                      <div className="h-full w-[85%] bg-[#635BFF]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-[#8A9FB1]">
                      <span>Query Latency: 12ms</span>
                      <span>Nodes: Active</span>
                    </div>
                  </div>
                </div>
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,91,255,0.1),transparent_70%)]"></div>
              </div>
              
              <div className="w-full md:w-2/5 p-6 sm:p-10 flex flex-col justify-center gap-4">
                <span className="font-mono text-[10px] text-[#635BFF] uppercase tracking-widest">Full-Stack Platform</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Helpio</h3>
                <p className="text-sm text-[#8A9FB1] leading-relaxed">A gamified wishlist and donor fulfillment platform featuring real-time verification systems, complex relational architecture, and user leaderboards.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Next.js", "PostgreSQL", "Tailwind"].map(t => (
                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white uppercase">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* SILLAGE E-COMMERCE */}
            <div className="col-span-1 bg-[#0B1221] border border-[#1E293B] rounded-2xl overflow-hidden flex flex-col group hover:border-[#00D4FF]/50 transition-all duration-500 shadow-xl">
              <div className="h-56 p-6 bg-[#050B14] border-b border-[#1E293B] relative overflow-hidden flex items-center justify-center">
                {/* Fake E-Comm UI */}
                <div className="w-4/5 bg-[#0B1221] border border-[#1E293B] rounded-lg p-4 group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                  <div className="flex justify-between items-center mb-3">
                    <div className="h-3 w-16 bg-[#1E293B] rounded"></div>
                    <div className="h-3 w-8 bg-[#00D4FF] rounded"></div>
                  </div>
                  <div className="h-16 w-full bg-[#1E293B]/50 rounded mb-3 flex items-center justify-center">
                    <Activity size={20} className="text-[#8A9FB1]" />
                  </div>
                  <div className="h-6 w-full bg-[#00D4FF] rounded flex items-center justify-center text-[8px] font-bold text-[#030816]">CHECKOUT</div>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white">Sillage</h3>
                <p className="text-sm text-[#8A9FB1]">High-performance e-commerce architecture for luxury fragrances, optimizing asset delivery and eliminating layout shifts.</p>
                <div className="flex gap-2 mt-auto pt-4">
                   <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white uppercase">React</span>
                   <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white uppercase">Express</span>
                </div>
              </div>
            </div>

            {/* GOTRIP */}
            <div className="col-span-1 bg-[#0B1221] border border-[#1E293B] rounded-2xl overflow-hidden flex flex-col group hover:border-[#FFCA28]/50 transition-all duration-500 shadow-xl">
              <div className="h-56 p-6 bg-[#050B14] border-b border-[#1E293B] relative overflow-hidden flex items-center justify-center">
                 {/* Fake Map UI */}
                 <div className="w-full h-full border border-[#1E293B] rounded-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:10px_10px] opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#FFCA28] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#FFCA28] animate-pulse"></div>
                    <div className="absolute bottom-3 left-3 right-3 h-8 bg-[#0B1221] border border-[#1E293B] rounded flex items-center px-2 gap-2">
                       <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                       <div className="h-2 w-12 bg-[#8A9FB1] rounded"></div>
                    </div>
                 </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white">Gotrip</h3>
                <p className="text-sm text-[#8A9FB1]">Scalable tourism web application integrated with interactive mapping and secure administrative content management.</p>
                <div className="flex gap-2 mt-auto pt-4">
                   <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white uppercase">Next.js</span>
                   <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white uppercase">MongoDB</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ACTIVE NODE TECH MATRIX (Stripe-like flow diagram) */}
        <section id="infrastructure" className="py-24 relative z-10">
          <div className="flex items-center gap-4 mb-16 flex-row-reverse">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">Infrastructure.</h2>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>

          <div className="w-full bg-[#0B1221] border border-[#1E293B] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
            {/* Grid Pattern inside Matrix */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
              
              {/* Layer 1: Core Logic */}
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu size={16} className="text-[#635BFF]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">Logic Layer</span>
                </div>
                {[
                  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
                  { name: "Java", icon: FaJava, color: "text-[#007396]" }
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-4 bg-[#050B14] border border-[#1E293B] p-4 rounded-xl shadow-lg hover:border-[#635BFF]/50 transition-colors">
                    <t.icon size={24} className={t.color} />
                    <span className="font-bold text-sm text-white">{t.name}</span>
                  </div>
                ))}
              </div>

              {/* Connecting Line (Desktop horizontal, Mobile vertical) */}
              <div className="hidden lg:block h-[1px] flex-1 bg-gradient-to-r from-[#635BFF]/10 via-[#635BFF] to-[#00D4FF]/10 relative">
                 <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#635BFF] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#635BFF]"></div>
              </div>
              <div className="block lg:hidden w-[1px] h-12 bg-gradient-to-b from-[#635BFF]/10 via-[#635BFF] to-[#00D4FF]/10"></div>

              {/* Layer 2: API & Backend */}
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                <div className="flex items-center gap-2 mb-2">
                  <Server size={16} className="text-[#00D4FF]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">API & Data</span>
                </div>
                {[
                  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
                  { name: "Express", icon: SiExpress, color: "text-white" },
                  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
                  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" }
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-4 bg-[#050B14] border border-[#1E293B] p-4 rounded-xl shadow-lg hover:border-[#00D4FF]/50 transition-colors">
                    <t.icon size={24} className={t.color} />
                    <span className="font-bold text-sm text-white">{t.name}</span>
                  </div>
                ))}
              </div>

              {/* Connecting Line */}
              <div className="hidden lg:block h-[1px] flex-1 bg-gradient-to-r from-[#00D4FF]/10 via-[#00D4FF] to-[#10B981]/10 relative">
                 <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00D4FF] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00D4FF]"></div>
              </div>
              <div className="block lg:hidden w-[1px] h-12 bg-gradient-to-b from-[#00D4FF]/10 via-[#00D4FF] to-[#10B981]/10"></div>

              {/* Layer 3: Interface & BaaS */}
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-[#10B981]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white">Client Edge</span>
                </div>
                {[
                  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
                  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
                  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
                  { name: "Three.js", icon: SiThreedotjs, color: "text-white" }
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-4 bg-[#050B14] border border-[#1E293B] p-4 rounded-xl shadow-lg hover:border-[#10B981]/50 transition-colors">
                    <t.icon size={24} className={t.color} />
                    <span className="font-bold text-sm text-white">{t.name}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Row Infrastructure Nodes */}
            <div className="mt-12 pt-8 border-t border-[#1E293B] flex flex-wrap justify-center gap-4 relative z-10">
               {[
                  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
                  { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
                  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
                  { name: "WebGL", icon: SiWebgl, color: "text-[#990000]" }
               ].map((t) => (
                 <div key={t.name} className="flex items-center gap-2 px-4 py-2 bg-[#050B14] border border-[#1E293B] rounded-lg">
                    <t.icon size={16} className={t.color} />
                    <span className="font-mono text-[10px] text-white uppercase">{t.name}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
