import ParticleCloud from "@/components/ParticleCloud";
import { WebGLBoundary } from "@/components/WebGLBoundary";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center">
      {/* Robust WebGL isolation boundary */}
      <WebGLBoundary fallback={<div className="absolute inset-0 -z-10 bg-canvas" />}>
        <ParticleCloud />
      </WebGLBoundary>

      {/* Hero Content Layer */}
      <div className="max-w-2xl flex flex-col items-start gap-6 select-none">
        <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-edge rounded-full">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          <span className="font-mono text-xs text-text-sub uppercase tracking-widest">Available for Architecture Contract</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold text-text-main leading-[1.05]">
          Engineering digital <br />
          <span className="text-accent">infrastructure.</span>
        </h1>

        <p className="text-base sm:text-lg text-text-sub max-w-lg leading-relaxed font-sans font-light">
          Senior full-stack software engineer specialized in crafting raw architecture, heavy application scale, and responsive pixel systems. Driven by pure code clarity.
        </p>

        <div className="flex flex-row items-center gap-4 w-full sm:w-auto mt-2">
          <button className="w-full sm:w-auto px-6 py-3 bg-accent text-canvas font-medium rounded-lg text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150">
            Inspect Architecture
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-surface border border-edge text-text-main font-medium rounded-lg text-sm hover:bg-edge active:scale-[0.98] transition-all duration-150 font-mono">
            /contact
          </button>
        </div>
      </div>
    </div>
  );
}
