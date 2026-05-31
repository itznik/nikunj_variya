"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function HorizontalReveal() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-25%"]
  );

  return (
    <div className="overflow-hidden py-32">
      <motion.div
        style={{ x }}
        className="
          flex
          min-w-max
          gap-16
          text-[5rem]
          font-black
          tracking-[-0.06em]
          md:text-[10rem]
        "
      >
        <span>ALGORITHMS</span>
        <span>•</span>
        <span>SYSTEMS</span>
        <span>•</span>
        <span>FULL STACK</span>
        <span>•</span>
        <span>ENGINEERING</span>
      </motion.div>
    </div>
  );
}
