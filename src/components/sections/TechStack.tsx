"use client";

import SkillCloud from "@/components/visuals/SkillCloud";

export default function TechStack() {
  return (
    <section
      id="capabilities"
      className="overflow-hidden bg-black py-40 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <div className="mb-4 text-xs uppercase tracking-[0.5em] text-white/40">
            Capabilities
          </div>

          <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Technologies,
            <br />
            systems &
            <br />
            engineering.
          </h2>
        </div>

        <SkillCloud />

        <div className="mt-32 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-3">
          <div>
            <div className="mb-4 text-6xl font-black text-white/15">
              01
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Frontend
            </h3>

            <p className="leading-relaxed text-white/60">
              Modern interfaces, performance and accessibility.
            </p>
          </div>

          <div>
            <div className="mb-4 text-6xl font-black text-white/15">
              02
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Backend
            </h3>

            <p className="leading-relaxed text-white/60">
              APIs, databases and scalable application logic.
            </p>
          </div>

          <div>
            <div className="mb-4 text-6xl font-black text-white/15">
              03
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Engineering
            </h3>

            <p className="leading-relaxed text-white/60">
              Algorithms, system design and software architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
