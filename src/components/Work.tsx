"use client";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section className="w-full bg-background pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-sm font-mono tracking-widest text-muted uppercase mb-24 border-b border-surfaceBorder pb-6">
          01 // Deployed Architectures
        </h2>

        <div className="flex flex-col gap-40">
          
          {/* Project 1: DSA Tracker - Data/Analytics Visualization layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">DSA Tracker</h3>
              <p className="text-muted leading-relaxed">
                A high-performance algorithmic tracking engine. Built to visualize complex data structures and manage progressive learning metrics with zero latency.
              </p>
              <div className="flex gap-4 pt-4 font-mono text-xs text-muted">
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">Next.js</span>
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">PostgreSQL</span>
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">Tailwind</span>
              </div>
            </div>
            
            {/* Custom Visual: Array/Graph execution visualization */}
            <div className="lg:col-span-7 bg-surface/50 border border-surfaceBorder rounded-2xl h-[400px] p-8 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="flex flex-col gap-4 h-full justify-center">
                 {[75, 45, 90, 60, 100].map((width, i) => (
                   <motion.div 
                     key={i}
                     initial={{ width: 0 }}
                     whileInView={{ width: `${width}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                     className="h-8 bg-white/5 border border-white/10 rounded-md relative flex items-center px-4"
                   >
                     <span className="text-[10px] font-mono text-muted/50">O({i === 0 ? '1' : i === 4 ? 'n²' : 'log n'})</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>

          {/* Project 2: Portfolio CMS - Layered Interface Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 bg-surface/50 border border-surfaceBorder rounded-2xl h-[400px] relative overflow-hidden hidden lg:block">
              {/* Layered Glass Panels representing CMS architecture */}
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="absolute top-12 left-12 right-24 bottom-12 bg-background border border-surfaceBorder rounded-xl shadow-2xl p-6 z-10"
              >
                 <div className="w-1/3 h-4 bg-white/10 rounded mb-8" />
                 <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-white/5 rounded border border-white/5" />
                    <div className="h-24 bg-white/5 rounded border border-white/5" />
                    <div className="h-24 bg-white/5 rounded border border-white/5" />
                 </div>
              </motion.div>
              <div className="absolute top-20 right-8 bottom-20 w-32 bg-white/5 border border-surfaceBorder rounded-xl blur-[2px] z-0" />
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-6">
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Portfolio CMS</h3>
              <p className="text-muted leading-relaxed">
                A headless content management system tailored for visual assets. Employs aggressive edge caching and an intuitive schema for seamless product storytelling.
              </p>
              <div className="flex gap-4 pt-4 font-mono text-xs text-muted">
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">TypeScript</span>
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">MongoDB</span>
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">AWS S3</span>
              </div>
            </div>
          </div>

          {/* Project 3: System Design Explorer - Node Network Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">System Explorer</h3>
              <p className="text-muted leading-relaxed">
                An interactive canvas for mapping large-scale system architectures. Built with complex state management to handle thousands of concurrent nodes and edges.
              </p>
              <div className="flex gap-4 pt-4 font-mono text-xs text-muted">
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">React Flow</span>
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">Node.js</span>
                <span className="px-3 py-1 rounded-full border border-surfaceBorder bg-surface">Supabase</span>
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-surface/50 border border-surfaceBorder rounded-2xl h-[400px] flex items-center justify-center relative">
              {/* Custom SVG Node Map mapping System Design */}
              <svg width="100%" height="100%" className="absolute inset-0">
                <motion.circle cx="30%" cy="50%" r="6" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} />
                <motion.circle cx="70%" cy="30%" r="6" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} delay={0.2} />
                <motion.circle cx="70%" cy="70%" r="6" fill="white" initial={{ scale: 0 }} whileInView={{ scale: 1 }} delay={0.4} />
                
                <motion.path 
                  d="M 30% 50% L 70% 30%" 
                  stroke="rgba(255,255,255,0.2)" strokeWidth="2" 
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                />
                <motion.path 
                  d="M 30% 50% L 70% 70%" 
                  stroke="rgba(255,255,255,0.2)" strokeWidth="2"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                />
              </svg>
              <div className="absolute left-[20%] bg-background px-4 py-2 border border-surfaceBorder rounded text-xs font-mono text-white">Load Balancer</div>
              <div className="absolute right-[15%] top-[20%] bg-background px-4 py-2 border border-surfaceBorder rounded text-xs font-mono text-white">Microservice A</div>
              <div className="absolute right-[15%] bottom-[20%] bg-background px-4 py-2 border border-surfaceBorder rounded text-xs font-mono text-white">Microservice B</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
