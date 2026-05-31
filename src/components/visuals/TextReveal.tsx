"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
}

export default function TextReveal({
  text,
}: TextRevealProps) {
  return (
    <div className="overflow-hidden">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.04,
            duration: 0.6,
          }}
          className="mr-3 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
