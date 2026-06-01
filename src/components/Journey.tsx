"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const journeySteps = [
  {
    year: "Phase 01",
    title: "Algorithmic Foundation",
    description: "Mastered Data Structures and Algorithms. Focused on time/space complexity optimization, problem-solving, and efficient data manipulation.",
    tech: "DSA // Logic"
  },
  {
    year: "Phase 02",
    title: "Full-Stack MERN Mastery",
    description: "Built end-to-end applications using MongoDB, Express, React, and Node.js. Developed responsive UIs and robust RESTful APIs.",
    tech: "React // Node.js // MongoDB"
  },
  {
    year: "Phase 03",
    title: "System Design & Scale",
    description: "Transitioned to Next.js and distributed architectures. Implemented caching layers, PostgreSQL databases, and cloud deployments for production-ready systems.",
    tech: "Next.js // PostgreSQL // AWS"
  }
];

export default function Journey() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Draw the timeline line as you scroll
    gsap.fromTo(".journey-line", 
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    // Fade in text nodes
    gsap.utils.toArray(".journey-node").forEach((node: any) => {
      gsap.fromTo(node,
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 75%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="journey" ref={container} className="w-full bg-[#f6f9fc] py-32 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 journey-container">
        
        <div className="mb-20 text-center md:text-left">
          <span className="text-[10px] font-bold tracking-widest text-[#635bff] uppercase mb-4 block">The Path</span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0a2540] tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635bff] to-[#00d4ff]">Journey.</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          
          {/* THE FIX: Added w-[2px] and -translate-x-1/2 to perfectly center the line axis */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gray-200">
            <div className="journey-line w-full h-full bg-gradient-to-b from-[#635bff] via-[#ff4db8] to-[#00d4ff]" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {journeySteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`journey-node relative w-full flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* THE FIX: Added uniform -translate-x-1/2 so the dot's center aligns flawlessly with the line's center */}
                  <div className="absolute left-[-32px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-[#f6f9fc] border-[2px] border-[#635bff] -translate-x-1/2 mt-[6px] shadow-[0_0_12px_rgba(99,91,255,0.5)] z-10" />
                  
                  {/* Content Typography */}
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pl-16' : 'md:pr-16 md:items-end md:text-right'}`}>
                    <span className="font-mono text-[10px] md:text-xs font-bold text-[#00d4ff] uppercase tracking-widest mb-2">{step.year}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-[#425466] text-sm md:text-base leading-relaxed mb-4">{step.description}</p>
                    <span className="text-[9px] md:text-[10px] font-mono text-[#635bff] uppercase tracking-wider">{step.tech}</span>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
