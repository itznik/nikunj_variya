"use client";

import ParticleCloud from "@/components/ParticleCloud";
import { WebGLBoundary } from "@/components/WebGLBoundary";
import { ArrowUpRight, Network, Code2, Database, Server } from "lucide-react";
// Importing OFFICIAL brand vectors
import { 
  SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiPostgresql, SiMongodb, SiFirebase, SiSupabase, 
  SiDocker, SiRedis, SiWebgl, SiThreedotjs, SiMysql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#F4F0E6] selection:bg-[#FF331F] selection:text-[#050505] font-sans overflow-x-hidden">
      
      {/* BACKGROUND GRAPHICS */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      <div className="fixed top-[-20%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#FF331F] opacity-[0.04] blur-[150px] pointer-events-none -z-10"></div>
      
      <WebGLBoundary fallback={<div className="fixed inset-0 -z-20 bg-[#050505]" />}>
        <ParticleCloud />
      </WebGLBoundary>

      {/* HEADER - FIXED COLLISION */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 h-16 flex items-center justify-between overflow-hidden">
          {/* Logo locked to left */}
          <div className="flex items-center gap-3 shrink-0 mr-6">
            <div className="w-2 h-2 bg-[#FF331F] shadow-[0_0_10px_#FF331F]"></div>
            <span className="font-bold text-sm sm:text-base tracking-widest text-white whitespace-nowrap">NV.SYS</span>
          </div>
          {/* Nav scrolls horizontally on tiny screens instead of crashing into logo */}
          <nav className="flex gap-4 sm:gap-8 font-mono text-[9px] sm:text-xs uppercase tracking-widest text-[#A6A19C] overflow-x-auto no-scrollbar whitespace-nowrap flex-1 justify-end">
            <a href="#work" className="hover:text-white transition-colors shrink-0">Deployments</a>
            <a href="#stack" className="hover:text-white transition-colors shrink-0">Stack</a>
            <a href="#contact" className="hover:text-[#FF331F] transition-colors shrink-0">Initialize</a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTAINER - FIXED EDGE CLIPPING WITH px-6 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col relative pt-24 sm:pt-32 pb-24">
        
        {/* HERO SECTION */}
        <main className="flex flex-col justify-center min-h-[75vh] sm:min-h-[80vh] relative z-10 border-b border-white/10 pb-16">
          <div className="relative w-full">
            <h1 className="text-[14vw] sm:text-[clamp(4rem,9vw,9rem)] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 z-20 relative">
              SYSTEMS.<br />ARCHITECT.
            </h1>
            
            <div className="absolute right-0 top-10 sm:top-1/4 w-32 h-32 sm:w-64 sm:h-64 opacity-20 pointer-events-none -z-10 animate-pulse">
               <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF331F]" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                  <circle cx="50" cy="50" r="30" />
                  <path d="M50 0 L50 100 M0 50 L100 50" strokeDasharray="2 2" />
               </svg>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mt-8 sm:mt-12 w-full">
            <p className="text-sm sm:text-lg text-[#A6A19C] font-light max-w-md leading-relaxed border-l-2 border-[#FF331F] pl-4 sm:pl-6">
              Engineering fault-tolerant distributed systems, high-performance web applications, and uncompromising digital infrastructure.
            </p>
            <button className="bg-white text-black px-6 sm:px-8 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 w-full md:w-auto hover:bg-[#FF331F] hover:text-white transition-colors duration-300">
              Initialize Sequence <ArrowUpRight size={16} />
            </button>
          </div>
        </main>

        {/* PROJECTS SECTION */}
        <section id="work" className="py-24 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white">Selected Works.</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="flex flex-col gap-12 sm:gap-24">
            <div className="group flex flex-col lg:flex-row gap-6 sm:gap-10 items-center w-full">
              <div className="relative w-full lg:w-3/5 aspect-[4/3] sm:aspect-video bg-[#111] border border-white/10 overflow-hidden group-hover:border-[#FF331F]/50 transition-colors rounded-xl sm:rounded-none">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Helpio Interface" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80 lg:opacity-0 transition-opacity"></div>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col gap-4">
                <span className="font-mono text-xs text-[#FF331F] uppercase tracking-widest flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-[#FF331F]"></div> Full-Stack Platform
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Helpio</h3>
                <p className="text-[#A6A19C] text-sm sm:text-base leading-relaxed font-light">
                  A gamified wishlist and donor fulfillment platform. Built with a complex relational database architecture to handle real-time verification systems and user leaderboards with zero lag.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white">Next.js</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white">PostgreSQL</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white">Tailwind</span>
                </div>
              </div>
            </div>

            <div className="group flex flex-col lg:flex-row-reverse gap-6 sm:gap-10 items-center w-full">
              <div className="relative w-full lg:w-3/5 aspect-[4/3] sm:aspect-video bg-[#111] border border-white/10 overflow-hidden group-hover:border-[#FF331F]/50 transition-colors rounded-xl sm:rounded-none">
                <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80" alt="Sillage Architecture" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col gap-4">
                <span className="font-mono text-xs text-[#FF331F] uppercase tracking-widest flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-[#FF331F]"></div> E-Commerce Architecture
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Sillage</h3>
                <p className="text-[#A6A19C] text-sm sm:text-base leading-relaxed font-light">
                  High-performance e-commerce architecture for luxury fragrances. Focused heavily on visually driven sales logic, optimizing asset delivery, and eliminating DOM layout shifts for a premium user feel.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white">React</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white">Node.js</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-wider text-white">Stripe API</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICIAL TECH STACK GRID */}
        <section id="stack" className="py-24 relative z-10">
          <div className="flex flex-col items-center justify-center gap-4 mb-16 text-center">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white">Core Arsenal.</h2>
            <p className="text-[#A6A19C] font-mono text-xs uppercase tracking-widest">Technologies & Architecture</p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { label: "Python", Icon: SiPython, color: "hover:border-[#3776AB]", textGlow: "group-hover:text-[#3776AB]" },
              { label: "Java", Icon: FaJava, color: "hover:border-[#007396]", textGlow: "group-hover:text-[#007396]" },
              { label: "React", Icon: SiReact, color: "hover:border-[#61DAFB]", textGlow: "group-hover:text-[#61DAFB]" },
              { label: "Next.js", Icon: SiNextdotjs, color: "hover:border-white", textGlow: "group-hover:text-white" },
              { label: "Node.js", Icon: SiNodedotjs, color: "hover:border-[#339933]", textGlow: "group-hover:text-[#339933]" },
              { label: "Express", Icon: SiExpress, color: "hover:border-white", textGlow: "group-hover:text-white" },
              { label: "PostgreSQL", Icon: SiPostgresql, color: "hover:border-[#4169E1]", textGlow: "group-hover:text-[#4169E1]" },
              { label: "SQL", Icon: SiMysql, color: "hover:border-[#4479A1]", textGlow: "group-hover:text-[#4479A1]" },
              { label: "MongoDB", Icon: SiMongodb, color: "hover:border-[#47A248]", textGlow: "group-hover:text-[#47A248]" },
              { label: "Firebase", Icon: SiFirebase, color: "hover:border-[#FFCA28]", textGlow: "group-hover:text-[#FFCA28]" },
              { label: "Supabase", Icon: SiSupabase, color: "hover:border-[#3ECF8E]", textGlow: "group-hover:text-[#3ECF8E]" },
              { label: "WebGL", Icon: SiWebgl, color: "hover:border-[#990000]", textGlow: "group-hover:text-[#990000]" },
              { label: "Three.js", Icon: SiThreedotjs, color: "hover:border-white", textGlow: "group-hover:text-white" },
              { label: "Docker", Icon: SiDocker, color: "hover:border-[#2496ED]", textGlow: "group-hover:text-[#2496ED]" },
              { label: "Redis", Icon: SiRedis, color: "hover:border-[#DC382D]", textGlow: "group-hover:text-[#DC382D]" },
            ].map((tech, idx) => (
              <div key={idx} className={`group bg-[#0A0A0A] border border-white/10 ${tech.color} transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4 sm:p-6 aspect-square rounded-2xl`}>
                <div className={`text-3xl sm:text-4xl text-[#555] ${tech.textGlow} transition-colors duration-300`}>
                  <tech.Icon />
                </div>
                <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#555] ${tech.textGlow} transition-colors duration-300`}>
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
