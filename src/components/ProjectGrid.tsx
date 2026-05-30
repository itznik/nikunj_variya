"use client";

import { ArrowUpRight, Code2, Database, Network, Server } from "lucide-react";

const projects = [
  {
    title: "Distributed Message Queue",
    category: "Architecture",
    description: "Designed a fault-tolerant, horizontally scalable message broker architecture utilizing advanced system design principles to guarantee event delivery under high throughput.",
    stack: ["Python", "Redis", "Docker", "AWS"],
    icon: Network,
    glow: "rgba(255,51,31,0.15)", // Crimson glow
  },
  {
    title: "Graph Traversal Engine",
    category: "Algorithms",
    description: "Built a highly optimized visualization engine for complex DSA operations, featuring custom A* pathfinding and Dijkstra implementations.",
    stack: ["TypeScript", "WebGL", "DSA"],
    icon: Code2,
    glow: "rgba(16,185,129,0.15)", // Emerald glow
  },
  {
    title: "Helpio Platform",
    category: "Full-Stack MERN",
    description: "A gamified wishlist and donor fulfillment platform featuring real-time verification systems and user leaderboards.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    icon: Database,
    glow: "rgba(59,130,246,0.15)", // Blue glow
  },
  {
    title: "Sillage E-Commerce",
    category: "High-Performance",
    description: "E-commerce architecture for luxury fragrances, focusing on visually driven sales logic and minimal layout shifts.",
    stack: ["React", "Node.js", "Express"],
    icon: Server,
    glow: "rgba(245,158,11,0.15)", // Amber glow
  },
];

export default function ProjectGrid() {
  return (
    // We add a container to handle the sticky tracking height
    <div className="w-full relative flex flex-col gap-6 md:gap-8 pb-12">
      {projects.map((project, idx) => {
        const Icon = project.icon;
        return (
          <div
            key={idx}
            // THE MOBILE FIX: Sticky positioning so they stack like a deck of cards as you scroll
            className="sticky top-24 md:static group flex flex-col bg-[#161514] border border-edge rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            style={{ 
              // We slightly offset the top so they stack visibly on mobile
              top: `calc(6rem + ${idx * 1.5}rem)`,
              zIndex: idx 
            }}
          >
            
            {/* RICH VISUAL HEADER: Gradients, Patterns, and Frosted Overlays */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden border-b border-edge bg-canvas">
              {/* Dynamic Radial Lighting based on the project */}
              <div 
                className="absolute inset-0 opacity-100 transition-opacity duration-700 group-hover:opacity-80"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.glow} 0%, transparent 70%)` }}
              ></div>
              
              {/* Complex Graphical Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:8px_8px] opacity-10"></div>
              
              {/* Premium Floating Icon Header (Frosted Glass Effect) */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="flex items-center gap-3 backdrop-blur-md bg-surface/60 border border-edge/80 px-4 py-2 rounded-full shadow-lg">
                  <Icon size={16} strokeWidth={2} className="text-accent" />
                  <span className="font-mono text-[10px] sm:text-xs text-text-main font-bold tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
                
                {/* Interaction Node */}
                <div className="w-10 h-10 rounded-full backdrop-blur-md bg-surface/60 border border-edge/80 flex items-center justify-center text-text-sub group-hover:bg-text-main group-hover:text-canvas transition-colors shadow-lg">
                  <ArrowUpRight size={18} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
                </div>
              </div>

              {/* Central Graphic Element - Simulating a Data/Tech visualization */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-edge/50 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-dashed border-edge/80 animate-[spin_60s_linear_infinite]"></div>
                <Icon size={48} strokeWidth={1} className="absolute text-edge group-hover:text-text-sub transition-colors duration-500" />
              </div>
            </div>

            {/* HIGH DENSITY CONTENT SECTION */}
            <div className="flex flex-col p-6 sm:p-10 relative z-10 bg-[#161514]">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-text-main tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-text-sub leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
              
              {/* Complex Stack Layout overlapping the bottom */}
              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-edge/30">
                {project.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F0E0D] border border-edge/80 rounded-md text-text-main font-mono text-[10px] uppercase tracking-wider shadow-inner"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-50"></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
