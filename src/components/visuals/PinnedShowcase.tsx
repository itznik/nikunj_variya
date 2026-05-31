"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function PinnedShowcase() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.9, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.4, 1, 1]
  );

  return (
    <section
      ref={ref}
      className="relative h-[250vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.div
          style={{
            scale,
            opacity,
          }}
          className="
            w-full
            max-w-6xl
            overflow-hidden
            rounded-[48px]
            border
            border-black/10
            bg-white
          "
        >
          <div className="aspect-[16/9] bg-black" />

          <div className="p-12">
            <div className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-400">
              Featured Project
            </div>

            <h2 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
              DSA Tracker
            </h2>

            <p className="mt-6 max-w-2xl text-xl text-neutral-600">
              Track coding progress, algorithm patterns,
              weaknesses and interview readiness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
