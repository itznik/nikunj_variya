"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="pt-40 pb-32">
      <Container>
        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Nikunj Variya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mt-6
              font-heading
              text-[4rem]
              leading-[0.9]
              font-bold
              tracking-[-0.07em]
              text-zinc-950
              sm:text-[5rem]
              lg:text-[8rem]
            "
          >
            Software Engineer
            <br />
            & Problem Solver
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="
              mt-10
              max-w-2xl
              text-xl
              leading-relaxed
              text-zinc-600
            "
          >
            Building software through algorithms,
            systems thinking and relentless curiosity.
            Focused on creating scalable, efficient and
            meaningful digital experiences.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="
                rounded-2xl
                bg-zinc-950
                px-6
                py-3
                text-white
              "
            >
              Resume
            </a>

            <a
              href="https://github.com"
              className="
                rounded-2xl
                border
                border-black/10
                bg-white
                px-6
                py-3
              "
            >
              GitHub
            </a>
          </div>

          <div className="mt-24 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-black/10 bg-white p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Learning
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                System Design
              </h3>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Building
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Full Stack Apps
              </h3>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Solving
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                DSA Problems
              </h3>
            </div>
          </div>

          <div className="mt-16 border-t border-black/10 pt-10">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-5xl font-bold">
                  250+
                </p>

                <p className="mt-2 text-zinc-500">
                  Problems Solved
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">
                  15+
                </p>

                <p className="mt-2 text-zinc-500">
                  Projects Built
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">
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
