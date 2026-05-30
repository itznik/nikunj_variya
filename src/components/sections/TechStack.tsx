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
} from "react-icons/si";

import { FaLinux } from "react-icons/fa";

const categories = [
  {
    title: "Frontend",
    items: [
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind",
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        icon: SiExpress,
        name: "Express",
      },
      {
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },

  {
    title: "Engineering",
    items: [
      {
        icon: SiGit,
        name: "Git",
      },
      {
        icon: FaLinux,
        name: "Linux",
      },
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
          title="Technologies I use to design and build software."
          description="A growing toolkit focused on engineering fundamentals, modern web technologies and scalable systems."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-[32px]
                bg-white
                p-8
              "
            >
              <h3 className="text-2xl font-bold text-zinc-950">
                {category.title}
              </h3>

              <div className="mt-8 space-y-4">
                {category.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
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
                        {item.name}
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
