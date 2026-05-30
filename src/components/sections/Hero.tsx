"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      <Container>
        <div className="max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-zinc-500
            "
          >
            Nikunj Variya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mt-6
              font-heading
              font-bold
              leading-[0.85]
              tracking-[-0.08em]
              text-zinc-950
              text-[4.5rem]
              sm:text-[6rem]
              md:text-[8rem]
              lg:text-[10rem]
            "
          >
            NIKUNJ
          </motion.h1>

          <div className="mt-12 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2
                className="
                  max-w-3xl
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-zinc-950
                  md:text-5xl
                "
              >
                Building software through algorithms,
                systems thinking and relentless curiosity.
              </h2>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-zinc-600
                "
              >
                Focused on data structures, system design and
                full-stack development. I enjoy transforming
                complex problems into simple, scalable solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
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
                  Resume
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-2xl
                    border
                    border-black/10
                    bg-white
                    px-6
                    py-3
                    text-zinc-950
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  GitHub
                </a>
              </div>
            </div>

            <div
              className="
                flex
                flex-col
                justify-end
                gap-8
                border-l
                border-black/10
                pl-8
              "
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Focus
                </p>

                <p className="mt-2 text-2xl font-semibold text-zinc-950">
                  Data Structures & Algorithms
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Learning
                </p>

                <p className="mt-2 text-2xl font-semibold text-zinc-950">
                  System Design
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Building
                </p>

                <p className="mt-2 text-2xl font-semibold text-zinc-950">
                  Full Stack Applications
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-black/10 pt-10">
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <p
                  className="
                    text-6xl
                    font-bold
                    tracking-tight
                    text-zinc-950
                  "
                >
                  250+
                </p>

                <p className="mt-2 text-zinc-500">
                  Problems Solved
                </p>
              </div>

              <div>
                <p
                  className="
                    text-6xl
                    font-bold
                    tracking-tight
                    text-zinc-950
                  "
                >
                  15+
                </p>

                <p className="mt-2 text-zinc-500">
                  Projects Built
                </p>
              </div>

              <div>
                <p
                  className="
                    text-6xl
                    font-bold
                    tracking-tight
                    text-zinc-950
                  "
                >
                  3+
                </p>

                <p className="mt-2 text-zinc-500">
                  Years Learning
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="text-sm text-zinc-500">
              Scroll to explore ↓
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
