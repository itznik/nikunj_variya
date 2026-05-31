"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const projects = [
  {
    id: "01",
    title: "DSA Tracker",
    description:
      "Track coding patterns, weaknesses and interview preparation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
  },

  {
    id: "02",
    title: "Portfolio CMS",
    description:
      "Content management system for managing portfolio content.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    id: "03",
    title: "System Design Explorer",
    description:
      "Interactive architecture and distributed systems learning platform.",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[#f5f4ef] py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Selected Work
          </p>

          <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Case studies,
            <br />
            not projects.
          </h2>
        </div>

        <div className="grid gap-20 lg:grid-cols-[320px_1fr]">
          {/* Sticky Index */}

          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="space-y-8">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="text-sm text-neutral-400">
                      {project.id}
                    </div>

                    <div className="text-xl font-semibold">
                      {project.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}

          <div className="space-y-40">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="border-t border-black/10 pt-16"
              >
                <div className="mb-8 text-sm uppercase tracking-[0.4em] text-neutral-400">
                  Project {project.id}
                </div>

                <h3 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
                  {project.title}
                </h3>

                <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600">
                  {project.description}
                </p>

                <motion.div
                  style={{ y }}
                  className="
                    mt-16
                    h-[420px]
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-black/10
                    bg-white
                  "
                >
                  <ProjectVisual index={index} />
                </motion.div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-black
                        px-5
                        py-2
                        text-sm
                        text-white
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({
  index,
}: {
  index: number;
}) {
  if (index === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex items-end gap-4">
          {[50, 90, 130, 70, 160, 120].map(
            (height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [
                    40,
                    height,
                    40,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: i * 0.1,
                }}
                className="
                  w-8
                  rounded-full
                  bg-black
                "
              />
            )
          )}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="w-[320px] rounded-[28px] border border-black/10 p-6">
          <div className="mb-6 h-10 rounded-xl bg-black" />

          <div className="space-y-3">
            <div className="h-3 rounded bg-neutral-200" />
            <div className="h-3 w-4/5 rounded bg-neutral-200" />
            <div className="h-3 w-3/5 rounded bg-neutral-200" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="h-24 rounded-xl bg-neutral-100" />
            <div className="h-24 rounded-xl bg-neutral-100" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex items-center gap-8">
        <Node label="Client" />
        <Line />
        <Node label="API" />
        <Line />
        <Node label="DB" />
      </div>
    </div>
  );
}

function Node({
  label,
}: {
  label: string;
}) {
  return (
    <div
      className="
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-[24px]
        bg-black
        text-white
      "
    >
      {label}
    </div>
  );
}

function Line() {
  return (
    <div className="h-[2px] w-16 bg-neutral-300" />
  );
}
