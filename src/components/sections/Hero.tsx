"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-40">
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
            Software Engineer · DSA · System Design
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mt-8
              font-heading
              font-bold
              leading-[0.82]
              tracking-[-0.08em]
              text-zinc-950
              text-[4.5rem]
              sm:text-[6rem]
              md:text-[8rem]
              lg:text-[11rem]
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
                Focused on data structures, scalable systems and
                full-stack engineering. I enjoy transforming
                complexity into clarity.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-10">
              <Metric
                value="250+"
                label="Problems Solved"
              />

              <Metric
                value="15+"
                label="Projects Built"
              />

              <Metric
                value="3+"
                label="Years Learning"
              />
            </div>
          </div>

          <div className="mt-24 border-t border-black/10 pt-8">
            <div className="flex flex-wrap items-center gap-8 text-sm text-zinc-500">
              <a
                href="/resume.pdf"
                className="hover:text-zinc-950"
              >
                Resume
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950"
              >
                GitHub
              </a>

              <a
                href="#contact"
                className="hover:text-zinc-950"
              >
                Contact
              </a>

              <span className="ml-auto">
                Scroll ↓
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <p
        className="
          text-5xl
          font-bold
          tracking-tight
          text-zinc-950
        "
      >
        {value}
      </p>

      <p className="mt-2 text-zinc-500">
        {label}
      </p>
    </div>
  );
}
