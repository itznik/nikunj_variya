"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          pointer-events-none
          fixed
          left-[5%]
          top-[15%]
          z-0
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#635bff]/10
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="
          pointer-events-none
          fixed
          right-[10%]
          bottom-[10%]
          z-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#8c86ff]/10
          blur-[140px]
        "
      />
    </>
  );
}
