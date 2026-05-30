"use client";

import { Database, Server, Layout, Box, Flame, Code2, Layers, Cpu } from "lucide-react";

const tools = [
  { name: "Python", category: "Backend & Scripting", icon: Code2, color: "text-blue-400" },
  { name: "MERN Stack", category: "Full-Stack", icon: Layers, color: "text-green-400" },
  { name: "PostgreSQL", category: "Relational DB", icon: Database, color: "text-blue-300" },
  { name: "Firebase", category: "BaaS / Realtime", icon: Flame, color: "text-orange-400" },
  { name: "Supabase", category: "BaaS / SQL", icon: Server, color: "text-emerald-400" },
  { name: "Next.js", category: "React Framework", icon: Layout, color: "text-white" },
  { name: "TypeScript", category: "Type Safety", icon: Box, color: "text-blue-500" },
  { name: "System Design", category: "Architecture", icon: Cpu, color: "text-purple-400" },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {tools.map((tool, idx) => {
        const Icon = tool.icon;
        return (
          <div 
            key={idx} 
            className="group relative p-4 bg-surface border border-edge rounded-xl overflow-hidden hover:border-text-sub/40 transition-colors flex flex-col justify-between min-h-[120px]"
          >
            {/* Ambient hover glow inside the card */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-text-sub opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity pointer-events-none"></div>
            
            <Icon size={24} strokeWidth={1.5} className={`${tool.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
            
            <div className="mt-4">
              <h4 className="text-text-main font-semibold text-sm tracking-tight">{tool.name}</h4>
              <p className="text-text-sub font-mono text-[9px] uppercase tracking-wider mt-1">{tool.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
