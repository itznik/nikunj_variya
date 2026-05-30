"use client";

import ParticleCloud from "@/components/ParticleCloud";
import { WebGLBoundary } from "@/components/WebGLBoundary";
import { ArrowUpRight, Code2, Database, Server, Network } from "lucide-react";

// EXACT BRAND GEOMETRIES - Zero generic AI slop
const BrandIcons = {
  Python: () => <svg viewBox="0 0 110 110" fill="currentColor" className="w-full h-full"><path d="M53.8,4.3c-23.7,0-22.6,10.3-22.6,10.3l0,10.8h23.1v3.3H33.2c-15.8,0-18.1,9.8-18.1,27.1c0,16.8,3.2,26.1,18.1,26.1h7.6v-12c0-0.1,0-0.2,0-0.3c0-7.8,6.5-14.2,14.4-14.2h15.2c7.6,0,13.8-6.2,13.8-13.8V18.1C84.3,6.8,70.5,4.3,53.8,4.3z M38.6,12.7c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2C34.4,14.6,36.3,12.7,38.6,12.7z M84.8,45.8c0.1,0,0.2,0,0.3,0c7.8,0,14.2,6.5,14.2,14.4v15.2c0,7.6-6.2,13.8-13.8,13.8H63.6v-3.3h21.1c15.8,0,18.1-9.8,18.1-27.1c0-16.8-3.2-26.1-18.1-26.1h-7.6v12C77.1,45.8,84.8,45.8,84.8,45.8z M69.1,92.5c2.3,0,4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2C64.9,94.4,66.8,92.5,69.1,92.5z"/></svg>,
  React: () => <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className="w-full h-full"><circle cx="0" cy="0" r="2.05" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>,
  Next: () => <svg viewBox="0 0 180 180" fill="currentColor" className="w-full h-full"><path d="M90,14.63c-41.63,0-75.37,33.74-75.37,75.37c0,41.63,33.74,75.37,75.37,75.37c41.63,0,75.37-33.74,75.37-75.37C165.37,48.37,131.63,14.63,90,14.63z M125.75,129.56L71.39,59.39h-14.8v61.22h12.56V71.74l48.24,62.33C120.31,132.89,123.16,131.36,125.75,129.56z M135.97,120.61V59.39h-12.56v61.22H135.97z"/></svg>,
  Postgres: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M50.4,17.7c-5,0-10.3,1.3-14.8,3.3C18.4,28.6,8.8,46.5,14,64.4c2.8,9.7,9.5,18.4,18.8,22.8c-1.3-4.5-2-9.3-1.8-14 c0.3-6.5,2.4-12.9,6.5-17.9c4.3-5.3,10.6-8.9,17.4-9.8c8.8-1.2,18,1.4,24.4,7.8c3.2,3.2,5.5,7.3,7,11.6c4-7.4,5.4-16.2,3.7-24.5 C86.9,25.8,70.5,17.7,50.4,17.7z M48.7,47.8c-6.8,0.2-13.3,3.3-17.7,8.6c-4.4,5.3-6.6,12.3-6.4,19.2c0.2,6.9,2.8,13.6,7.5,18.7 c4.7,5.1,11.3,8.2,18.3,8.5c7,0.3,13.8-2.3,18.9-7c5.1-4.7,8.2-11.3,8.7-18.3C79.1,63.1,65.6,47.3,48.7,47.8z M49.8,55.9 c4.5-0.1,8.9,1.5,12.2,4.6c3.4,3.1,5.5,7.5,5.6,12.1c0.1,4.6-1.8,9-5.1,12.2c-3.3,3.1-7.8,4.9-12.4,4.7c-4.6-0.1-8.9-2.2-12-5.5 c-3.1-3.4-4.6-7.9-4.5-12.6C33.8,62.3,41,56.1,49.8,55.9z"/></svg>,
  Node: () => <svg viewBox="0 0 118 35" fill="currentColor" className="w-full h-full"><path d="M29.5,15.8v-7.1L18,2L6.4,8.7v13.5L18,29l11.5-6.7v-2.3l-11.5,6.7l-9.5-5.5V9.8l9.5-5.5l9.5,5.5v4.5L29.5,15.8z M61.7,11.9 c-0.6-2-2.1-3.6-4.1-4.3c-4.2-1.5-8.8,0.7-10.2,4.9c-1.5,4.2,0.7,8.8,4.9,10.2c2,0.6,4.2,0.6,6.2,0c2-0.6,3.6-2.1,4.3-4.1 C63.4,16.5,63.4,14,61.7,11.9z M59,18c-0.8,2.2-3.3,3.3-5.5,2.5s-3.3-3.3-2.5-5.5c0.8-2.2,3.3-3.3,5.5-2.5C58.7,13.3,59.8,15.8,59,18 z M92.5,7.6h-2v17.4h-2.1V7.6h-1.9c-2,0-3.9,0.8-5.3,2.2c-1.4,1.4-2.2,3.3-2.2,5.3c0,2,0.8,3.9,2.2,5.3c1.4,1.4,3.3,2.2,5.3,2.2h4 v-2h-4c-1.5,0-2.9-0.6-3.9-1.6c-1-1-1.6-2.4-1.6-3.9s0.6-2.9,1.6-3.9c1-1,2.4-1.6,3.9-1.6h5.9V7.6z M116.5,11.5 c-1.5-1.7-3.6-2.6-5.8-2.6h-7.1v13.5h7.1c2.3,0,4.4-0.9,5.9-2.6c1.6-1.7,2.4-4.1,2.4-6.5C118.9,15.5,118.1,13.1,116.5,11.5z M114.9,18.3c-1.1,1.2-2.6,1.8-4.3,1.8h-5v-9.4h5c1.7,0,3.2,0.7,4.3,1.8c1.2,1.2,1.8,2.9,1.8,4.7C116.7,15.5,116.1,17.2,114.9,18.3z M38.6,7.6v14.9h2v-8.7l5.4,8.7h2V7.6h-2v8.7l-5.4-8.7H38.6z M64.7,0.7v33.7h2V0.7H64.7z"/></svg>,
  MongoDB: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M50,10c0,0-17.5,10.5-22.5,28.5c-4.2,15.3-4.5,33.1-4.5,33.1s1,13.2,9.8,23.3c3.8,4.3,8.7,6.8,11.5,8 c2.2,0.9,4.5,0.8,5.7,0.8c1.1,0,3.5,0.1,5.7-0.8c2.8-1.2,7.7-3.7,11.5-8c8.8-10.1,9.8-23.3,9.8-23.3s-0.3-17.8-4.5-33.1 C67.5,20.5,50,10,50,10z M50.5,95.5c0,0-2.2-2.1-3.5-5.6c-1.5-4-1.8-10.4-1.8-15.5V41c0,0,0-3.3,2.4-7.8c2.4-4.5,3.6-7.2,3.6-7.2 s1.2,2.7,3.6,7.2C57.2,37.7,56.5,41,56.5,41v33.4c0,5.1,0,11.5-1.5,15.5C53.7,93.4,50.5,95.5,50.5,95.5z"/></svg>,
  Firebase: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M21.5,83.8l-7-44.2c-0.2-1.3,0.3-2.6,1.4-3.3c1-0.7,2.4-0.7,3.4,0l19.5,14.6L21.5,83.8z M50.4,26.7l-8.6,16.4l-7.3-7.5 c-0.8-0.8-2.1-0.9-3-0.2L50.4,26.7z M83.5,79.5L53.9,96.3c-2.3,1.3-5.2,1.3-7.5,0L18.4,79.5l30.6-59c0.9-1.8,3.5-1.8,4.5,0 L83.5,79.5z"/></svg>,
  Supabase: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M50,10C27.9,10,10,27.9,10,50c0,22.1,17.9,40,40,40c22.1,0,40-17.9,40-40C90,27.9,72.1,10,50,10z M68.5,47.8H54V76 c0,1.2-1.4,1.8-2.3,0.9L28.5,52.2c-0.6-0.6-0.1-1.6,0.7-1.6h14.5V24c0-1.2,1.4-1.8,2.3-0.9l23.2,24.7 C69.9,48.5,69.4,47.8,68.5,47.8z"/></svg>,
  SQL: () => <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" className="w-full h-full"><ellipse cx="50" cy="25" rx="35" ry="15" /><path d="M15,25 v25 c0,8.3,15.7,15,35,15 s35-6.7,35-15 v-25" /><path d="M15,50 v25 c0,8.3,15.7,15,35,15 s35-6.7,35-15 v-25" /></svg>,
  WebGL: () => <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full"><path d="M50 15 L85 35 L85 75 L50 95 L15 75 L15 35 Z" /><path d="M15 35 L50 55 L85 35 M50 55 L50 95" /></svg>,
  ThreeJS: () => <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" className="w-full h-full"><polygon points="50,10 90,80 10,80" /><polygon points="50,90 85,25 15,25" opacity="0.4" /></svg>,
  Express: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><text x="50%" y="55%" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">ex</text></svg>,
  Java: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M72,55c0,9.9-10.3,18-23,18s-23-8.1-23-18V45h46V55z M75,45h5c3.9,0,7,3.1,7,7s-3.1,7-7,7h-5V45z M35,35h28v4H35V35z M40,25h18v4H40V25z"/></svg>,
  Docker: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M85.4,50.1c-0.2-1.9-1.8-3.4-3.7-3.4h-5.2c0.2-1.1,0.3-2.1,0.3-3.1c0-6.1-4.9-11-11-11c-2,0-3.8,0.5-5.4,1.4 c-2-3-5.4-5-9.3-5c-6.1,0-11,4.9-11,11c0,1,0.1,2,0.3,3.1h-5.2c-1.9,0-3.5,1.5-3.7,3.4C21,49.2,10,55.4,10,63 c0,9.4,11.2,17,25,17h30c13.8,0,25-7.6,25-17C90,55.4,79,49.2,85.4,50.1z M52.5,41.4h-9v-9h9V41.4z M63.5,41.4h-9v-9h9V41.4z M41.5,41.4h-9v-9h9V41.4z M52.5,30.4h-9v-9h9V30.4z"/></svg>,
  Redis: () => <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M50,15L20,32v35l30,17l30-17V32L50,15z M46,69.5L28.5,59v-21L46,48.5V69.5z M50,42.5l-17.5-10L50,22l17.5,10L50,42.5z M54,69.5V48.5l17.5-10.5v21L54,69.5z"/></svg>
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#F4F0E6] selection:bg-[#FF331F] selection:text-[#050505] font-sans overflow-x-hidden">
      
      {/* RICH BACKGROUND GRAPHICS & TEXTURES */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      <div className="fixed top-[-20%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#FF331F] opacity-[0.04] blur-[150px] pointer-events-none -z-10"></div>
      
      <WebGLBoundary fallback={<div className="fixed inset-0 -z-20 bg-[#050505]" />}>
        <ParticleCloud />
      </WebGLBoundary>

      {/* FULL-WIDTH ARCHITECTURAL NAV */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#FF331F] shadow-[0_0_10px_#FF331F]"></div>
            <span className="font-bold text-sm sm:text-base tracking-widest text-white">NV.SYS</span>
          </div>
          <nav className="flex gap-6 sm:gap-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#A6A19C]">
            <a href="#work" className="hover:text-white transition-colors">Deployments</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#contact" className="hover:text-[#FF331F] transition-colors">Initialize</a>
          </nav>
        </div>
      </header>

      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col relative pt-24 sm:pt-32 pb-24">
        
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
            {/* PROJECT 1: Helpio */}
            <div className="group flex flex-col lg:flex-row gap-6 sm:gap-10 items-center w-full">
              <div className="relative w-full lg:w-3/5 aspect-[4/3] sm:aspect-video bg-[#111] border border-white/10 overflow-hidden group-hover:border-[#FF331F]/50 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
                  alt="Helpio Interface" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
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

            {/* PROJECT 2: Sillage */}
            <div className="group flex flex-col lg:flex-row-reverse gap-6 sm:gap-10 items-center w-full">
              <div className="relative w-full lg:w-3/5 aspect-[4/3] sm:aspect-video bg-[#111] border border-white/10 overflow-hidden group-hover:border-[#FF331F]/50 transition-colors">
                <img 
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80" 
                  alt="Sillage Architecture" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
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

        {/* EXACT TECH STACK GRID */}
        <section id="stack" className="py-24 relative z-10">
          <div className="flex flex-col items-center justify-center gap-4 mb-16 text-center">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white">Core Arsenal.</h2>
            <p className="text-[#A6A19C] font-mono text-xs uppercase tracking-widest">Technologies & Architecture</p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            
            {[
              { label: "Python", Icon: BrandIcons.Python, color: "hover:border-[#3B82F6]", textGlow: "group-hover:text-[#3B82F6]" },
              { label: "Java", Icon: BrandIcons.Java, color: "hover:border-[#F89820]", textGlow: "group-hover:text-[#F89820]" },
              { label: "React", Icon: BrandIcons.React, color: "hover:border-[#61DAFB]", textGlow: "group-hover:text-[#61DAFB]" },
              { label: "Next.js", Icon: BrandIcons.Next, color: "hover:border-white", textGlow: "group-hover:text-white" },
              { label: "Node.js", Icon: BrandIcons.Node, color: "hover:border-[#339933]", textGlow: "group-hover:text-[#339933]" },
              { label: "Express", Icon: BrandIcons.Express, color: "hover:border-white", textGlow: "group-hover:text-white" },
              { label: "PostgreSQL", Icon: BrandIcons.Postgres, color: "hover:border-[#336791]", textGlow: "group-hover:text-[#336791]" },
              { label: "SQL", Icon: BrandIcons.SQL, color: "hover:border-[#F29111]", textGlow: "group-hover:text-[#F29111]" },
              { label: "MongoDB", Icon: BrandIcons.MongoDB, color: "hover:border-[#47A248]", textGlow: "group-hover:text-[#47A248]" },
              { label: "Firebase", Icon: BrandIcons.Firebase, color: "hover:border-[#FFCA28]", textGlow: "group-hover:text-[#FFCA28]" },
              { label: "Supabase", Icon: BrandIcons.Supabase, color: "hover:border-[#3ECF8E]", textGlow: "group-hover:text-[#3ECF8E]" },
              { label: "WebGL", Icon: BrandIcons.WebGL, color: "hover:border-[#990000]", textGlow: "group-hover:text-[#990000]" },
              { label: "Three.js", Icon: BrandIcons.ThreeJS, color: "hover:border-white", textGlow: "group-hover:text-white" },
              { label: "Docker", Icon: BrandIcons.Docker, color: "hover:border-[#2496ED]", textGlow: "group-hover:text-[#2496ED]" },
              { label: "Redis", Icon: BrandIcons.Redis, color: "hover:border-[#DC382D]", textGlow: "group-hover:text-[#DC382D]" },
            ].map((tech, idx) => (
              <div key={idx} className={`group bg-[#0A0A0A] border border-white/10 ${tech.color} transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4 sm:p-6 aspect-square rounded-2xl`}>
                <div className={`w-8 h-8 sm:w-12 sm:h-12 text-[#A6A19C] ${tech.textGlow} transition-colors duration-300`}>
                  <tech.Icon />
                </div>
                <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#A6A19C] ${tech.textGlow} transition-colors duration-300`}>
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
