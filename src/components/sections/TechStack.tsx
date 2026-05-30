import Container from "@/components/ui/Container";

const stack = [
  {
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
    ],
  },

  {
    title: "Engineering",
    technologies: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Git",
      "Linux",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="capabilities"
      className="py-32"
    >
      <Container>
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Capabilities
          </p>

          <h2 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
            The technologies and principles I use to build.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {stack.map((category) => (
            <div
              key={category.title}
              className="
                rounded-[32px]
                border
                border-black/10
                bg-white
                p-8
                shadow-sm
              "
            >
              <h3 className="text-2xl font-bold text-zinc-950">
                {category.title}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
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
          ))}
        </div>
      </Container>
    </section>
  );
}
