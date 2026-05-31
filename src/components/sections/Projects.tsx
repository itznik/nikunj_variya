import DSAGraphic from "@/components/graphics/DSAGraphic";
import CMSGraphic from "@/components/graphics/CMSGraphic";
import SystemGraphic from "@/components/graphics/SystemGraphic";

const projects = [
  {
    id: "01",
    title: "DSA Tracker",
    description:
      "Track coding patterns, weaknesses and interview readiness.",
    graphic: <DSAGraphic />,
  },

  {
    id: "02",
    title: "Portfolio CMS",
    description:
      "Content management system for managing portfolio content.",
    graphic: <CMSGraphic />,
  },

  {
    id: "03",
    title: "System Design Explorer",
    description:
      "Interactive platform for learning scalable architectures.",
    graphic: <SystemGraphic />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <div className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Work
          </div>

          <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Selected
            <br />
            projects.
          </h2>
        </div>

        <div className="space-y-40">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-t border-black/10 pt-16"
            >
              <div className="mb-4 text-black/30 text-2xl font-black">
                {project.id}
              </div>

              <h3 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">
                {project.title}
              </h3>

              <p className="mt-6 max-w-xl text-lg text-neutral-600">
                {project.description}
              </p>

              <div className="mt-12">
                {project.graphic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
