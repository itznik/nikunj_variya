"use client";

import { motion } from "framer-motion";

export default function SystemDesignGraphic() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#f8f7f4] p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#e8e5df,transparent_40%)]" />

      <div className="relative flex flex-col items-center gap-6 md:flex-row">
        <Node label="Client" />

        <Connector />

        <Node label="API" />

        <Connector />

        <Node label="Database" />
      </div>

      <div className="absolute left-8 top-8">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          System Design
        </p>
      </div>
    </div>
  );
}

function Node({
  label,
}: {
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-[24px]
        bg-zinc-950
        p-2
        text-center
        text-xs
        font-medium
        text-white
      "
    >
      {label}
    </motion.div>
  );
}

function Connector() {
  return (
    <div
      className="
        h-12
        w-[2px]
        bg-zinc-300
        md:h-[2px]
        md:w-16
      "
    />
  );
}
