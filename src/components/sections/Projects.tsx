import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="work"
      className="py-32"
    >
      <Container>
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
            Projects that reflect how I think, build and solve.
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`
                grid gap-12 lg:grid-cols-2 lg:items-center
                ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              <div>
                <span className="text-sm text-zinc-500">
                  PROJECT {project.id}
                </span>

                <h3 className="mt-4 text-4xl font-bold text-zinc-950 md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <span className="text-zinc-500">
                    {project.year}
                  </span>

                  <a
                    href={project.link}
                    className="font-medium text-zinc-950"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              <div
                className="
                  aspect-[4/3]
                  rounded-[32px]
                  border
                  border-black/10
                  bg-white
                  shadow-sm
                "
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
