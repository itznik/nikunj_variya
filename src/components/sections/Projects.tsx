import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

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
          description="A collection of projects focused on engineering, problem solving and building useful digital experiences."
        />

        <div className="space-y-40">
          {projects.map((project) => (
            <article
              key={project.id}
              className="grid gap-12 lg:grid-cols-2 lg:items-center"
            >
              <div>
                <span className="text-sm text-zinc-500">
                  PROJECT {project.id}
                </span>

                <h3 className="mt-4 text-5xl font-bold tracking-tight text-zinc-950">
                  {project.title}
                </h3>

                <p className="mt-3 text-zinc-500">
                  {project.category}
                </p>

                <p className="mt-8 text-lg leading-relaxed text-zinc-600">
                  {project.description}
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="font-semibold text-zinc-950">
                      Challenge
                    </p>

                    <p className="mt-2 text-zinc-600">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-zinc-950">
                      Solution
                    </p>

                    <p className="mt-2 text-zinc-600">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-zinc-950">
                      Impact
                    </p>

                    <p className="mt-2 text-zinc-600">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="
                  aspect-[4/3]
                  rounded-[40px]
                  bg-gradient-to-br
                  from-zinc-50
                  to-zinc-200
                "
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
