"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image"; // Assuming you have a photo to use

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll-triggered animations for the text and image
    gsap.fromTo(".about-text", 
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(".about-image-container", 
      { scale: 0.95, opacity: 0, rotationY: 10 },
      {
        scale: 1, opacity: 1, rotationY: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );

    // Floating animation for the telemetry badge
    gsap.to(".telemetry-badge", {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: container });

  return (
    <section id="about" ref={container} className="w-full bg-white py-24 md:py-32 relative border-t border-gray-100 overflow-hidden">
      
      {/* Subtle Stripe-style background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-stripe-bg to-white rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: Engineering Philosophy */}
        <div className="flex flex-col items-start order-2 lg:order-1">
          <span className="about-text text-xs font-bold tracking-widest text-[#00d4ff] uppercase mb-4 block bg-[#00d4ff]/10 px-3 py-1.5 rounded-full">
            03 // The Architect
          </span>
          
          <h2 className="about-text text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2540] tracking-tight mb-8">
            Building systems <br className="hidden md:block" /> that scale.
          </h2>
          
          <div className="space-y-6 text-[#425466] text-lg leading-relaxed font-medium">
            <p className="about-text">
              I am a Full-Stack Software Engineer focused on constructing resilient, low-latency applications. My engineering philosophy revolves around strict algorithmic efficiency, clean data structures, and uncompromised systemic integrity.
            </p>
            <p className="about-text">
              Whether I am mapping complex system designs or developing high-throughput APIs, I approach code not just as a set of instructions, but as an orchestrated architecture where every node, query, and cache layer must be optimized for peak performance.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="about-text grid grid-cols-2 gap-4 mt-10 w-full">
            <div className="border border-gray-100 bg-[#f6f9fc] rounded-xl p-4 stripe-shadow-sm">
              <span className="block text-stripe-blurple font-bold mb-1">DSA Excellence</span>
              <span className="text-xs text-[#425466] font-medium">Space/Time complexity optimization.</span>
            </div>
            <div className="border border-gray-100 bg-[#f6f9fc] rounded-xl p-4 stripe-shadow-sm">
              <span className="block text-stripe-cyan font-bold mb-1">System Design</span>
              <span className="text-xs text-[#425466] font-medium">Microservices & Distributed architectures.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Photo & Telemetry UI */}
        <div className="about-image-container relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto lg:mx-0 order-1 lg:order-2 perspective-[1000px]">
          
          {/* Main Photo Wrapper */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden stripe-shadow bg-[#0a2540]">
            
            {/* REPLACE THIS DIV WITH YOUR ACTUAL NEXT/IMAGE */}
            {/* Example: <Image src="/nikunj.jpg" alt="Nikunj Variya" fill className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" /> */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a2540] to-[#1a365d] flex flex-col items-center justify-center">
              <span className="text-white/20 font-mono text-sm">[ Insert Photo: /public/photo.jpg ]</span>
            </div>
            
            {/* Inner Glass Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent" />
          </div>

          {/* Floating Telemetry Badge */}
          <div className="telemetry-badge absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-xl stripe-shadow p-4 z-20 border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stripe-bg flex items-center justify-center border border-gray-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#635bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <div>
              <div className="text-xs font-bold text-[#0a2540] uppercase tracking-wider mb-0.5">Execution Status</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-[#425466]">Ready for Deployment</span>
              </div>
            </div>
          </div>

          {/* Decorative Code Block */}
          <div className="absolute -top-6 -right-6 md:-right-8 bg-[#0a2540] rounded-lg stripe-shadow-sm p-3 z-0 border border-[#1a365d]">
            <pre className="text-[8px] md:text-[10px] font-mono text-stripe-cyan">
              <code>
                const engineer = {"{"}{"\n"}
                {"  "}role: "Full-Stack",{"\n"}
                {"  "}focus: "Scalability"{"\n"}
                {"}"};
              </code>
            </pre>
          </div>

        </div>
      </div>
    </section>
  );
}
