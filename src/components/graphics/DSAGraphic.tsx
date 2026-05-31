"use client";

import { motion } from "framer-motion";

const bars = [60, 140, 90, 180, 110, 220, 150];

export default function DSAGraphic() {
  return (
    <div className="flex h-[320px] items-end justify-center gap-4">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          animate={{
            height: [50, height, 50],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
          }}
          className="
            w-8
            rounded-full
            bg-[#635BFF]
          "
        />
      ))}
    </div>
  );
}
