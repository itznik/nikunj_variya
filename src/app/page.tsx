import ParticleCloud from "@/components/ParticleCloud";
import { WebGLBoundary } from "@/components/WebGLBoundary";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col selection:bg-text-main selection:text-canvas">
      {/* Background Layer with subtle fallback gradient in case WebGL is blocked by Codespaces on mobile */}
      <WebGLBoundary fallback={<div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-surface),_var(--color-canvas))] " />}>
        <ParticleCloud />
      </WebGLBoundary>

      {/* Ghost Grid - Opacity dropped to 5% so it's barely there */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5 mask-image-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      {/* Main Content Constraint - Added more padding for mobile breathing room */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-5 sm:px-12 flex flex-col justify-between">
        
        {/* Top Navbar */}
        <header className="h-20 w-full flex items-center justify-between border-b border-edge/50">
          <span className="font-sans text-sm text-text-main font-semibold tracking-wide">NV<span className="text-text-sub">.SYS</span></span>
          <span className="font-mono text-[10px] text-text-sub uppercase tracking-widest px-2 py-1 bg-surface border border-edge rounded-md">
            v1.0.0
          </span>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center py-12">
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Left Column: Scaled Typography */}
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-text-main leading-[1.1] tracking-tight">
                SOFTWARE
                <br />
                <span className="text-text-sub">ARCHITECTURE.</span>
              </h1>
            </div>

            {/* Right Column: High-contrast metadata */}
            <div className="max-w-md flex flex-col gap-8">
              <p className="text-sm sm:text-base text-text-sub leading-relaxed font-sans font-light">
                Engineering high-performance web applications, robust backend systems, and uncompromising UI/UX.
              </p>
              
              {/* Refined Buttons - No more giant red blocks */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <button className="w-full sm:w-auto px-6 py-3.5 bg-text-main text-canvas font-semibold rounded-lg text-sm hover:scale-[0.98] transition-transform flex justify-center items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span>DEPLOY WORK</span>
                  <span className="font-mono text-xs opacity-70 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
                <button className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-edge text-text-main font-medium rounded-lg text-sm hover:bg-surface transition-colors flex justify-center items-center">
                  INITIALIZE CONTACT
                </button>
              </div>
            </div>

          </div>
        </main>

        {/* Bottom Metadata Bar - Fixed Overflow & Wrapping */}
        <footer className="py-6 w-full flex flex-wrap gap-y-4 items-center justify-between border-t border-edge/50 overflow-hidden">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 font-mono text-[10px] sm:text-xs text-text-sub uppercase tracking-widest w-full">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
              Next.js
            </span>
            <span className="hidden sm:block w-1 h-1 bg-edge rounded-full"></span>
            <span>TypeScript</span>
            <span className="hidden sm:block w-1 h-1 bg-edge rounded-full"></span>
            <span>DB Architecture</span>
            <span className="hidden sm:block w-1 h-1 bg-edge rounded-full"></span>
            <span>WebGL</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
