import ParticleCloud from "@/components/ParticleCloud";
import { WebGLBoundary } from "@/components/WebGLBoundary";
import { ArrowUpRight, Code2, Database, Server, Cpu, Layers, GitBranch, Terminal, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] text-[#F4F0E6] selection:bg-[#FF331F] selection:text-[#0A0A0A] overflow-x-hidden font-sans">
      
      {/* 1. CINEMATIC TEXTURES & LIGHTING */}
      {/* Static Noise Overlay for physical matte texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      {/* Deep Ambient Spotlights */}
      <div className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#FF331F] opacity-[0.03] blur-[100px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#F4F0E6] opacity-[0.02] blur-[100px] pointer-events-none -z-10"></div>

      {/* WebGL Layer */}
      <WebGLBoundary fallback={<div className="fixed inset-0 -z-20 bg-[#0A0A0A]" />}>
        <ParticleCloud />
      </WebGLBoundary>

      {/* 2. FLOATING "DYNAMIC ISLAND" NAVIGATION */}
      <div className="fixed top-6 left-0 w-full flex justify-center z-40 px-4">
        <nav className="flex items-center justify-between px-6 py-3 bg-[#1C1A19]/80 backdrop-blur-xl border border-[#2A2726] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-full max-w-md">
          <span className="font-bold text-sm tracking-widest flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF331F] rounded-sm"></div> NV.SYS
          </span>
          <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-[#A6A19C]">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          </div>
        </nav>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col relative pt-32 pb-24">
        
        {/* 3. IMMERSIVE HERO SECTION */}
        <main className="flex flex-col justify-center min-h-[70vh] sm:min-h-[80vh] relative z-10 border-b border-[#2A2726]/50 pb-12">
          {/* Overlapping Graphic Typography */}
          <div className="relative">
            <h1 className="text-[clamp(3.5rem,15vw,10rem)] font-bold leading-[0.85] tracking-tighter mix-blend-difference z-20 relative text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              SYSTEMS.
              <br />
              ARCHITECT.
            </h1>
            {/* Absolute positioned graphical accent behind text */}
            <div className="absolute top-1/4 right-[10%] w-32 h-32 border border-[#FF331F]/30 rounded-full flex items-center justify-center -z-10 animate-[spin_20s_linear_infinite]">
              <div className="w-full h-[1px] bg-[#FF331F]/30"></div>
              <div className="absolute w-[1px] h-full bg-[#FF331F]/30"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mt-12 w-full">
            <p className="text-sm sm:text-lg text-[#A6A19C] font-light max-w-md leading-relaxed border-l-2 border-[#FF331F] pl-4">
              Engineering fault-tolerant distributed systems, high-performance web applications, and uncompromising digital infrastructure.
            </p>
            <button className="relative overflow-hidden group bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 w-full md:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 flex items-center gap-2">
                Initialize Sequence <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#FF331F] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
          </div>
        </main>

        {/* 4. TRUE BENTO GRID (THE WORK) */}
        <section id="work" className="py-24 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">Deployments.</h2>
            <div className="h-[1px] flex-1 bg-[#2A2726]"></div>
          </div>

          {/* Locked Aspect Ratio Grid - Forces perfect mobile fit */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            
            {/* Project 1: Large Featured (Span 2 cols, 2 rows) */}
            <div className="col-span-2 row-span-2 group relative bg-[#1C1A19] border border-[#2A2726] rounded-3xl overflow-hidden flex flex-col justify-end p-6 sm:p-10 hover:border-[#FF331F]/50 transition-colors">
              {/* Complex SVG Blueprint Background */}
              <svg className="absolute inset-0 w-full h-full opacity-20 text-[#2A2726] group-hover:scale-105 transition-transform duration-700" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M0,70 Q25,20 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10"></div>
              
              <div className="relative z-20 flex flex-col gap-3">
                <div className="w-12 h-12 bg-[#FF331F] text-black rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,51,31,0.4)]">
                  <Network size={20} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">Distributed Message Queue</h3>
                <p className="text-xs sm:text-sm text-[#A6A19C] line-clamp-2">Fault-tolerant, horizontally scalable broker architecture utilizing advanced system design principles.</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-black/50 border border-[#2A2726] rounded text-[9px] uppercase tracking-widest text-[#FF331F]">Python</span>
                  <span className="px-2 py-1 bg-black/50 border border-[#2A2726] rounded text-[9px] uppercase tracking-widest">Docker</span>
                </div>
              </div>
            </div>

            {/* Project 2: Mobile Square Tile */}
            <div className="col-span-1 row-span-1 group relative bg-[#1C1A19] border border-[#2A2726] rounded-3xl overflow-hidden p-5 flex flex-col justify-between hover:bg-[#2A2726]/30 transition-colors aspect-square">
              <div className="flex justify-between items-start">
                <Code2 size={24} className="text-[#A6A19C] group-hover:text-white transition-colors" />
                <ArrowUpRight size={16} className="text-[#A6A19C] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div>
                <h3 className="text-base font-bold leading-tight">Graph Traversal</h3>
                <span className="text-[9px] text-[#A6A19C] uppercase tracking-widest mt-1 block">Algorithms</span>
              </div>
            </div>

            {/* Project 3: Mobile Square Tile */}
            <div className="col-span-1 row-span-1 group relative bg-[#1C1A19] border border-[#2A2726] rounded-3xl overflow-hidden p-5 flex flex-col justify-between hover:bg-[#2A2726]/30 transition-colors aspect-square">
              <div className="flex justify-between items-start">
                <Database size={24} className="text-[#A6A19C] group-hover:text-white transition-colors" />
                <ArrowUpRight size={16} className="text-[#A6A19C] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div>
                <h3 className="text-base font-bold leading-tight">Helpio</h3>
                <span className="text-[9px] text-[#A6A19C] uppercase tracking-widest mt-1 block">Full-Stack MERN</span>
              </div>
            </div>

            {/* Project 4: Wide Rectangle (Spans 2 cols on mobile) */}
            <div className="col-span-2 row-span-1 md:col-span-2 group relative bg-[#1C1A19] border border-[#2A2726] rounded-3xl overflow-hidden p-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4 hover:border-white/20 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server size={120} strokeWidth={0.5} />
              </div>
              <div className="relative z-10 flex flex-col gap-2 max-w-[200px] sm:max-w-none">
                <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center mb-2">
                  <Server size={14} />
                </div>
                <h3 className="text-xl font-bold leading-tight">Sillage E-Commerce</h3>
                <span className="text-[9px] text-[#A6A19C] uppercase tracking-widest">High-Performance Arch</span>
              </div>
              <ArrowUpRight size={24} className="text-[#A6A19C] group-hover:text-white transition-colors relative z-10 self-end" />
            </div>

          </div>
        </section>

        {/* 5. THE TECH MATRIX (Graphical Dense Ecosystem) */}
        <section id="stack" className="py-24 relative z-10">
          <div className="flex items-center gap-4 mb-12 flex-row-reverse">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">Ecosystem.</h2>
            <div className="h-[1px] flex-1 bg-[#2A2726]"></div>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {[
              { label: "Python", icon: Terminal, color: "text-blue-400" },
              { label: "React.js", icon: Layers, color: "text-cyan-400" },
              { label: "Next.js", icon: Code2, color: "text-white" },
              { label: "Node.js", icon: Server, color: "text-green-500" },
              { label: "Postgres", icon: Database, color: "text-blue-300" },
              { label: "Sys Design", icon: Cpu, color: "text-purple-400" },
            ].map((tech, idx) => (
              <div key={idx} className="group relative aspect-square bg-[#121110] border border-[#2A2726] rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-[#1C1A19] hover:border-white/20 transition-all">
                {/* SVG Radial Glow behind icon */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <tech.icon size={24} className={`${tech.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} strokeWidth={1.5} />
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#A6A19C] group-hover:text-white">{tech.label}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
