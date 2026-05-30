"use client";

const projects = [
  {
    title: "Helpio",
    description: "A gamified, full-stack wishlist and donor fulfillment platform featuring real-time verification systems and user leaderboards.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    link: "#",
    featured: true,
  },
  {
    title: "Sillage",
    description: "High-performance e-commerce architecture for luxury fragrances, focusing on visually driven sales logic and minimal load times.",
    stack: ["React", "Node.js", "Express", "Stripe"],
    link: "#",
    featured: false,
  },
  {
    title: "Gotrip",
    description: "Scalable tourism web application integrated with interactive world map mapping and administrative content management.",
    stack: ["Next.js", "MongoDB", "Framer Motion"],
    link: "#",
    featured: false,
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          className={`group flex flex-col justify-between p-8 bg-surface border border-edge rounded-2xl transition-colors hover:border-text-sub/40 ${
            project.featured ? "md:col-span-2 md:flex-row md:items-end" : ""
          }`}
        >
          <div className={`flex flex-col gap-4 ${project.featured ? "md:max-w-xl" : ""}`}>
            <h3 className="text-2xl font-semibold text-text-main tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-text-sub leading-relaxed font-light">
              {project.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-canvas border border-edge rounded-full font-mono text-[10px] text-text-main uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`mt-8 ${project.featured ? "md:mt-0" : ""}`}>
            <div className="w-10 h-10 rounded-full border border-edge flex items-center justify-center bg-canvas group-hover:bg-text-main group-hover:text-canvas transition-colors">
              <span className="font-mono text-lg font-light leading-none -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                &rarr;
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
