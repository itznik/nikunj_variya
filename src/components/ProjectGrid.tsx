"use client";

import { ArrowUpRight, Code2, Database, Network, Server } from "lucide-react";

const projects = [
  {
    title: "Distributed Message Queue",
    category: "Architecture",
    description: "Designed a fault-tolerant, horizontally scalable message broker architecture utilizing advanced system design principles to guarantee event delivery.",
    stack: ["Python", "Redis", "Docker"],
    icon: Network,
  },
  {
    title: "Graph Traversal Engine",
    category: "Algorithms",
    description: "Built a highly optimized visualization engine for complex DSA operations, featuring custom pathfinding implementations.",
    stack: ["TypeScript", "WebGL", "DSA"],
    icon: Code2,
  },
  {
    title: "Helpio",
    category: "Full-Stack MERN",
    description: "A gamified wishlist and donor fulfillment platform featuring real-time verification systems and user leaderboards.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    icon: Database,
  },
  {
    title: "Sillage",
    category: "High-Performance",
    description: "E-commerce architecture for luxury fragrances, focusing on visually driven sales logic and minimal load times.",
    stack: ["React", "Node.js", "Express"],
    icon: Server,
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
      {projects.map((project, idx) => {
        const Icon = project.icon;
        return (
          <a key={idx} href="#" className="group flex flex-col bg-surface border border-edge rounded-2xl overflow-hidden transition-all hover:border-text-sub/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            
            {/* Rich Visual Placeholder */}
            <div className="relative h-48 sm:h-56 bg-canvas border-b border-edge flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-surface)_0%,_transparent_100%)] opacity-50"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20"></div>
              
              <div className="relative z-10 w-14 h-14 rounded-xl border border-edge bg-surface flex items-center justify-center text-text-sub group-hover:text-accent group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Icon size={24} strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 p-6 sm:p-8">
              <div>
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-main tracking-tight group-hover:text-text-main transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-text-sub leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-canvas border border-edge rounded text-text-sub font-mono text-[9px] uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 rounded-full border border-edge flex items-center justify-center bg-canvas group-hover:bg-text-main group-hover:text-canvas transition-colors shrink-0">
                  <ArrowUpRight size={14} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
