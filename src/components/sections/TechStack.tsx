import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

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
      "Building modern, responsive and performant user experiences.",
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
      "Creating APIs, databases and scalable application logic.",
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
      "Strong focus on fundamentals, tooling and problem solving.",
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
          description="Focused on engineering fundamentals, modern web technologies and scalable application development."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-[40px]
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <h3 className="text-3xl font-bold text-zinc-950">
                {category.title}
              </h3>

              <p className="mt-4 text-zinc-600 leading-relaxed">
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
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
