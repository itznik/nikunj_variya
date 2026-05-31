"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    title: "Client",
    x: "50%",
    y: "15%",
  },
  {
    title: "API",
    x: "50%",
    y: "50%",
  },
  {
    title: "Database",
    x: "50%",
    y: "85%",
  },
];

export default function ArchitectureGraph() {
  return (
    <div className="relative h-[420px] w-full">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="50"
          y1="25"
          x2="50"
          y2="42"
          stroke="#635BFF"
          strokeWidth="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.line
          x1="50"
          y1="58"
          x2="50"
          y2="75"
          stroke="#00D4FF"
          strokeWidth="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </svg>

      {nodes.map((node) => (
        <motion.div
          key={node.title}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
          style={{
            top: node.y,
          }}
        >
          <div
            className="
              rounded-3xl
              border
              border-black/10
              bg-white
              px-8
              py-5
              shadow-[0_20px_50px_rgba(0,0,0,0.06)]
            "
          >
            <div className="text-sm font-medium">
              {node.title}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
