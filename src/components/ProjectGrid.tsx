"use client";

import { ArrowUpRight, Code2, Database, Network, Server } from "lucide-react";

const projects = [
  {
    title: "Distributed Message Queue",
    category: "Architecture",
    description: "Designed a fault-tolerant, horizontally scalable message broker architecture utilizing advanced system design principles to guarantee event delivery under high throughput.",
    stack: ["Python", "Redis", "Docker"],
    link: "#",
    featured: true, // Takes full width on mobile
    icon: Network,
  },
  {
    title: "Graph Traversal",
    category: "Algorithms",
    description: "Built a highly optimized visualization engine for complex DSA operations.",
    stack: ["TypeScript", "WebGL"],
    link: "#",
    featured: false, // Takes 50% width on mobile (Bento widget)
    icon: Code2,
  },
  {
    title: "Helpio",
    category: "Full-Stack",
    description: "A gamified wishlist and donor fulfillment platform featuring real-time verification systems.",
    stack: ["Next.js", "Postgres"],
    link: "#",
    featured: false, // Takes 50% width on mobile (Bento widget)
    icon: Database,
  },
  {
    title: "Sillage",
    category: "E-Commerce",
    description: "High-performance architecture for luxury fragrances, focusing on visually driven sales logic.",
    stack: ["React", "Node.js", "Express"],
    link: "#",
    featured: true, // Takes full width on mobile
    icon: Server,
  },
];

export default function ProjectGrid() {
  return (
    // Forced 2-column grid even on mobile for true Bento design
    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 w-full">
      {projects.map((project, idx) => {
        const Icon = project.icon;
        
        return (
          <a
            key={idx}
            href={project.link}
            className={`group flex flex-col bg-surface border border-edge rounded-2xl overflow-hidden transition-colors hover:border-text-sub/40 
              ${project.featured ? "col-span-2 md:flex-row" : "col-span-1"}
            `}
          >
            {/* Image/Blueprint Placeholder Section */}
            <div className={`relative bg-canvas border-b border-edge flex items-center justify-center overflow-hidden shrink-0
              ${project.featured ? "h-48 sm:h-64 md:h-auto md:w-2/5 md:border-b-0 md:border-r" : "h-32 sm:h-48"}
            `}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-canvas to-transparent opacity-50"></div>
              
              <div className={`relative z-10 rounded-xl border border-edge bg-surface flex items-center justify-center text-text-sub group-hover:scale-110 group-hover:text-accent transition-all duration-500
                ${project.featured ? "w-16 h-16" : "w-10 h-10 sm:w-12 sm:h-12"}
              `}>
                <Icon size={project.featured ? 28 : 20} strokeWidth={1.5} />
              </div>
            </div>

            {/* Content Section */}
            <div className={`flex flex-col justify-between p-4 sm:p-8 ${project.featured ? "md:w-3/5" : "w-full"}`}>
              <div className="flex flex-col gap-1 sm:gap-3">
                {/* Only show category on featured or larger screens */}
                <span className={`font-mono text-[9px] sm:text-[10px] text-accent tracking-widest uppercase ${!project.featured && "hidden sm:block"}`}>
                  {project.category}
                </span>
                
                <h3 className={`font-bold text-text-main tracking-tight group-hover:text-text-main transition-colors leading-tight
                  ${project.featured ? "text-xl sm:text-2xl mt-1" : "text-base sm:text-xl line-clamp-2"}
                `}>
                  {project.title}
                </h3>
                
                {/* Hide description on 50% mobile widgets to prevent overflow */}
                <p className={`text-xs sm:text-sm text-text-sub leading-relaxed font-light mt-1 sm:mt-2
                  ${!project.featured ? "hidden sm:block" : ""}
                `}>
                  {project.description}
                </p>
                
                {/* Hide tech stack on small widgets to keep it minimal */}
                <div className={`flex flex-wrap items-center gap-2 mt-4 sm:mt-6 ${!project.featured ? "hidden md:flex" : ""}`}>
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-canvas border border-edge rounded-md font-mono text-[9px] sm:text-[10px] text-text-main uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* SVG Arrow Interaction - Scaled down for widgets */}
              <div className={`flex justify-end ${project.featured ? "mt-6 sm:mt-8" : "mt-4"}`}>
                <div className={`rounded-full border border-edge flex items-center justify-center bg-canvas group-hover:bg-text-main group-hover:text-canvas transition-colors
                  ${project.featured ? "w-10 h-10" : "w-8 h-8"}
                `}>
                  <ArrowUpRight size={project.featured ? 18 : 16} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
