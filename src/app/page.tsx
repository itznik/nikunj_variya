import ParticleCloud from "@/components/ParticleCloud";
import { WebGLBoundary } from "@/components/WebGLBoundary";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Layer */}
      <WebGLBoundary fallback={<div className="fixed inset-0 -z-10 bg-canvas" />}>
        <ParticleCloud />
      </WebGLBoundary>

      {/* Structural Grid Overlay - Creates that premium Stripe/Vercel architectural feel */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(to_right,var(--color-edge)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-edge)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 mask-image-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      {/* Main Content Constraint */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between border-x border-edge">
        
        {/* Top Navbar Space (Structural placeholder) */}
        <header className="h-24 w-full flex items-center justify-between border-b border-edge">
          <span className="font-mono text-sm text-text-main font-bold tracking-widest">NV.SYS</span>
          <span className="font-mono text-xs text-text-sub uppercase tracking-widest">v1.0.0</span>
        </header>

        {/* Hero Section - Asymmetric layout for high visual hierarchy */}
        <main className="flex-1 flex flex-col justify-center py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            
            {/* Left Column: Massive Typography */}
            <div className="max-w-3xl">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold text-text-main leading-[0.9] tracking-tighter">
                SOFTWARE
                <br />
                <span className="text-text-sub">ARCHITECTURE.</span>
              </h1>
            </div>

            {/* Right Column: High-contrast metadata */}
            <div className="max-w-xs flex flex-col gap-6 md:pb-3">
              <p className="text-base text-text-sub leading-relaxed font-sans">
                Engineering high-performance web applications, robust backend systems, and uncompromising UI/UX.
              </p>
              
              <div className="flex flex-col gap-3">
                <button className="w-full px-6 py-3.5 bg-accent text-canvas font-bold rounded-none text-sm hover:opacity-90 transition-opacity flex justify-between items-center">
                  <span>DEPLOY WORK</span>
                  <span className="font-mono text-xs opacity-70">-></span>
                </button>
                <button className="w-full px-6 py-3.5 bg-surface border border-edge text-text-main font-medium rounded-none text-sm hover:bg-edge transition-colors font-mono uppercase tracking-wider">
                  Initialize Contact
                </button>
              </div>
            </div>

          </div>
        </main>

        {/* Bottom Metadata Bar - Anchors the design */}
        <footer className="h-16 w-full flex items-center justify-between border-t border-edge overflow-hidden">
          <div className="flex items-center gap-8 font-mono text-xs text-text-sub uppercase tracking-widest w-full">
            <span className="shrink-0 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent"></div>
              Next.js Ecosystem
            </span>
            <span className="shrink-0">TypeScript Strict</span>
            <span className="shrink-0">Database Architecture</span>
            <span className="shrink-0 hidden md:inline-block">High-Performance WebGL</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
