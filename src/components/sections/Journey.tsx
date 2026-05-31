import TextReveal from "@/components/visuals/TextReveal";

const journey = [
  {
    year: "2024",
    title: "Started Programming",
    description:
      "Began learning programming fundamentals and software development.",
  },
  {
    year: "2025",
    title: "Focused on DSA",
    description:
      "Deep dive into algorithms, data structures and interview preparation.",
  },
  {
    year: "2026",
    title: "Full Stack Development",
    description:
      "Building complete applications with frontend and backend technologies.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-white py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <div className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Journey
          </div>

          <TextReveal text="The path so far." />
        </div>

        <div className="space-y-24">
          {journey.map((item) => (
            <div
              key={item.year}
              className="
                border-t
                border-black/10
                pt-10
              "
            >
              <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
                <div className="text-6xl font-black text-black/15 md:text-8xl">
                  {item.year}
                </div>

                <div>
                  <h3 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
