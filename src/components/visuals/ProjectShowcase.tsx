"use client";

import { motion } from "framer-motion";

export default function ProjectShowcase() {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className="
        overflow-hidden
        rounded-[40px]
        border
        border-[#e7e4dd]
        bg-white
      "
    >
      <div className="h-[500px] bg-gradient-to-br from-[#635bff] via-[#7b74ff] to-[#a69fff]" />

      <div className="p-10">
        <div className="text-xs uppercase tracking-[0.4em] text-neutral-400">
          Featured
        </div>

        <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">
          DSA Tracker
        </h3>

        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          Analytics platform for tracking coding progress,
          algorithm patterns and interview preparation.
        </p>
      </div>
    </motion.div>
  );
}
