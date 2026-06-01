"use client";

export default function Contact() {
  return (
    <section className="w-full bg-background pt-40 pb-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <span className="text-sm font-mono tracking-widest text-muted uppercase mb-8">
          03 // Initialize Protocol
        </span>
        
        <h2 className="text-7xl md:text-9xl font-medium tracking-tighter text-white mb-12 hover:text-white/80 transition-colors cursor-pointer">
          Let's Build.
        </h2>

        <div className="flex gap-8 items-center border-t border-surfaceBorder pt-12 w-full justify-center">
          <a href="mailto:your-email@example.com" className="text-sm font-mono text-muted hover:text-white transition-colors">EMAIL</a>
          <div className="w-1 h-1 bg-surfaceBorder rounded-full" />
          <a href="#" className="text-sm font-mono text-muted hover:text-white transition-colors">GITHUB</a>
          <div className="w-1 h-1 bg-surfaceBorder rounded-full" />
          <a href="#" className="text-sm font-mono text-muted hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </div>
    </section>
  );
}
