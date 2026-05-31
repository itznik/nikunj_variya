"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind",
  "Framer Motion",
  "System Design",
  "DSA",
  "Algorithms",
  "Linux",
  "Git",
  "REST APIs",
  "OOP",
  "Problem Solving",
];

export default function SkillCloud() {
  return (
    <div className="relative flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.04,
          }}
          whileHover={{
            y: -8,
            scale: 1.08,
          }}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-6
            py-4
            text-sm
            font-medium
            backdrop-blur-xl
          "
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}
