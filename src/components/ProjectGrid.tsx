"use client";

import { ArrowUpRight, Code2, Database, Network, Server } from "lucide-react";

const projects = [
  {
    title: "Distributed Message Queue",
    category: "System Design & Architecture",
    description: "Designed a fault-tolerant, horizontally scalable message broker architecture utilizing advanced system design principles to guarantee event delivery under high throughput.",
    stack: ["Python", "Redis", "PostgreSQL", "Docker"],
    link: "#",
    featured: true,
    icon: Network,
  },
  {
    title: "Graph Traversal Engine",
    category: "Data Structures & Algorithms",
    description: "Built a highly optimized visualization engine for complex DSA operations, featuring A* pathfinding and custom Dijkstra implementations.",
    stack: ["TypeScript", "Next.js", "WebGL"],
    link: "#",
    featured: false,
    icon: Code2,
  },
  {
    title: "Helpio",
    category: "Full-Stack Application",
    description: "A gamified, full-stack wishlist and donor fulfillment platform featuring real-time verification systems and user leaderboards.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    link: "#",
    featured: false,
    icon: Database,
  },
  {
    title: "Sillage",
    category: "High-Performance E-Commerce",
    description: "E-commerce architecture for luxury fragrances, focusing on visually driven sales logic and minimal DOM layout shifts.",
    stack: ["React", "Node.js", "Express"],
    link: "#",
    featured: true,
    icon: Server,
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {projects.map((project, idx) => {
        const Icon = project.icon;
        
        return (
          <a
            key={idx}
            href={project.link}
            className={`group flex flex-col bg-surface border border-edge rounded-2xl overflow-hidden transition-colors hover:border-text-sub/40 ${
              project.featured ? "md:col-span-2 md:flex-row" : ""
            }`}
          >
            {/* Image Placeholder Section */}
            <div className={`relative bg-canvas border-b border-edge flex items-center justify-center overflow-hidden ${
              project.featured ? "h-64 md:h-auto md:w-2/5 md:border-b-0 md:border-r" : "h-56"
            }`}>
              {/* Premium Blueprint Background Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-canvas to-transparent opacity-50"></div>
              
              {/* Placeholder Icon (Replace this entire div with an <img /> or <Image /> later) */}
              <div className="relative z-10 w-16 h-16 rounded-xl border border-edge bg-surface flex items-center justify-center text-text-sub group-hover:scale-110 group-hover:text-accent transition-all duration-500">
                <Icon size={28} strokeWidth={1.5} />
              </div>
            </div>

            {/* Content Section */}
            <div className={`flex flex-col justify-between p-8 ${project.featured ? "md:w-3/5" : "w-full"}`}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-text-main tracking-tight group-hover:text-text-main transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-sub leading-relaxed font-light mt-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-canvas border border-edge rounded-md font-mono text-[10px] text-text-main uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Premium SVG Arrow Interaction */}
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-edge flex items-center justify-center bg-canvas group-hover:bg-text-main group-hover:text-canvas transition-colors">
                  <ArrowUpRight size={18} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
