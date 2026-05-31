"use client";

import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section className="bg-white py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20">
          <div className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Featured Work
          </div>

          <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Engineering focused
            <br />
            digital products.
          </h2>
        </div>

        <motion.div
          whileHover={{
            y: -8,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            overflow-hidden
            rounded-[48px]
            border
            border-black/10
            bg-[#f7f6f2]
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Left */}

            <div className="p-10 md:p-16">
              <div className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-400">
                Case Study 01
              </div>

              <h3 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
                DSA Tracker
              </h3>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
                A platform for tracking coding progress,
                identifying weak patterns and visualizing
                long-term interview preparation.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Analytics",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-black/10
                      px-4
                      py-2
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="mt-10 text-lg font-semibold">
                View Case Study →
              </button>
            </div>

            {/* Right */}

            <div className="relative min-h-[500px] border-l border-black/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-end gap-4">
                  {[60, 120, 80, 180, 100, 150].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          height: [
                            50,
                            height,
                            50,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.1,
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
