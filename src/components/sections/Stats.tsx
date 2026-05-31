"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      value: "250+",
      label: "Problems Solved",
    },
    {
      value: "15+",
      label: "Projects Built",
    },
    {
      value: "1000+",
      label: "Hours Learning",
    },
    {
      value: "10+",
      label: "Technologies",
    },
  ];

  return (
    <section className="bg-[#f5f4ef] py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Metrics
          </p>

          <h2 className="text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">
            Progress through
            <br />
            consistency.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                rounded-[40px]
                border
                border-[#e7e4dd]
                bg-white
                p-10
              "
            >
              <div className="text-7xl font-black tracking-[-0.06em] md:text-8xl">
                {stat.value}
              </div>

              <div className="mt-4 text-lg text-neutral-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
