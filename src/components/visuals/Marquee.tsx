"use client";

import { motion } from "framer-motion";

const items = [
  "Algorithms",
  "System Design",
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Full Stack",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-black/10 py-8">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          flex
          min-w-max
          gap-12
          text-3xl
          font-black
          tracking-tight
        "
      >
        {[...items, ...items, ...items].map(
          (item, index) => (
            <span key={index}>{item}</span>
          )
        )}
      </motion.div>
    </div>
  );
}
