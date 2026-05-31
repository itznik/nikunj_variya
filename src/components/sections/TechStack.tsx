"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
  "Framer Motion",
  "Git",
  "Linux",
  "REST APIs",
  "System Design",
  "DSA",
  "OOP",
  "Algorithms",
];

export default function TechStack() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/50">
            Capabilities
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">
            Technologies,
            <br />
            engineering principles
            <br />
            and problem solving.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative flex flex-wrap justify-center gap-5 py-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.03,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-4
                  text-sm
                  font-medium
                  backdrop-blur
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-10 border-t border-white/10 pt-16 md:grid-cols-3">
          <div>
            <div className="mb-2 text-5xl font-black">01</div>

            <h3 className="mb-3 text-xl font-semibold">
              Frontend
            </h3>

            <p className="leading-relaxed text-white/60">
              Building responsive and interactive user experiences
              with modern web technologies.
            </p>
          </div>

          <div>
            <div className="mb-2 text-5xl font-black">02</div>

            <h3 className="mb-3 text-xl font-semibold">
              Backend
            </h3>

            <p className="leading-relaxed text-white/60">
              Designing APIs, databases and scalable application
              architecture.
            </p>
          </div>

          <div>
            <div className="mb-2 text-5xl font-black">03</div>

            <h3 className="mb-3 text-xl font-semibold">
              Engineering
            </h3>

            <p className="leading-relaxed text-white/60">
              Strong focus on algorithms, problem solving and system
              design fundamentals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
