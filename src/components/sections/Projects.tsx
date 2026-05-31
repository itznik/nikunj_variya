"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "DSA Tracker",
    description:
      "Track coding patterns, weaknesses and interview preparation through analytics and structured learning.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    number: "02",
    title: "Portfolio CMS",
    description:
      "Content management system for updating portfolio content without touching code.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    number: "03",
    title: "System Design Explorer",
    description:
      "Interactive learning platform for distributed systems and scalable architecture.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
  },
];

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex items-end gap-3">
          {[50, 90, 70, 140, 80, 120, 180].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [40, h, 40] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-5 rounded-full bg-black"
            />
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-[320px] rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-6 h-10 rounded-xl bg-black" />
          <div className="space-y-3">
            <div className="h-3 rounded bg-neutral-200" />
            <div className="h-3 w-4/5 rounded bg-neutral-200" />
            <div className="h-3 w-3/5 rounded bg-neutral-200" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="h-24 rounded-xl bg-neutral-100" />
            <div className="h-24 rounded-xl bg-neutral-100" />
          </div>

          <div className="mt-4 h-12 rounded-xl bg-neutral-100" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex items-center gap-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white">
          Client
        </div>

        <div className="h-px w-12 bg-neutral-300" />

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white">
          API
        </div>

        <div className="h-px w-12 bg-neutral-300" />

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-black text-white">
          DB
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#f5f4ef] py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Selected Work
          </p>

          <h2 className="max-w-4xl text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">
            Solving meaningful
            <br />
            problems through
            <br />
            software.
          </h2>
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[220px_1fr]">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="mb-8 text-xs uppercase tracking-[0.4em] text-neutral-400">
                Projects
              </div>

              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.number}>
                    <div className="text-sm text-neutral-400">
                      {project.number}
                    </div>

                    <div className="font-semibold">{project.title}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 h-[2px] w-full overflow-hidden rounded bg-neutral-200">
                <motion.div
                  style={{ width: progress }}
                  className="h-full bg-black"
                />
              </div>
            </div>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.number}>
                <div className="mb-10 overflow-hidden rounded-[40px] border border-[#e7e4dd] bg-[#efede8]">
                  <div className="h-[420px]">
                    <ProjectVisual index={index} />
                  </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
                  <div>
                    <div className="text-xs tracking-[0.4em] text-neutral-400">
                      PROJECT {project.number}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-600">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-neutral-300 px-4 py-2 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="mt-10 text-lg font-semibold">
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
