"use client";

import { Database, Server, Layout, Box, Flame, Code2, Layers, Cpu } from "lucide-react";

const tools = [
  { name: "Python", category: "Data / Scripting", icon: Code2, color: "#3B82F6" }, // Blue
  { name: "MERN Stack", category: "Full-Stack UI", icon: Layers, color: "#10B981" }, // Emerald
  { name: "PostgreSQL", category: "Relational DB", icon: Database, color: "#3B82F6" },
  { name: "Firebase", category: "Realtime", icon: Flame, color: "#F59E0B" }, // Amber
  { name: "Supabase", category: "Backend Auth", icon: Server, color: "#10B981" },
  { name: "Next.js", category: "React Framework", icon: Layout, color: "#F4F0E6" }, // Alabaster
  { name: "TypeScript", category: "Architecture", icon: Box, color: "#3B82F6" },
  { name: "System Design", category: "Core Logic", icon: Cpu, color: "#8B5CF6" }, // Purple
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
      {tools.map((tool, idx) => {
        const Icon = tool.icon;
        return (
          <div 
            key={idx} 
            className="group relative h-36 bg-[#161514] border border-edge rounded-2xl overflow-hidden hover:border-text-sub/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Dynamic internal lighting based on tool color */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-full scale-150 pointer-events-none"
              style={{ backgroundColor: tool.color }}
            ></div>
            
            {/* Geometric Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:12px_12px] opacity-10"></div>

            <div className="relative z-10 flex flex-col justify-between h-full p-5">
              <div className="flex justify-between items-start">
                <div 
                  className="w-10 h-10 rounded-xl bg-canvas border border-edge/80 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon size={20} strokeWidth={1.5} style={{ color: tool.color }} className="opacity-80 group-hover:opacity-100" />
                </div>
                <span className="font-mono text-[9px] text-text-sub tracking-widest uppercase">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-text-main font-bold text-sm sm:text-base tracking-tight group-hover:text-white transition-colors">{tool.name}</h4>
                <p className="text-text-sub font-mono text-[9px] sm:text-[10px] uppercase tracking-widest mt-1">{tool.category}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
