import ParticleCloud from "@/components/ParticleCloud";
import { WebGLBoundary } from "@/components/WebGLBoundary";
import ProjectGrid from "@/components/ProjectGrid";
import CapabilityMatrix from "@/components/CapabilityMatrix";
import TechStack from "@/components/TechStack";
import { ArrowRight, TerminalSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col selection:bg-text-main selection:text-canvas overflow-x-hidden">
      <WebGLBoundary fallback={<div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-surface),_var(--color-canvas))] " />}>
        <ParticleCloud />
      </WebGLBoundary>

      <div className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5"></div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-12 flex flex-col relative">
        
        {/* Ambient lighting spots to break monotony */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] bg-text-main/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <header className="h-20 w-full flex items-center justify-between border-b border-edge/50">
          <span className="font-sans text-sm text-text-main font-semibold tracking-wide flex items-center gap-2">
            <TerminalSquare size={16} className="text-accent"/> NV<span className="text-text-sub">.SYS</span>
          </span>
          <span className="font-mono text-[10px] text-text-sub uppercase tracking-widest px-2 py-1 bg-surface border border-edge rounded-md">
            v1.0.0
          </span>
        </header>

        <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 border-b border-edge/50">
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="w-full">
              <h1 className="text-[clamp(2.4rem,11.5vw,7rem)] font-bold text-text-main leading-[0.95] tracking-tighter">
                SOFTWARE
                <br />
                <span className="text-text-sub">ARCHITECTURE.</span>
              </h1>
            </div>

            <div className="max-w-md flex flex-col gap-8 mt-4">
              <p className="text-sm sm:text-base text-text-sub leading-relaxed font-sans font-light">
                Engineering high-performance web applications, robust backend systems, and uncompromising UI/UX.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <button className="w-full sm:w-auto px-6 py-3.5 bg-text-main text-canvas font-semibold rounded-lg text-sm hover:scale-[0.98] transition-transform flex justify-center items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span>DEPLOY WORK</span>
                  <ArrowRight size={16} strokeWidth={2} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-edge text-text-main font-medium rounded-lg text-sm hover:bg-surface transition-colors flex justify-center items-center">
                  INITIALIZE CONTACT
                </button>
              </div>
            </div>
          </div>
        </main>

        <section className="py-24 w-full border-b border-edge/50 relative">
          <div className="flex flex-col gap-3 mb-12">
            <span className="font-mono text-xs text-accent tracking-widest uppercase flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full"></div> 01 // Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main">Tech Arsenal</h2>
          </div>
          <TechStack />
        </section>

        <section className="py-24 w-full border-b border-edge/50">
          <div className="flex flex-col gap-3 mb-12">
            <span className="font-mono text-xs text-accent tracking-widest uppercase flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full"></div> 02 // Deployments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main">System Architecture</h2>
          </div>
          <ProjectGrid />
        </section>

        <section className="py-24 w-full">
          <div className="flex flex-col gap-3 mb-16">
            <span className="font-mono text-xs text-accent tracking-widest uppercase flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full"></div> 03 // Pipeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main">Capability Matrix</h2>
          </div>
          <CapabilityMatrix />
        </section>

        <footer className="py-8 w-full flex flex-wrap gap-y-4 items-center justify-between border-t border-edge/50">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 font-mono text-[10px] sm:text-xs text-text-sub uppercase tracking-widest w-full">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
              MERN Stack
            </span>
            <span className="hidden sm:block w-1 h-1 bg-edge rounded-full"></span>
            <span>Python/SQL</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
