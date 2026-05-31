"use client";

import { motion } from "framer-motion";

export default function CmsGraphic() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f8f7f4] p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#e8e5df,transparent_45%)]" />

      <motion.div
        whileHover={{
          y: -4,
        }}
        className="
          relative
          mx-auto
          max-w-md
          rounded-[24px]
          border
          border-black/10
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="h-10 rounded-xl bg-zinc-950" />

        <div className="mt-6 space-y-3">
          <div className="h-3 rounded-full bg-zinc-200" />
          <div className="h-3 w-4/5 rounded-full bg-zinc-200" />
          <div className="h-3 w-2/3 rounded-full bg-zinc-200" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="h-24 rounded-2xl bg-zinc-100" />
          <div className="h-24 rounded-2xl bg-zinc-200" />
        </div>

        <div className="mt-6 h-14 rounded-2xl bg-zinc-100" />
      </motion.div>

      <div className="absolute bottom-8 left-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          Content Workflow
        </p>
      </div>
    </div>
  );
}
