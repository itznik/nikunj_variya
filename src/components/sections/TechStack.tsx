import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

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
      className="bg-[#efede7] py-32"
    >
      <Container>
        <SectionHeading
          label="Capabilities"
          title="The technologies and principles I use to build."
          description="Tools, frameworks and engineering practices that shape how I approach software development."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {stack.map((category) => (
            <div
              key={category.title}
              className="
                rounded-[32px]
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
