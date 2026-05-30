"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <Container>
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
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
                tracking-[-0.05em]
                leading-[0.92]
                text-[4rem]
                sm:text-[5rem]
                lg:text-[7rem]
                text-white
              "
            >
              Engineering
              <br />
              Systems That
              <br />
              Scale Beyond
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
                text-zinc-400
              "
            >
              I design and build performant software through data
              structures, algorithms, modern web technologies,
              and systematic problem solving.
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="
                  rounded-2xl
                  bg-white
                  px-6
                  py-3
                  font-medium
                  text-black
                  transition-transform
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
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3
                  text-white
                  transition-transform
                  hover:-translate-y-1
                "
              >
                Resume
              </a>
            </div>
          </div>

          <ProblemSolvingCard />
        </div>
      </Container>
    </section>
  );
}

function ProblemSolvingCard() {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
      "
    >
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        Problem Solving Pipeline
      </p>

      <div className="mt-10 space-y-8">
        <Step
          title="Input"
          description="Array of integers"
        />

        <Arrow />

        <Step
          title="Algorithm"
          description="Binary Search"
        />

        <Arrow />

        <Step
          title="Optimization"
          description="O(log n)"
        />

        <Arrow />

        <Step
          title="Output"
          description="Target Found"
        />
      </div>

      <div className="mt-12 border-t border-white/10 pt-6">
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

function Step({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <p className="mt-1 text-xl font-semibold text-white">
        {description}
      </p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="text-zinc-600">
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
        border
        border-white/10
        bg-white/[0.04]
        px-3
        py-1
        text-sm
        text-zinc-300
      "
    >
      {children}
    </span>
  );
}
