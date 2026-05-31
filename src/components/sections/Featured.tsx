"use client";

import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section className="bg-white py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
              Featured Work
            </p>

            <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">
              Building
              <br />
              engineering
              <br />
              products.
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-600">
              Focused on problem solving, algorithms,
              architecture and scalable web products.
            </p>
          </div>

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              relative
              overflow-hidden
              rounded-[48px]
              border
              border-black/10
              bg-[#f7f6f2]
              p-12
            "
          >
            <div className="mb-16 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                  Featured
                </div>

                <div className="mt-3 text-4xl font-black">
                  DSA Tracker
                </div>
              </div>

              <div className="text-neutral-400">
                2026
              </div>
            </div>

            <div className="flex items-end justify-center gap-5 py-12">
              {[80, 140, 100, 200, 120, 170].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      height: [
                        60,
                        height,
                        60,
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: index * 0.12,
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

            <p className="mt-12 text-neutral-600">
              Analytics platform for tracking
              coding progress and identifying
              algorithmic weaknesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
