"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        h-[70vh]
        overflow-hidden
        bg-black
      "
    >
      <motion.div
        style={{ y }}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <h2
          className="
            text-center
            text-[5rem]
            font-black
            tracking-[-0.08em]
            text-white
            md:text-[10rem]
          "
        >
          ENGINEERING
        </h2>
      </motion.div>
    </section>
  );
}
