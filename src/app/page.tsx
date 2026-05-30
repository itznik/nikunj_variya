"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, ShoppingCart, MapPin, ActivitySquare, Server, Cpu, Database, Network } from "lucide-react";
import { 
  SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb, SiFirebase, SiSupabase, 
  SiDocker, SiRedis, SiWebgl, SiThreedotjs, SiMysql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Scroll animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white text-[#0A2540] selection:bg-[#635BFF] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- STRIPE HERO: SKEWED BACKGROUND & MESH GRADIENTS --- */}
      <div className="absolute top-0 left-0 w-full h-[95vh] overflow-hidden -z-10 origin-top-left skew-y-[-6deg] bg-gradient-to-b from-[#F6F9FC] to-white border-b border-gray-100/50">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#80E9FF] to-[#7A73FF] blur-[100px] opacity-[0.35] mix-blend-multiply"></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-[#FF80FF] to-[#FF80A2] blur-[100px] opacity-[0.25] mix-blend-multiply"></div>
      </div>

      {/* NAVBAR */}
      <header className="w-full absolute top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <span className="font-black text-xl tracking-tighter text-[#0A2540]">NV<span className="text-[#635BFF]">.</span></span>
          <nav className="hidden md:flex gap-8 font-semibold text-sm text-[#425466]">
            <a href="#deployments" className="hover:text-[#0A2540] transition-colors">Deployments</a>
            <a href="#infrastructure" className="hover:text-[#0A2540] transition-colors">Infrastructure</a>
          </nav>
          <button className="bg-[#635BFF]/10 text-[#635BFF] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#635BFF] hover:text-white transition-all">
            Initialize Contact
          </button>
        </div>
      </header>

      {/* HERO CONTENT */}
      <main className="w-full pt-32 sm:pt-48 pb-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.h1 variants={fadeUp} className="text-[12vw] sm:text-[5rem] lg:text-[6rem] font-black leading-[0.95] tracking-tighter text-[#0A2540]">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#00D4FF]">infrastructure</span> <br />
            to scale ideas.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 text-lg sm:text-xl text-[#425466] font-medium max-w-xl leading-relaxed">
            Engineering fault-tolerant distributed systems, high-performance web applications, and uncompromising UI/UX.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#635BFF] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#0A2540] transition-all hover:scale-105 shadow-[0_10px_20px_rgba(99,91,255,0.3)] w-full sm:w-auto">
              View Deployments <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* --- PROJECTS: STRIPE-STYLE CSS UI GRAPHICS --- */}
      <section id="deployments" className="w-full py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-[#635BFF] font-bold tracking-widest uppercase text-sm mb-4">Selected Works</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-[#0A2540] tracking-tight mb-20">High-performance applications.</h3>
          </motion.div>

          <div className="flex flex-col gap-24 sm:gap-32">
            
            {/* 1. HELPIO (Wishlist/Donor Platform) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
                <motion.h4 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-[#0A2540]">Helpio Platform</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  A gamified wishlist and donor fulfillment platform. Engineered with a complex relational database architecture to handle real-time verification systems and user leaderboards with zero lag.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-[#F6F9FC] text-[#425466] font-bold text-xs rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-[#F6F9FC] text-[#425466] font-bold text-xs rounded-full">PostgreSQL</span>
                </motion.div>
              </div>
              
              {/* Graphic: Dashboard Mock UI */}
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/10 to-[#00D4FF]/10 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                <div className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),0_30px_60px_-30px_rgba(0,0,0,0.1)] border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                     <ShieldCheck className="text-[#635BFF]" size={24} />
                     <span className="font-bold text-[#0A2540]">Real-Time Verification</span>
                   </div>
                   <div className="flex flex-col gap-3">
                      <div className="w-full bg-[#F6F9FC] p-4 rounded-xl flex justify-between items-center border border-gray-100">
                         <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-[#0A2540]">Wishlist #8920</span>
                            <span className="text-xs text-[#425466]">Oxygen Concentrator</span>
                         </div>
                         <span className="bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-xs font-bold">Fulfilled</span>
                      </div>
                      <div className="w-full bg-white p-4 rounded-xl flex justify-between items-center border border-gray-100 shadow-sm">
                         <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-[#0A2540]">Wishlist #8921</span>
                            <span className="text-xs text-[#425466]">Medical Supplies</span>
                         </div>
                         <span className="bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-full text-xs font-bold">Pending DB Auth</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 2. RADVIEW CLOUD (Medical Radiology) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <motion.h4 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-[#0A2540]">RadView Cloud</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  A high-performance, cloud-based DICOM viewer engineered for medical practitioners. Utilizes hardware-accelerated WebGL to render complex anatomical scans with zero latency directly in the browser.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-[#F6F9FC] text-[#425466] font-bold text-xs rounded-full">WebGL</span>
                  <span className="px-3 py-1 bg-[#F6F9FC] text-[#425466] font-bold text-xs rounded-full">Three.js</span>
                </motion.div>
              </div>
              
              {/* Graphic: Dark Medical UI inside light theme */}
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-[#0A2540]/10 to-transparent rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
                <div className="bg-[#0A2540] rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.3)] border border-[#1D3958] p-6 relative overflow-hidden">
                   {/* Grid pattern simulating medical interface */}
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D3958_1px,transparent_1px),linear-gradient(to_bottom,#1D3958_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                   <div className="relative z-10 flex flex-col gap-4">
                     <div className="flex justify-between items-center text-[#ADBDCC]">
                       <span className="font-mono text-xs">DICOM_RENDER_ACTIVE</span>
                       <ActivitySquare size={18} className="text-[#00D4FF]" />
                     </div>
                     <div className="w-full h-40 bg-[#030816] rounded-xl border border-[#1D3958] flex items-center justify-center relative overflow-hidden">
                       <div className="w-24 h-24 rounded-full border border-dashed border-[#00D4FF]/50 animate-[spin_10s_linear_infinite]"></div>
                       <div className="absolute font-mono text-[#00D4FF] text-xs font-bold">60 FPS</div>
                     </div>
                     <div className="w-full bg-[#1D3958] h-2 rounded-full overflow-hidden">
                       <div className="w-[85%] h-full bg-[#00D4FF]"></div>
                     </div>
                   </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 3. SILLAGE E-COMMERCE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
                <motion.h4 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-[#0A2540]">Sillage</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  High-performance e-commerce architecture for luxury fragrances. Focused heavily on visually driven sales logic, optimizing asset delivery, and eliminating DOM layout shifts.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-[#F6F9FC] text-[#425466] font-bold text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-[#F6F9FC] text-[#425466] font-bold text-xs rounded-full">Express</span>
                </motion.div>
              </div>
              
              {/* Graphic: Checkout / Cart Mock UI */}
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF80FF]/10 to-[#7A73FF]/10 rounded-3xl transform rotate-2 scale-105 -z-10"></div>
                <div className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15)] border border-gray-100 p-6 sm:p-8">
                   <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                     <span className="font-bold text-[#0A2540]">Checkout Session</span>
                     <ShoppingCart className="text-[#FF80FF]" size={20} />
                   </div>
                   <div className="flex flex-col gap-4">
                     {[1,2].map((i) => (
                       <div key={i} className="flex justify-between items-center">
                         <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-[#F6F9FC] rounded-lg"></div>
                           <div className="flex flex-col gap-1">
                             <div className="w-24 h-2.5 bg-[#0A2540] rounded"></div>
                             <div className="w-16 h-2 bg-[#425466] rounded"></div>
                           </div>
                         </div>
                         <div className="font-bold text-[#0A2540] text-sm">$145.00</div>
                       </div>
                     ))}
                     <div className="mt-2 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-[#425466] font-medium text-sm">Total</span>
                        <span className="text-[#635BFF] font-black text-lg">$290.00</span>
                     </div>
                     <div className="w-full mt-2 py-3 bg-[#0A2540] rounded-xl text-white text-center font-bold text-sm shadow-md">Pay Now</div>
                   </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- STRIPE NODE DIAGRAM & TECH STACK (Deep Navy) --- */}
      <section id="infrastructure" className="w-full py-32 bg-[#0A2540] relative z-20 overflow-hidden">
        {/* Abstract Background Dotted Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1D3958_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 variants={fadeUp} className="text-[#00D4FF] font-bold tracking-widest uppercase text-sm mb-4">Infrastructure</motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white tracking-tight">The backbone of the stack.</motion.h3>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-[#ADBDCC]">
              Engineered with industry-standard technologies to handle complex state, API orchestration, and distributed data processing.
            </motion.p>
          </motion.div>

          {/* THE NODE MAP (Recreating the uploaded screenshot) */}
          <div className="relative w-full max-w-4xl mx-auto h-[450px] flex items-center justify-center mb-16">
            
            {/* Dashed Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full -z-10" pointerEvents="none">
              <path d="M50% 50% L25% 30%" stroke="#635BFF" strokeWidth="2" strokeDasharray="6,6" className="animate-[dashAnim_20s_linear_infinite]" />
              <path d="M50% 50% L75% 30%" stroke="#00D4FF" strokeWidth="2" strokeDasharray="6,6" className="animate-[dashAnim_20s_linear_infinite]" />
              <path d="M50% 50% L25% 70%" stroke="#FF80FF" strokeWidth="2" strokeDasharray="6,6" className="animate-[dashAnim_20s_linear_infinite]" />
              <path d="M50% 50% L75% 70%" stroke="#635BFF" strokeWidth="2" strokeDasharray="6,6" className="animate-[dashAnim_20s_linear_infinite]" />
              <path d="M50% 50% L50% 85%" stroke="#00D4FF" strokeWidth="2" strokeDasharray="6,6" className="animate-[dashAnim_20s_linear_infinite]" />
            </svg>

            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-32 h-32 bg-gradient-to-br from-[#635BFF] to-[#0A2540] rounded-2xl shadow-[0_0_50px_rgba(99,91,255,0.5)] flex items-center justify-center border border-[#635BFF]/50 relative">
                <span className="text-white font-black text-xl tracking-widest">NV.SYS</span>
              </div>
            </div>

            {/* Sub-Nodes */}
            <div className="absolute top-[15%] left-[10%] sm:left-[15%] w-32 bg-[#112A46] border border-[#1D3958] rounded-lg p-3 text-center shadow-2xl">
              <span className="text-white text-xs font-bold">Client Edge</span>
            </div>
            <div className="absolute top-[15%] right-[10%] sm:right-[15%] w-32 bg-[#112A46] border border-[#1D3958] rounded-lg p-3 text-center shadow-2xl">
              <span className="text-white text-xs font-bold">REST API</span>
            </div>
            <div className="absolute bottom-[15%] left-[10%] sm:left-[15%] w-32 bg-[#112A46] border border-[#1D3958] rounded-lg p-3 text-center shadow-2xl">
              <span className="text-white text-xs font-bold">Message Queue</span>
            </div>
            <div className="absolute bottom-[15%] right-[10%] sm:right-[15%] w-32 bg-[#112A46] border border-[#1D3958] rounded-lg p-3 text-center shadow-2xl">
              <span className="text-white text-xs font-bold">Data Pipeline</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 bg-[#635BFF] border border-[#7A73FF] rounded-lg p-3 text-center shadow-[0_10px_30px_rgba(99,91,255,0.4)] z-10">
              <span className="text-white text-xs font-bold">Orchestration</span>
            </div>

            {/* Integration Logos Block (Left Side) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[2%] sm:left-[5%] grid grid-cols-2 gap-2 bg-[#0A2540] p-2 rounded-xl border border-[#1D3958]">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm"><SiPython className="text-[#3776AB] text-xl" /></div>
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm"><FaJava className="text-[#007396] text-xl" /></div>
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm"><SiReact className="text-[#61DAFB] text-xl" /></div>
              <div className="w-10 h-10 bg-[#0A2540] border border-[#1D3958] rounded flex items-center justify-center"><SiWebgl className="text-white text-xl" /></div>
            </div>
          </div>

          {/* ALL TECHNOLOGIES GRID (Bottom Integrations) */}
          <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 relative z-20 pt-12 border-t border-[#1D3958]">
            {[
              { label: "Next.js", Icon: SiNextdotjs, color: "hover:border-white", glow: "group-hover:text-white" },
              { label: "Express", Icon: SiExpress, color: "hover:border-white", glow: "group-hover:text-white" },
              { label: "Node.js", Icon: SiNodedotjs, color: "hover:border-[#339933]", glow: "group-hover:text-[#339933]" },
              { label: "Postgres", Icon: SiPostgresql, color: "hover:border-[#4169E1]", glow: "group-hover:text-[#4169E1]" },
              { label: "MongoDB", Icon: SiMongodb, color: "hover:border-[#47A248]", glow: "group-hover:text-[#47A248]" },
              { label: "Firebase", Icon: SiFirebase, color: "hover:border-[#FFCA28]", glow: "group-hover:text-[#FFCA28]" },
              { label: "Supabase", Icon: SiSupabase, color: "hover:border-[#3ECF8E]", glow: "group-hover:text-[#3ECF8E]" },
              { label: "SQL", Icon: SiMysql, color: "hover:border-[#4479A1]", glow: "group-hover:text-[#4479A1]" },
              { label: "Three.js", Icon: SiThreedotjs, color: "hover:border-white", glow: "group-hover:text-white" },
              { label: "Docker", Icon: SiDocker, color: "hover:border-[#2496ED]", glow: "group-hover:text-[#2496ED]" },
              { label: "Redis", Icon: SiRedis, color: "hover:border-[#DC382D]", glow: "group-hover:text-[#DC382D]" },
              { label: "System", Icon: Server, color: "hover:border-[#00D4FF]", glow: "group-hover:text-[#00D4FF]" },
            ].map((tech, idx) => (
              <div key={idx} className={`group bg-[#112A46]/30 border border-[#1D3958] ${tech.color} transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4 aspect-square rounded-2xl hover:-translate-y-1 shadow-lg`}>
                <div className={`text-2xl sm:text-3xl text-[#5A748F] ${tech.glow} transition-colors duration-300`}>
                  <tech.Icon />
                </div>
                <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#5A748F] ${tech.glow} transition-colors duration-300`}>
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Keyframes for dashed line animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes dashAnim {
            to { stroke-dashoffset: -1000; }
          }
        `}} />
      </section>

    </div>
  );
}
