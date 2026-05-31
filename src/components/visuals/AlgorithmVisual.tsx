"use client";

import { motion } from "framer-motion";

const bars = [40, 90, 70, 140, 65, 120, 180, 100];

export default function AlgorithmVisual() {
  return (
    <div className="relative flex h-[320px] w-full items-end justify-center overflow-hidden rounded-[32px] border border-[#e7e4dd] bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8f7f4]" />

      <div className="flex items-end gap-3">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 20 }}
            animate={{ height }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 rounded-full bg-black md:w-8"
          />
        ))}
      </div>

      <div className="absolute left-6 top-6 text-xs uppercase tracking-[0.4em] text-neutral-400">
        Merge Sort Visualization
      </div>

      <div className="absolute bottom-6 right-6 text-sm text-neutral-500">
        O(n log n)
      </div>
    </div>
  );
}
