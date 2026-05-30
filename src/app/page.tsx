"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { 
  SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb, SiFirebase, SiSupabase, 
  SiDocker, SiRedis, SiWebgl, SiThreedotjs, SiMysql,
  SiVercel, SiAmazon, SiStripe
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-[#0A2540] selection:bg-[#635BFF] selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <main className="relative w-full pt-32 sm:pt-48 pb-24 sm:pb-32 px-6 sm:px-12 flex flex-col justify-center overflow-hidden">
        {/* Stripe Diagonal Background */}
        <div className="absolute top-0 left-0 w-full h-[95vh] overflow-hidden -z-10 origin-top-left skew-y-[-6deg] bg-white border-b border-gray-100">
          <div className="absolute top-0 right-0 w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-[#80E9FF] via-[#7A73FF] to-[#FF80FF] blur-[100px] opacity-[0.25] mix-blend-multiply translate-x-1/4 -translate-y-1/4"></div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="text-[11vw] sm:text-[5.5rem] lg:text-[6.5rem] font-black leading-[0.95] tracking-tighter text-[#0A2540]">
              Software <br />
              <span className="text-[#635BFF]">infrastructure</span> <br />
              to scale ideas.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-lg sm:text-xl text-[#425466] font-medium max-w-xl leading-relaxed">
              Engineering fault-tolerant distributed systems, high-performance web applications, and uncompromising digital infrastructure.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10">
              <a href="#deployments" className="bg-[#635BFF] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#0A2540] transition-all hover:shadow-[0_10px_20px_rgba(99,91,255,0.3)] hover:-translate-y-0.5 w-max">
                Explore Deployments <ChevronRight size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* --- PROJECTS / FLOATING WIDGETS --- */}
      <section id="deployments" className="w-full py-24 sm:py-32 bg-white relative z-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col gap-24 sm:gap-40">
            
            {/* 1. SILLAGE (Recreating the "Daybreak Yoga" Receipt UI) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
                <motion.h4 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[#0A2540]">Sillage E-Commerce</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  High-performance architecture for luxury fragrances. Focused heavily on visually driven sales logic, optimizing asset delivery, and providing a fluid, app-like checkout experience.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center gap-2 text-[#425466] font-medium"><CheckCircle2 className="text-[#635BFF]" size={18}/> React & Next.js Frontend</div>
                  <div className="flex items-center gap-2 text-[#425466] font-medium"><CheckCircle2 className="text-[#635BFF]" size={18}/> Express API Backend</div>
                  <div className="flex items-center gap-2 text-[#425466] font-medium"><CheckCircle2 className="text-[#635BFF]" size={18}/> Stripe Payment Integration</div>
                </motion.div>
              </div>
              
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                {/* Background flourish */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF80FF]/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                
                {/* The "Receipt" UI Widget */}
                <div className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),0_30px_60px_-30px_rgba(0,0,0,0.1)] border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#FF80FF]/10 text-[#FF80FF] rounded-full flex items-center justify-center font-black">S</div>
                    <span className="font-bold text-[#0A2540] text-lg">Sillage Perfumes</span>
                  </div>
                  <div className="text-sm font-semibold text-[#425466] mb-6">Hello, User<br/><span className="font-normal text-gray-500">Your order is now confirmed.</span></div>
                  
                  <div className="w-full bg-[#F6F9FC] rounded-xl p-6 border border-gray-100">
                     <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                        <span className="text-[#425466] font-medium text-sm">Order number</span>
                        <span className="text-[#0A2540] font-bold text-sm">#9803890</span>
                     </div>
                     <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
                        <span className="text-[#425466] font-medium text-sm">Payment method</span>
                        <span className="bg-[#0A2540] text-white text-[10px] px-2 py-0.5 rounded font-bold">VISA</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[#425466] font-medium text-sm">Total</span>
                        <span className="text-[#0A2540] font-black text-lg">US$290.00</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 2. HELPIO (Recreating the "Agentic Commerce Chat" UI) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <motion.h4 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[#0A2540]">Helpio Platform</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  A gamified wishlist and donor fulfillment platform featuring real-time verification systems. Built with a robust relational architecture to handle concurrent transactions securely.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-[#F6F9FC] border border-gray-200 text-[#425466] text-xs font-semibold rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-[#F6F9FC] border border-gray-200 text-[#425466] text-xs font-semibold rounded-full">PostgreSQL</span>
                </motion.div>
              </div>
              
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#635BFF_0%,transparent_50%)] opacity-10 blur-xl"></div>
                
                {/* The "Chat/Feed" UI Widget */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15)] border border-gray-100 p-6 sm:p-8 flex flex-col gap-4">
                  {/* Sender Bubble */}
                  <div className="self-end max-w-[80%] bg-[#F6F9FC] border border-gray-100 rounded-2xl rounded-tr-none p-4 shadow-sm">
                    <p className="text-sm text-[#0A2540] font-medium">I'm looking to donate medical supplies. Can you verify this recipient?</p>
                  </div>
                  {/* Receiver Bubble */}
                  <div className="self-start max-w-[90%] bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 shadow-sm flex flex-col gap-4">
                    <p className="text-sm text-[#425466]">Absolutely. Here is the verified wishlist for Hospital #8920:</p>
                    <div className="flex gap-3">
                       <div className="w-1/2 bg-[#F6F9FC] border border-gray-200 rounded-xl p-3 flex flex-col">
                          <div className="w-full h-20 bg-[#635BFF]/10 rounded-lg mb-3 flex items-center justify-center font-bold text-[#635BFF] text-[10px]">O2 CONCENTRATOR</div>
                          <span className="text-xs font-bold text-[#0A2540]">Medical Grade</span>
                          <span className="text-[10px] text-[#425466] mt-1">₹45,000.00</span>
                       </div>
                       <div className="w-1/2 bg-[#F6F9FC] border border-gray-200 rounded-xl p-3 flex flex-col">
                          <div className="w-full h-20 bg-[#00D4FF]/10 rounded-lg mb-3 flex items-center justify-center font-bold text-[#00D4FF] text-[10px]">SUPPLIES KIT</div>
                          <span className="text-xs font-bold text-[#0A2540]">Essential Care</span>
                          <span className="text-[10px] text-[#425466] mt-1">₹4,560.00</span>
                       </div>
                    </div>
                    <button className="w-full bg-[#635BFF] text-white font-bold text-sm py-2 rounded-lg mt-2 shadow-md hover:bg-[#0A2540] transition-colors">Fulfill Request</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 3. GOTRIP (Recreating the "Globe/Map" UI) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
                <motion.h4 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[#0A2540]">Gotrip Tourism</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  Scalable tourism web application integrated with interactive mapping and secure administrative content management.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-[#F6F9FC] border border-gray-200 text-[#425466] text-xs font-semibold rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-[#F6F9FC] border border-gray-200 text-[#425466] text-xs font-semibold rounded-full">WebGL</span>
                </motion.div>
              </div>
              
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                {/* The "Map" UI Widget */}
                <div className="bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15)] border border-gray-100 h-80 relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#F6F9FC] to-white">
                   {/* Abstract dotted globe pattern */}
                   <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#635BFF 1px, transparent 1px)', backgroundSize: '16px 16px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)' }}></div>
                   
                   {/* Connection Arc */}
                   <svg className="absolute inset-0 w-full h-full" pointerEvents="none">
                      <path d="M 100 200 Q 200 100 300 250" fill="none" stroke="#FF80FF" strokeWidth="2" strokeDasharray="4 4" />
                   </svg>
                   
                   {/* Floating Tags */}
                   <div className="absolute top-[35%] left-[25%] bg-white px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
                     <div className="w-4 h-4 bg-[#635BFF] rounded flex items-center justify-center text-white text-[8px] font-bold">G</div>
                     <span className="font-bold text-[#0A2540] text-xs">Destination A</span>
                   </div>

                   <div className="absolute top-[50%] right-[20%] bg-white px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
                     <div className="w-4 h-4 bg-[#00D4FF] rounded flex items-center justify-center text-white text-[8px] font-bold">G</div>
                     <span className="font-bold text-[#0A2540] text-xs">Destination B</span>
                   </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- THE BACKBONE / STATS SCREEN --- */}
      <section className="w-full py-24 sm:py-32 bg-[#0A2540] relative overflow-hidden">
        {/* Swooping curved lines background */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M -20 100 Q 50 0 120 100" fill="none" stroke="#635BFF" strokeWidth="0.5" />
          <path d="M -20 120 Q 50 20 120 120" fill="none" stroke="#00D4FF" strokeWidth="0.5" />
          <path d="M 0 140 Q 50 40 100 140" fill="none" stroke="#FF80FF" strokeWidth="0.5" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-16">The backbone of the architecture</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h3 className="text-5xl sm:text-7xl font-light text-white tracking-tighter">99.999%</h3>
              <p className="text-[#ADBDCC] text-lg font-medium mt-2">Target uptime for scalable deployment services</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h3 className="text-5xl sm:text-7xl font-light text-white tracking-tighter">O(1)</h3>
              <p className="text-[#ADBDCC] text-lg font-medium mt-2">Algorithmic efficiency focus for core data structures</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE: THE NODE DIAGRAM & TECH STACK --- */}
      <section id="infrastructure" className="w-full py-24 sm:py-32 bg-[#0A2540] relative z-20 border-t border-[#1D3958]">
        {/* Deep grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D3958_1px,transparent_1px),linear-gradient(to_bottom,#1D3958_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: The Tech Logo Cluster (Recreating the Hubspot/Quickbooks cluster) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="w-full lg:w-1/3 order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-white mb-6">Scale with confidence.</h3>
            <p className="text-[#ADBDCC] text-lg mb-8 leading-relaxed">
              Integrate seamlessly with industry-leading tools. A meticulously curated technology stack ensuring reliability, speed, and clean code architecture.
            </p>
            
            {/* Logo Cluster Grid */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { Icon: SiPython, color: "text-[#3776AB]", bg: "bg-white" },
                { Icon: FaJava, color: "text-[#007396]", bg: "bg-white" },
                { Icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#112A46]" },
                { Icon: SiNextdotjs, color: "text-[#000000]", bg: "bg-white" },
                { Icon: SiNodedotjs, color: "text-[#339933]", bg: "bg-white" },
                { Icon: SiExpress, color: "text-white", bg: "bg-[#112A46]" },
                { Icon: SiPostgresql, color: "text-[#4169E1]", bg: "bg-white" },
                { Icon: SiMongodb, color: "text-[#47A248]", bg: "bg-white" },
                { Icon: SiFirebase, color: "text-[#FFCA28]", bg: "bg-white" },
                { Icon: SiSupabase, color: "text-[#3ECF8E]", bg: "bg-[#112A46]" },
                { Icon: SiDocker, color: "text-[#2496ED]", bg: "bg-white" },
                { Icon: SiRedis, color: "text-[#DC382D]", bg: "bg-white" },
              ].map((tech, idx) => (
                <div key={idx} className={`w-full aspect-square rounded-xl flex items-center justify-center shadow-lg ${tech.bg}`}>
                  <tech.Icon className={`text-2xl ${tech.color}`} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Node Diagram */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full lg:w-2/3 h-[500px] relative order-1 lg:order-2">
            
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-[#635BFF] w-32 h-32 rounded-2xl shadow-[0_0_50px_rgba(99,91,255,0.4)] flex items-center justify-center relative">
                <span className="text-white font-black text-xl tracking-widest">NV.SYS</span>
              </div>
            </div>

            {/* Sub-Nodes */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-40 bg-[#112A46] border border-[#1D3958] rounded-lg p-3 text-center z-10 shadow-xl">
              <span className="text-white text-xs font-bold">Client Interface</span>
            </div>
            
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-48 bg-[#635BFF] rounded-lg p-3 text-center z-10 shadow-[0_10px_30px_rgba(99,91,255,0.3)]">
              <span className="text-white text-xs font-bold">Orchestration</span>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-[5%] w-32 bg-[#112A46] border border-[#1D3958] rounded-lg p-3 text-center z-10 shadow-xl">
              <span className="text-white text-xs font-bold">REST API</span>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-32 bg-[#112A46] border border-[#1D3958] rounded-lg p-3 text-center z-10 shadow-xl">
              <span className="text-white text-xs font-bold">Data Pipeline</span>
            </div>

            {/* SVG Connecting Lines (Dashed) */}
            <svg className="absolute inset-0 w-full h-full -z-10" pointerEvents="none">
              <path d="M50% 50% L50% 15%" stroke="#635BFF" strokeWidth="2" strokeDasharray="4,4" className="animate-[dashAnim_20s_linear_infinite]" />
              <path d="M50% 50% L50% 85%" stroke="#00D4FF" strokeWidth="2" strokeDasharray="4,4" className="animate-[dashAnim_20s_linear_infinite]" />
              <path d="M50% 50% L15% 50%" stroke="#FF80FF" strokeWidth="2" strokeDasharray="4,4" className="animate-[dashAnim_20s_linear_infinite]" />
              <path d="M50% 50% L85% 50%" stroke="#635BFF" strokeWidth="2" strokeDasharray="4,4" className="animate-[dashAnim_20s_linear_infinite]" />
            </svg>

            {/* Little sub-blocks simulating the small rectangles at the bottom of the Stripe diagram */}
            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex gap-2 opacity-50">
               <div className="w-12 h-6 border border-[#1D3958] rounded"></div>
               <div className="w-12 h-6 border border-[#1D3958] rounded"></div>
               <div className="w-12 h-6 border border-[#1D3958] rounded"></div>
               <div className="w-12 h-6 border border-[#1D3958] rounded"></div>
            </div>

          </motion.div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `@keyframes dashAnim { to { stroke-dashoffset: -1000; } }`}} />
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
