export default function Journey() {
  const journey = [
    {
      year: "2024",
      title: "Started Programming",
      description:
        "Began learning programming fundamentals and web development.",
    },
    {
      year: "2025",
      title: "Focused on DSA",
      description:
        "Deep dive into problem solving, algorithms and interview preparation.",
    },
    {
      year: "2026",
      title: "Full Stack Development",
      description:
        "Building complete applications using modern frontend and backend technologies.",
    },
    {
      year: "NEXT",
      title: "Distributed Systems",
      description:
        "Exploring scalable architecture and system design.",
    },
  ];

  return (
    <section
      id="journey"
      className="bg-[#f5f4ef] py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Journey
          </p>

          <h2 className="text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">
            The path so far.
          </h2>
        </div>

        <div className="space-y-24">
          {journey.map((item) => (
            <div
              key={item.year}
              className="
                grid
                gap-8
                border-t
                border-[#e7e4dd]
                pt-12
                lg:grid-cols-[240px_1fr]
              "
            >
              <div className="text-6xl font-black tracking-[-0.05em] text-neutral-300 md:text-8xl">
                {item.year}
              </div>

              <div>
                <h3 className="text-3xl font-bold tracking-tight md:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
