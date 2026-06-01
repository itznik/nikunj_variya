"use client";
import { useRef } from "react";
import { FaAws } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, 
  SiPostgresql, SiMongodb, SiTailwindcss, SiFramer, 
  SiPython, SiSupabase, SiFirebase 
} from "react-icons/si";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-black" },
  { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-[#339933]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-[#4169E1]" },
  { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-[#47A248]" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
  { name: "Framer Motion", icon: SiFramer, color: "group-hover:text-[#0055FF]" },
  { name: "Python", icon: SiPython, color: "group-hover:text-[#3776AB]" },
  { name: "Supabase", icon: SiSupabase, color: "group-hover:text-[#3ECF8E]" },
  { name: "Firebase", icon: SiFirebase, color: "group-hover:text-[#FFCA28]" },
  { name: "AWS", icon: FaAws, color: "group-hover:text-[#232F3E]" },
];

export default function Skills() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered grid reveal on scroll
    gsap.fromTo(".tech-card", 
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="w-full bg-[#f6f9fc] py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-stripe-blurple uppercase mb-4 block">02 // Core Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] tracking-tight">
            Engineering Stack.
          </h2>
          <p className="text-[#425466] text-lg mt-4 max-w-2xl mx-auto md:mx-0">
            The fundamental tools and languages utilized to construct resilient algorithms and highly concurrent system architectures.
          </p>
        </div>

        {/* High-Fidelity Stripe Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index} 
                className="tech-card group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 stripe-shadow-sm hover:stripe-shadow hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <Icon className={`text-4xl text-[#425466]/40 transition-colors duration-300 mb-4 ${tech.color}`} />
                <span className="text-xs font-semibold text-[#0a2540]">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
