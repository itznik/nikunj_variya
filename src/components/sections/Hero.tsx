"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="pt-40 pb-24">
      <Container>
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-zinc-600">
              Software Engineer • DSA • System Design
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
              tracking-[-0.07em]
              text-zinc-950
              leading-[0.92]
              text-[3.5rem]
              sm:text-[5rem]
              lg:text-[7rem]
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
            transition={{ delay: 0.15 }}
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-600
            "
          >
            I build performant software through data structures,
            algorithms, system design and modern web technologies.
            My focus is creating reliable digital experiences that
            are efficient, scalable and thoughtfully engineered.
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
                duration-300
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
                text-zinc-950
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Resume
            </a>
          </div>

          <div className="mt-20 border-t border-black/10 pt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-5xl font-bold tracking-tight text-zinc-950">
                  250+
                </p>

                <p className="mt-2 text-zinc-500">
                  Problems Solved
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold tracking-tight text-zinc-950">
                  15+
                </p>

                <p className="mt-2 text-zinc-500">
                  Projects Built
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold tracking-tight text-zinc-950">
                  3+
                </p>

                <p className="mt-2 text-zinc-500">
                  Years Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
