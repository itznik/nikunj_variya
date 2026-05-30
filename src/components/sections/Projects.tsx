import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

import AlgorithmVisualizerGraphic from "@/components/projects/AlgorithmVisualizerGraphic";
import CmsGraphic from "@/components/projects/CmsGraphic";
import SystemDesignGraphic from "@/components/projects/SystemDesignGraphic";

export default function Projects() {
  const graphics = [
    <AlgorithmVisualizerGraphic key="algo" />,
    <CmsGraphic key="cms" />,
    <SystemDesignGraphic key="system" />,
  ];

  return (
    <section
      id="work"
      className="bg-white py-40"
    >
      <Container>
        <SectionHeading
          label="Selected Work"
          title="Solving meaningful problems through software."
          description="A collection of projects focused on engineering, problem solving and building useful digital experiences."
        />

        <div className="space-y-40">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`
                grid gap-16 lg:grid-cols-2 lg:items-center
                ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* Content */}

              <div>
                <span className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Project {project.id}
                </span>

                <h3 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-zinc-500">
                  {project.category}
                </p>

                <p className="mt-8 text-lg leading-relaxed text-zinc-600">
                  {project.description}
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="font-semibold text-zinc-950">
                      Challenge
                    </p>

                    <p className="mt-2 leading-relaxed text-zinc-600">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-zinc-950">
                      Solution
                    </p>

                    <p className="mt-2 leading-relaxed text-zinc-600">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-zinc-950">
                      Impact
                    </p>

                    <p className="mt-2 leading-relaxed text-zinc-600">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
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

              {/* Visual */}

              <div
                className="
                  aspect-[4/3]
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-black/10
                  bg-white
                  shadow-sm
                "
              >
                {graphics[index]}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
