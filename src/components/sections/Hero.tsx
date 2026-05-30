"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* LEFT */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-neutral-600">
                Engineering • Algorithms • Product Thinking
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                font-heading
                text-[3.6rem]
                leading-[0.95]
                font-bold
                tracking-[-0.04em]
                sm:text-[5rem]
                lg:text-[7rem]
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
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
              className="
                mt-10
                max-w-xl
                text-lg
                leading-relaxed
                text-neutral-600
              "
            >
              I design and build performant software through
              data structures, algorithms, modern web technologies,
              and systematic problem solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.35,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="
                  rounded-2xl
                  bg-black
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
                  transition-all
                  hover:-translate-y-1
                "
              >
                Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-black/5
                bg-white
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.05)]
              "
            >
              <AlgorithmVisualization />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function AlgorithmVisualization() {
  return (
    <div className="relative aspect-square">
      <svg
        viewBox="0 0 600 600"
        className="h-full w-full"
      >
        <line
          x1="120"
          y1="120"
          x2="300"
          y2="180"
          stroke="#D1D5DB"
          strokeWidth="2"
        />

        <line
          x1="300"
          y1="180"
          x2="470"
          y2="100"
          stroke="#D1D5DB"
          strokeWidth="2"
        />

        <line
          x1="300"
          y1="180"
          x2="420"
          y2="350"
          stroke="#D1D5DB"
          strokeWidth="2"
        />

        <line
          x1="120"
          y1="120"
          x2="160"
          y2="320"
          stroke="#D1D5DB"
          strokeWidth="2"
        />

        {[
          [120, 120],
          [300, 180],
          [470, 100],
          [420, 350],
          [160, 320],
          [260, 450],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="16"
              fill="#6D5DF6"
            />

            <circle
              cx={x}
              cy={y}
              r="30"
              fill="none"
              stroke="#EDEAFE"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>

      <div className="absolute bottom-6 left-6">
        <p className="text-sm text-neutral-500">
          Current Focus
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#edeafe] px-3 py-1 text-sm">
            DSA
          </span>

          <span className="rounded-full bg-[#edeafe] px-3 py-1 text-sm">
            System Design
          </span>

          <span className="rounded-full bg-[#edeafe] px-3 py-1 text-sm">
            Next.js
          </span>
        </div>
      </div>
    </div>
  );
}
