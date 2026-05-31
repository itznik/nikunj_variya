"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "250+",
    label: "Problems Solved",
    size: "large",
  },
  {
    value: "15+",
    label: "Projects",
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

export default function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.05,
          }}
          className={`
            rounded-[40px]
            border
            border-[#e7e4dd]
            bg-white
            p-8

            ${
              metric.size === "large"
                ? "md:col-span-2"
                : ""
            }
          `}
        >
          <div className="text-6xl font-black tracking-[-0.05em] md:text-8xl">
            {metric.value}
          </div>

          <div className="mt-4 text-neutral-500">
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
