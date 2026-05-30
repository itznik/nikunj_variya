"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { projects } from "@/data/projects";

import AlgorithmVisualizerGraphic from "@/components/projects/AlgorithmVisualizerGraphic";
import CmsGraphic from "@/components/projects/CmsGraphic";
import SystemDesignGraphic from "@/components/projects/SystemDesignGraphic";

const graphics = [
  <AlgorithmVisualizerGraphic key="algo" />,
  <CmsGraphic key="cms" />,
  <SystemDesignGraphic key="system" />,
];

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-white py-40"
    >
      <Container>
        <SectionHeading
          label="Selected Work"
          title="Solving meaningful problems through software."
          description="Projects focused on engineering, problem solving and building practical digital experiences."
        />

        <div className="space-y-48">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                }}
                className={`
                  grid
                  gap-16
                  lg:grid-cols-2
                  lg:items-center
                `}
              >
                {/* VISUAL */}

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`
                    ${
                      reverse
                        ? "lg:order-2"
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      group
                      aspect-[4/3]
                      overflow-hidden
                      rounded-[40px]
                      border
                      border-black/10
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:shadow-xl
                    "
                  >
                    {graphics[index]}
                  </div>
                </motion.div>

                {/* CONTENT */}

                <div>
                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-zinc-500
                    "
                  >
                    Project {project.id}
                  </span>

                  <h3
                    className="
                      mt-4
                      text-4xl
                      font-bold
                      tracking-tight
                      text-zinc-950
                      md:text-5xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p className="mt-3 text-zinc-500">
                    {project.category}
                  </p>

                  <p
                    className="
                      mt-8
                      text-lg
                      leading-relaxed
                      text-zinc-600
                    "
                  >
                    {project.description}
                  </p>

                  <div className="mt-10 space-y-8">
                    <InfoBlock
                      title="Challenge"
                      content={project.challenge}
                    />

                    <InfoBlock
                      title="Solution"
                      content={project.solution}
                    />

                    <InfoBlock
                      title="Impact"
                      content={project.impact}
                    />
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-zinc-100
                          px-4
                          py-2
                          text-sm
                          text-zinc-700
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function InfoBlock({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <p className="font-semibold text-zinc-950">
        {title}
      </p>

      <p className="mt-2 leading-relaxed text-zinc-600">
        {content}
      </p>
    </div>
  );
}
