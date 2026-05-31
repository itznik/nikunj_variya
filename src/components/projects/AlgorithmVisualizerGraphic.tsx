"use client";

import { motion } from "framer-motion";

const bars = [60, 120, 90, 180, 80, 140, 220, 110];

export default function AlgorithmVisualizerGraphic() {
  return (
    <div className="relative flex h-full items-end justify-center gap-3 overflow-hidden bg-[#f8f7f4] p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e8e5df,transparent_40%)]" />

      {bars.map((height, index) => (
        <motion.div
          key={index}
          initial={{
            height: height * 0.5,
          }}
          animate={{
            height,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.08,
          }}
          className="
            relative
            w-8
            rounded-t-[16px]
            bg-zinc-950
          "
        />
      ))}

      <div className="absolute left-8 top-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Merge Sort
        </p>
      </div>
    </div>
  );
}
