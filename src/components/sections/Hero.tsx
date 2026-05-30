"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="pt-40 pb-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-zinc-600">
                Engineering • Algorithms • Product Thinking
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mt-8
                font-heading
                font-bold
                tracking-[-0.06em]
                text-zinc-950
                leading-[0.95]
                text-[3.5rem]
                sm:text-[4.5rem]
                lg:text-[6.5rem]
              "
            >
              Engineering Systems
              <br />
              That Scale Beyond
              <br />
              Code.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-zinc-600
              "
            >
              I build performant software through data structures,
              algorithms, system design, and modern web technologies.
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="
                  rounded-2xl
                  bg-zinc-950
                  px-6
                  py-3
                  text-white
                  transition-all
                  hover:-translate-y-1
                "
              >
                View Work
              </a>

              <a
                href="/resume.pdf"
                className="
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  px-6
                  py-3
                  text-zinc-900
                  transition-all
                  hover:-translate-y-1
                "
              >
                Resume
              </a>
            </div>
          </div>

          <PipelineCard />
        </div>
      </Container>
    </section>
  );
}

function PipelineCard() {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-black/10
        bg-white
        p-8
        shadow-sm
      "
    >
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
        Problem Solving Pipeline
      </p>

      <div className="mt-10 space-y-8">
        <PipelineStep
          title="Input"
          value="Array of Integers"
        />

        <Arrow />

        <PipelineStep
          title="Algorithm"
          value="Binary Search"
        />

        <Arrow />

        <PipelineStep
          title="Optimization"
          value="O(log n)"
        />

        <Arrow />

        <PipelineStep
          title="Output"
          value="Target Found"
        />
      </div>

      <div className="mt-12 border-t border-black/10 pt-6">
        <p className="text-sm text-zinc-500">
          Current Focus
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Tag>DSA</Tag>
          <Tag>System Design</Tag>
          <Tag>Next.js</Tag>
        </div>
      </div>
    </div>
  );
}

function PipelineStep({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <p className="mt-1 text-xl font-semibold text-zinc-950">
        {value}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-zinc-400 text-lg">
      ↓
    </div>
  );
}

function Tag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        rounded-full
        bg-zinc-100
        px-3
        py-1
        text-sm
        text-zinc-700
      "
    >
      {children}
    </span>
  );
}
