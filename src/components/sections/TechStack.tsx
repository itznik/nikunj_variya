"use client";

import SkillCloud from "@/components/visuals/SkillCloud";

export default function TechStack() {
  return (
    <section
      id="capabilities"
      className="bg-black text-white py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/40">
            Capabilities
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Tools change.
            <br />
            Problem solving
            <br />
            remains.
          </h2>
        </div>

        <SkillCloud />
      </div>
    </section>
  );
}
