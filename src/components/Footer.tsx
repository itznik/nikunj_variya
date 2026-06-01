"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation for the footer content
    gsap.fromTo(".footer-element", 
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <footer ref={container} className="w-full bg-[#0a2540] relative overflow-hidden pt-32 pb-12 border-t border-[#1a365d]">
      
      {/* Deep Mesh Gradient for the Footer Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-stripe-blurple/20 via-[#0a2540] to-[#0a2540] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Contact CTA Section */}
        <div className="w-full max-w-4xl bg-[#1a365d]/40 backdrop-blur-md border border-[#2a4365] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between stripe-shadow mb-24">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <span className="footer-element text-stripe-cyan font-mono text-xs uppercase tracking-widest mb-3 block">
              Init_Connection
            </span>
            <h2 className="footer-element text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Ready to architect <br className="hidden md:block" /> your next system?
            </h2>
            <p className="footer-element text-[#adbdcc] text-base md:text-lg max-w-sm">
              Available for full-stack engineering roles and architectural consulting.
            </p>
          </div>
          
          <div className="footer-element flex flex-col gap-4 w-full md:w-auto">
            <a href="mailto:contact@example.com" className="bg-white text-[#0a2540] px-8 py-4 rounded-full font-bold text-center hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <FaEnvelope /> Open Protocol
            </a>
          </div>
        </div>

        {/* Traditional Footer Links */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 border-t border-[#1a365d] pt-12">
          
          {/* Brand/Logo Area */}
          <div className="footer-element flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-stripe-blurple to-[#ff4db8] flex items-center justify-center text-white font-bold text-sm shadow-sm mb-4">
              NV
            </div>
            <span className="text-white font-bold text-lg mb-2">Nikunj Variya</span>
            <span className="text-[#adbdcc] font-mono text-xs">Systems Architect // Full-Stack</span>
          </div>

          {/* Nav Links */}
          <div className="footer-element flex flex-col items-center md:items-start text-center md:text-left gap-3 text-sm font-medium">
            <span className="text-white font-bold mb-1">Architecture</span>
            <a href="#work" className="text-[#adbdcc] hover:text-stripe-blurple transition-colors">Deployed Systems</a>
            <a href="#skills" className="text-[#adbdcc] hover:text-stripe-blurple transition-colors">Tech Stack</a>
            <a href="#about" className="text-[#adbdcc] hover:text-stripe-blurple transition-colors">Engineering Profile</a>
          </div>

          {/* Socials */}
          <div className="footer-element flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <span className="text-white font-bold mb-1 text-sm">Network</span>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center text-white hover:bg-stripe-blurple hover:-translate-y-1 transition-all">
                <FaGithub size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center text-white hover:bg-[#0077b5] hover:-translate-y-1 transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-element w-full flex flex-col md:flex-row justify-between items-center border-t border-[#1a365d] mt-12 pt-8 text-[#adbdcc] font-mono text-[10px]">
          <span>© {new Date().getFullYear()} NIKUNJ VARIYA. ALL RIGHTS RESERVED.</span>
          <span className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            SYSTEM_ONLINE
          </span>
        </div>

      </div>
    </footer>
  );
}
