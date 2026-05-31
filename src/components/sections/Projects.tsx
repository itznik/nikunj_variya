"use client";

const projects = [
  {
    id: "01",
    title: "DSA Tracker",
    description:
      "Track coding patterns, weaknesses and interview readiness.",
  },

  {
    id: "02",
    title: "Portfolio CMS",
    description:
      "Content management system for portfolio updates.",
  },

  {
    id: "03",
    title: "System Design Explorer",
    description:
      "Interactive platform for learning scalable architectures.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f5f4ef] py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Case Studies
          </p>

          <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Selected
            <br />
            projects.
          </h2>
        </div>

        <div>
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                border-t
                border-black/10
                py-14
              "
            >
              <div className="grid gap-8 lg:grid-cols-[180px_1fr_auto] lg:items-center">
                <div className="text-black/30 text-3xl font-black">
                  {project.id}
                </div>

                <div>
                  <h3 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-neutral-600">
                    {project.description}
                  </p>
                </div>

                <button
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  View →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
