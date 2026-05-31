"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { fadeUp } from "@/animations/fadeUp";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiFramer,
} from "react-icons/si";

import { FaLinux } from "react-icons/fa";

const categories = [
  {
    title: "Frontend",
    description:
      "Building performant, accessible and responsive user experiences.",
    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
      },
    ],
  },

  {
    title: "Backend",
    description:
      "Designing APIs, application logic and scalable data layers.",
    technologies: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },

  {
    title: "Engineering",
    description:
      "Strong emphasis on problem solving, tooling and software fundamentals.",
    technologies: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "Linux",
        icon: FaLinux,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="capabilities"
      className="bg-[#efede7] py-40"
    >
      <Container>
        <SectionHeading
          label="Capabilities"
          title="Technologies I use to design and build software."
          description="A growing toolkit focused on engineering fundamentals, modern web technologies and scalable application development."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-[40px]
                bg-white
                p-8
                transition-all
              "
            >
              <h3 className="text-3xl font-bold text-zinc-950">
                {category.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-600">
                {category.description}
              </p>

              <div className="mt-8 space-y-3">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        bg-zinc-50
                        px-4
                        py-4
                      "
                    >
                      <Icon
                        size={22}
                        className="text-zinc-950"
                      />

                      <span className="font-medium text-zinc-800">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
