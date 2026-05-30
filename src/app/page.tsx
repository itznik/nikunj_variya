"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ==========================================
// BESPOKE SVG ICON SYSTEM (Zero Dependencies)
// ==========================================
const Icons = {
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  External: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
      <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  Node: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="12" r="2"/>
      <path d="M10 12h6M16 12l-2-2M16 12l-2 2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// ==========================================
// DYNAMIC NAVIGATION
// ==========================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-[#1A1A1A] py-4" : "bg-transparent border-transparent py-8"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FF4433]" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="2"/></svg>
          <span className="font-bold text-white tracking-widest text-sm uppercase">NV.ARCH</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-[#888888]">
          <a href="#logic" className="hover:text-white transition-colors">Algorithms</a>
          <a href="#systems" className="hover:text-white transition-colors">Architecture</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#contact" className="text-white hover:text-[#FF4433] transition-colors ml-4">Initialize</a>
        </div>
      </div>
    </motion.nav>
  );
}

// ==========================================
// KINETIC HERO & GRAPH VISUALIZATION
// ==========================================
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {/* Abstract Algorithmic Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full max-w-[1200px]" fill="none" stroke="#222222" strokeWidth="1">
          {/* Animated Graph Traversal Paths */}
          <motion.path d="M100 500 Q 300 200 500 500 T 900 500" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            stroke="#FF4433" strokeWidth="1.5" strokeDasharray="5 5"
          />
          <motion.path d="M100 500 C 300 800 400 200 900 500" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
            stroke="#EDEDED" strokeWidth="0.5"
          />
          {/* Nodes */}
          {[100, 300, 500, 700, 900].map((cx, i) => (
             <circle key={i} cx={cx} cy={cx % 3 === 0 ? 300 : cx % 4 === 0 ? 700 : 500} r="4" fill="#050505" stroke="#444444" strokeWidth="2"/>
          ))}
        </svg>
      </div>

      <motion.div style={{ y: y1, opacity }} className="relative z-10 w-full max-w-[1400px] px-6 sm:px-12">
        <div className="flex flex-col items-start gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 px-3 py-1.5 border border-[#222] rounded-full bg-[#0A0A0A]"
          >
             <span className="w-2 h-2 rounded-full bg-[#FF4433] animate-pulse"></span>
             <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">System Architecture & Algorithms</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[12vw] sm:text-[8rem] md:text-[10rem] font-bold leading-[0.85] tracking-tighter text-white"
          >
            LOGIC.<br/><span className="text-[#333333]">SYSTEMS.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 mt-8 w-full max-w-3xl items-start sm:items-center justify-between border-t border-[#222] pt-8"
          >
            <p className="text-[#888888] text-sm sm:text-base leading-relaxed max-w-md font-light">
              Engineering deterministic software solutions. I design fault-tolerant backend architectures, efficient data pipelines, and highly optimized frontend interfaces.
            </p>
            <button className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white hover:text-[#FF4433] transition-colors group">
              Explore Architecture 
              <span className="p-2 border border-[#222] rounded-full group-hover:border-[#FF4433] transition-colors">
                <Icons.ArrowRight />
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// DSA / SYSTEM ARCHITECTURE SHOWCASE (Split Scroll)
// ==========================================
function ArchitectureShowcase() {
  return (
    <section id="systems" className="w-full bg-[#050505] border-t border-[#111111] py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col mb-24">
           <h2 className="font-mono text-[10px] text-[#FF4433] uppercase tracking-widest mb-4">Case Studies</h2>
           <h3 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">Engineering <br/>Outcomes.</h3>
        </div>

        {/* Immersive Sticky Layout */}
        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          
          {/* Left: Scrollable Narrative Narrative */}
          <div className="w-full lg:w-1/2 flex flex-col gap-32">
            
            {/* Project 1 Narrative */}
            <div className="flex flex-col gap-6">
               <div className="pb-6 border-b border-[#222]">
                  <h4 className="text-3xl font-bold text-white mb-2">Helpio Distributed DB</h4>
                  <p className="font-mono text-xs text-[#888] uppercase tracking-widest">Relational Architecture • Concurrent Processing</p>
               </div>
               <p className="text-[#EDEDED] leading-relaxed font-light">
                 Designed a fault-tolerant database schema for a gamified fulfillment platform. Handled high-throughput concurrent requests (wishlist claims) ensuring strict ACID compliance and zero race conditions during peak donor loads.
               </p>
               <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-1 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <span className="font-mono text-[10px] text-[#888] uppercase">Complexity</span>
                    <span className="font-mono text-sm text-white">O(log N) Query</span>
                  </div>
                  <div className="flex flex-col gap-1 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <span className="font-mono text-[10px] text-[#888] uppercase">Throughput</span>
                    <span className="font-mono text-sm text-white">4.2k TPS</span>
                  </div>
               </div>
               <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-2 font-mono text-[10px] uppercase text-white hover:text-[#FF4433] transition-colors"><Icons.External /> Live System</button>
                  <button className="flex items-center gap-2 font-mono text-[10px] uppercase text-white hover:text-[#FF4433] transition-colors"><Icons.Github /> Repository</button>
               </div>
            </div>

            {/* Project 2 Narrative */}
            <div className="flex flex-col gap-6">
               <div className="pb-6 border-b border-[#222]">
                  <h4 className="text-3xl font-bold text-white mb-2">RadView WebGL Engine</h4>
                  <p className="font-mono text-xs text-[#888] uppercase tracking-widest">Graphics Pipeline • Memory Management</p>
               </div>
               <p className="text-[#EDEDED] leading-relaxed font-light">
                 Engineered a zero-latency DICOM medical imaging viewer directly in the browser. Bypassed heavy DOM manipulations by utilizing a custom WebGL shading pipeline to render complex volumetric data streams asynchronously.
               </p>
               <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col gap-1 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <span className="font-mono text-[10px] text-[#888] uppercase">Frame Rate</span>
                    <span className="font-mono text-sm text-white">Strict 60fps</span>
                  </div>
                  <div className="flex flex-col gap-1 p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
                    <span className="font-mono text-[10px] text-[#888] uppercase">Memory</span>
                    <span className="font-mono text-sm text-white">Garbage Collected</span>
                  </div>
               </div>
               <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-2 font-mono text-[10px] uppercase text-white hover:text-[#FF4433] transition-colors"><Icons.External /> Interface</button>
                  <button className="flex items-center gap-2 font-mono text-[10px] uppercase text-white hover:text-[#FF4433] transition-colors"><Icons.Github /> Repository</button>
               </div>
            </div>

          </div>

          {/* Right: Sticky Visualizations (Custom SVG Logic Diagrams) */}
          <div className="hidden lg:block w-1/2 h-[600px] sticky top-32">
             <div className="w-full h-full bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden relative flex items-center justify-center p-8">
               
               {/* Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               
               {/* Interactive Tree/Graph Visualization representing Architecture */}
               <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                 <defs>
                   <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#222"/>
                     <stop offset="100%" stopColor="#FF4433"/>
                   </linearGradient>
                 </defs>
                 
                 {/* Hierarchy Lines */}
                 <motion.path d="M200 50 L100 150 M200 50 L300 150 M100 150 L50 250 M100 150 L150 250 M300 150 L250 250 M300 150 L350 250" 
                    fill="none" stroke="url(#lineGrad)" strokeWidth="2"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{ once: true }}
                 />
                 
                 {/* Nodes */}
                 {[
                   {x: 200, y: 50, label: "API"},
                   {x: 100, y: 150, label: "Auth"}, {x: 300, y: 150, label: "Queue"},
                   {x: 50, y: 250, label: "DB"}, {x: 150, y: 250, label: "Cache"}, {x: 250, y: 250, label: "Worker"}, {x: 350, y: 250, label: "Worker"}
                 ].map((node, i) => (
                    <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 + 0.5 }} viewport={{ once: true }}>
                      <circle cx={node.x} cy={node.y} r="20" fill="#050505" stroke="#444" strokeWidth="2" />
                      <text x={node.x} y={node.y + 40} fill="#888" fontSize="10" fontFamily="monospace" textAnchor="middle" letterSpacing="1">{node.label}</text>
                    </motion.g>
                 ))}
                 
                 {/* Active Processing Simulation */}
                 <motion.circle cx="200" cy="50" r="4" fill="#FF4433" 
                    animate={{ cx: [200, 300, 250], cy: [50, 150, 250], opacity: [1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 />
               </svg>
               
               {/* Terminal Overlay - FIXED JSX PARSING ERROR */}
               <div className="absolute bottom-4 left-4 right-4 bg-[#050505] border border-[#222] p-4 rounded flex flex-col gap-2 font-mono text-[9px] text-[#888]">
                  <div className="flex justify-between items-center border-b border-[#222] pb-2">
                     <span className="text-white">System Trace</span>
                     <span className="text-[#FF4433] animate-pulse">Running</span>
                  </div>
                  <span>&gt; initializing connection pool... OK</span>
                  <span>&gt; routing traffic via shard_02... OK</span>
                  <span>&gt; executing transaction block... <span className="text-[#EDEDED]">0.014ms</span></span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// CAPABILITY MAPPING (Technical Matrix)
// ==========================================
function CapabilitiesMatrix() {
  const categories = [
    { title: "Languages & Logic", items: ["Python", "TypeScript", "C++", "Java"] },
    { title: "Architecture & Data", items: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker"] },
    { title: "Interface & Graphics", items: ["React", "Next.js", "WebGL", "Three.js", "Tailwind CSS"] }
  ];

  return (
    <section id="capabilities" className="w-full bg-[#0A0A0A] border-t border-[#111111] py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div>
             <h2 className="font-mono text-[10px] text-[#FF4433] uppercase tracking-widest mb-4">Capability Map</h2>
             <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">The Engineering Stack.</h3>
           </div>
           <p className="text-[#888] font-mono text-xs max-w-sm uppercase leading-relaxed">
             A highly structured ecosystem of tools used to translate abstract logic into production-grade deployments.
           </p>
        </div>

        {/* Editorial Table Layout */}
        <div className="flex flex-col border-t border-[#222]">
          {categories.map((category, idx) => (
             <div key={idx} className="flex flex-col md:flex-row border-b border-[#222] py-8 group hover:bg-[#0C0C0C] transition-colors">
               <div className="w-full md:w-1/3 mb-4 md:mb-0 flex items-center gap-4">
                  <span className="font-mono text-[#444] text-xs">0{idx + 1}</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#FF4433] transition-colors">{category.title}</h4>
               </div>
               <div className="w-full md:w-2/3 flex flex-wrap gap-x-8 gap-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <Icons.Node />
                       <span className="font-mono text-sm text-[#EDEDED]">{item}</span>
                    </div>
                  ))}
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PREMIUM FOOTER & CONTACT
// ==========================================
function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#050505] border-t border-[#111111] pt-32 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
        
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter text-white mb-6">Initialize a connection.</h2>
        <p className="text-[#888] max-w-lg mb-12 font-light">
          Whether constructing scalable backend infrastructure or refining algorithmic efficiency, I am open to discussing complex engineering challenges.
        </p>
        
        <button className="px-8 py-4 bg-white text-[#050505] font-bold uppercase tracking-widest text-xs hover:bg-[#FF4433] hover:text-white transition-colors duration-300">
          Transmit Message
        </button>

        <div className="w-full border-t border-[#222] mt-32 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <span className="font-black text-2xl tracking-tighter text-white">NIKUNJ<span className="text-[#FF4433]">.</span></span>
           <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-[#666]">
              <a href="#" className="hover:text-white transition-colors">Github</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">X.com</a>
           </div>
           <span className="font-mono text-[10px] text-[#444] uppercase tracking-widest">© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// MASTER PAGE EXPORT
// ==========================================
export default function Portfolio() {
  return (
    <div className="w-full bg-[#050505] selection:bg-[#FF4433] selection:text-white">
      <Navigation />
      <HeroSection />
      <ArchitectureShowcase />
      <CapabilitiesMatrix />
      <Footer />
    </div>
  );
}
