"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { 
  SiPython, SiReact, SiNextdotjs, SiNodedotjs, 
  SiPostgresql, SiMongodb, SiFirebase, SiDocker, SiRedis
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

// Reusable animation variants for scroll triggers
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white text-[#0A2540] selection:bg-[#635BFF] selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. STRIPE-STYLE VIBRANT HERO BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[90vh] overflow-hidden -z-10 bg-[#F6F9FC] skew-y-[-6deg] origin-top-left">
        {/* Massive blurred gradient meshes bleeding off the edges */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#80E9FF] to-[#7A73FF] blur-[100px] opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-[#FF80FF] to-[#FF80A2] blur-[100px] opacity-40 mix-blend-multiply"></div>
      </div>

      {/* FULL BLEED NAV */}
      <header className="w-full absolute top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <span className="font-black text-xl tracking-tighter text-[#0A2540]">NV<span className="text-[#635BFF]">.</span></span>
          <nav className="hidden md:flex gap-8 font-medium text-sm text-[#425466]">
            <a href="#deployments" className="hover:text-[#0A2540] transition-colors">Deployments</a>
            <a href="#infrastructure" className="hover:text-[#0A2540] transition-colors">Infrastructure</a>
          </nav>
          <button className="bg-[#635BFF]/10 text-[#635BFF] px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#635BFF] hover:text-white transition-all">
            Initialize Contact
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="w-full pt-32 sm:pt-48 pb-32 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeUp} className="text-[12vw] sm:text-[5rem] lg:text-[6.5rem] font-black leading-[0.95] tracking-tighter text-[#0A2540]">
            Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635BFF] to-[#00D4FF]">infrastructure</span> <br />
            to scale ideas.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="mt-8 text-lg sm:text-xl text-[#425466] font-medium max-w-xl leading-relaxed">
            Engineering fault-tolerant distributed systems, high-performance web applications, and uncompromising UI/UX.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#635BFF] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#0A2540] transition-all hover:scale-105 shadow-[0_10px_20px_rgba(99,91,255,0.3)]">
              View Architecture <ArrowRight size={18} />
            </button>
          </button>
          </motion.div>
        </motion.div>
      </main>

      {/* STRIPE-STYLE PROJECT CARDS (Overlapping UI Graphics) */}
      <section id="deployments" className="w-full py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-[#635BFF] font-bold tracking-widest uppercase text-sm mb-4">Deployments</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-[#0A2540] tracking-tight mb-16">High-performance applications.</h3>
          </motion.div>

          <div className="flex flex-col gap-12 sm:gap-24">
            
            {/* PROJECT 1: HELP.IO (The "Agentic Commerce" Vibe) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
            >
              <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
                <motion.h4 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-[#0A2540]">Helpio Platform</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  A full-stack donor fulfillment platform. Engineered with a complex relational database architecture to handle real-time verification and leaderboards instantly.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-4">
                  {['Next.js Framework', 'PostgreSQL Database', 'Tailwind CSS'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[#425466] font-medium">
                      <CheckCircle2 size={18} className="text-[#00D4FF]" /> {item}
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Fake UI Graphic (Mimicking Stripe's Product Shots) */}
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                {/* Decorative background splatter */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/10 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
                   {/* Mock UI Interface */}
                   <div className="w-full bg-[#F6F9FC] rounded-xl p-4 mb-4 flex justify-between items-center">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-[#635BFF] text-white flex items-center justify-center font-bold text-xs">H</div>
                       <div>
                         <div className="text-sm font-bold text-[#0A2540]">Wishlist #8902</div>
                         <div className="text-xs text-[#425466]">Verified Recipient</div>
                       </div>
                     </div>
                     <div className="bg-[#E3E8EE] px-3 py-1 rounded-full text-xs font-bold text-[#425466]">Pending</div>
                   </div>
                   <div className="flex gap-4">
                     <div className="w-1/2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
                       <div className="w-full h-24 bg-[#E3E8EE] rounded-lg mb-2"></div>
                       <div className="h-3 w-3/4 bg-[#0A2540] rounded"></div>
                       <div className="h-3 w-1/2 bg-[#425466] rounded"></div>
                     </div>
                     <div className="w-1/2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
                       <div className="w-full h-24 bg-[#E3E8EE] rounded-lg mb-2"></div>
                       <div className="h-3 w-3/4 bg-[#0A2540] rounded"></div>
                       <div className="h-3 w-1/2 bg-[#425466] rounded"></div>
                     </div>
                   </div>
                   <div className="mt-6 w-full py-3 bg-[#635BFF] rounded-xl text-white text-center font-bold text-sm shadow-md">Fulfill Request</div>
                </div>
              </motion.div>
            </motion.div>

            {/* PROJECT 2: SILLAGE */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
            >
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-[#FF80FF]/10 to-transparent rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
                <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-6 sm:p-8 flex flex-col gap-4">
                  {/* Mock Checkout UI */}
                  <div className="text-lg font-bold text-[#0A2540] mb-2 border-b border-gray-100 pb-4">Checkout Session</div>
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex justify-between items-center py-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#F6F9FC] rounded-lg flex items-center justify-center text-xs">🛍️</div>
                        <div className="h-3 w-24 bg-[#0A2540] rounded"></div>
                      </div>
                      <div className="h-3 w-12 bg-[#00D4FF] rounded"></div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center font-bold text-[#0A2540]">
                    <span>Total</span>
                    <span>$290.00</span>
                  </div>
                </div>
              </motion.div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <motion.h4 variants={fadeUp} className="text-2xl sm:text-4xl font-bold text-[#0A2540]">Sillage E-Commerce</motion.h4>
                <motion.p variants={fadeUp} className="text-lg text-[#425466] leading-relaxed">
                  High-performance architecture for luxury fragrances. Focused heavily on visually driven sales logic, optimizing asset delivery, and eliminating layout shifts.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-4">
                  {['React Frontend', 'Node.js & Express', 'Payment Integration'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[#425466] font-medium">
                      <CheckCircle2 size={18} className="text-[#FF80FF]" /> {item}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* THE DEEP DARK ARCHITECTURE SECTION (Mimicking the Blue/Navy Stripe Screenshots) */}
      <section id="infrastructure" className="w-full py-32 bg-[#0A2540] relative z-20 overflow-hidden">
        {/* Abstract Data Lines Background */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C30,50 70,50 100,0" fill="none" stroke="#635BFF" strokeWidth="0.2" />
          <path d="M0,80 C40,40 60,60 100,20" fill="none" stroke="#00D4FF" strokeWidth="0.2" />
          <path d="M0,120 C50,70 50,30 100,-20" fill="none" stroke="#FF80FF" strokeWidth="0.2" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 variants={fadeUp} className="text-[#00D4FF] font-bold tracking-widest uppercase text-sm mb-4">Infrastructure</motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl sm:text-5xl font-bold text-white tracking-tight">The backbone of the stack.</motion.h3>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-[#ADBDCC]">
              Built with industry-standard technologies to handle data processing, API routing, and complex system orchestration.
            </motion.p>
          </motion.div>

          {/* THE NODE GRAPHIC (Recreating Screenshot #7) */}
          <div className="relative w-full max-w-4xl mx-auto h-[600px] sm:h-[500px] flex items-center justify-center">
            
            {/* Background Grid inside the Node Area */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D3958_1px,transparent_1px),linear-gradient(to_bottom,#1D3958_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 mask-image-[radial-gradient(ellipse_at_center,black,transparent)]"></div>

            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-32 h-32 bg-gradient-to-br from-[#635BFF] to-[#0A2540] rounded-2xl shadow-[0_0_50px_rgba(99,91,255,0.4)] flex items-center justify-center border border-[#635BFF]/50 relative">
                <span className="text-white font-black text-xl tracking-widest">NV.SYS</span>
                {/* Glowing pulse behind center */}
                <div className="absolute inset-0 bg-[#635BFF] rounded-2xl animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Connecting SVG Lines (Dashed) */}
            <svg className="absolute inset-0 w-full h-full -z-10" pointerEvents="none">
              <path d="M50% 50% L20% 25%" stroke="#635BFF" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
              <path d="M50% 50% L80% 25%" stroke="#00D4FF" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
              <path d="M50% 50% L20% 75%" stroke="#FF80FF" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
              <path d="M50% 50% L80% 75%" stroke="#635BFF" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
            </svg>

            {/* Floating Tech Nodes */}
            <div className="absolute top-[15%] left-[10%] sm:left-[20%] w-24 h-24 bg-[#112A46] border border-[#1D3958] rounded-xl flex flex-col items-center justify-center gap-2 shadow-xl hover:-translate-y-2 transition-transform cursor-pointer">
              <SiReact size={28} className="text-[#00D4FF]" />
              <span className="text-[#ADBDCC] text-[10px] font-bold uppercase tracking-wider">Frontend</span>
            </div>

            <div className="absolute top-[15%] right-[10%] sm:right-[20%] w-24 h-24 bg-[#112A46] border border-[#1D3958] rounded-xl flex flex-col items-center justify-center gap-2 shadow-xl hover:-translate-y-2 transition-transform cursor-pointer">
              <SiNodedotjs size={28} className="text-[#00D4FF]" />
              <span className="text-[#ADBDCC] text-[10px] font-bold uppercase tracking-wider">Backend</span>
            </div>

            <div className="absolute bottom-[15%] left-[10%] sm:left-[20%] w-24 h-24 bg-[#112A46] border border-[#1D3958] rounded-xl flex flex-col items-center justify-center gap-2 shadow-xl hover:-translate-y-2 transition-transform cursor-pointer">
              <SiPostgresql size={28} className="text-[#FF80FF]" />
              <span className="text-[#ADBDCC] text-[10px] font-bold uppercase tracking-wider">Database</span>
            </div>

            <div className="absolute bottom-[15%] right-[10%] sm:right-[20%] w-24 h-24 bg-[#112A46] border border-[#1D3958] rounded-xl flex flex-col items-center justify-center gap-2 shadow-xl hover:-translate-y-2 transition-transform cursor-pointer">
              <SiDocker size={28} className="text-[#635BFF]" />
              <span className="text-[#ADBDCC] text-[10px] font-bold uppercase tracking-wider">Deploy</span>
            </div>

            {/* Extra Tech Icons grouped like Stripe's partner logos */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[5%] grid grid-cols-2 gap-2">
              <div className="w-10 h-10 bg-[#112A46] rounded flex items-center justify-center"><SiPython className="text-white" /></div>
              <div className="w-10 h-10 bg-[#112A46] rounded flex items-center justify-center"><FaJava className="text-white" /></div>
              <div className="w-10 h-10 bg-[#112A46] rounded flex items-center justify-center"><SiRedis className="text-white" /></div>
              <div className="w-10 h-10 bg-[#112A46] rounded flex items-center justify-center"><SiFirebase className="text-white" /></div>
            </div>

          </div>
        </div>
        
        {/* CSS for animating the dashed lines */}
        <style jsx>{`
          @keyframes dash {
            to { stroke-dashoffset: -1000; }
          }
        `}</style>
      </section>

    </div>
  );
}
