import Container from "@/components/ui/Container";

const timeline = [
  {
    year: "2024",
    title: "Started Programming",
    description:
      "Began learning programming fundamentals, problem solving and computer science concepts while pursuing BHMS.",
  },

  {
    year: "2025",
    title: "Focused on Data Structures & Algorithms",
    description:
      "Built a strong foundation in arrays, linked lists, trees, recursion, dynamic programming and algorithmic thinking.",
  },

  {
    year: "2026",
    title: "Full-Stack Development",
    description:
      "Started building modern web applications using Next.js, TypeScript and scalable engineering practices.",
  },

  {
    year: "Next",
    title: "Systems at Scale",
    description:
      "Expanding into system design, distributed systems and high-performance software architecture.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-32"
    >
      <Container>
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Journey
          </p>

          <h2 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
            A timeline of learning, building and continuous improvement.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[23px] top-0 h-full w-px bg-black/10" />

          <div className="space-y-16">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative pl-16"
              >
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    h-12
                    w-12
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    flex
                    items-center
                    justify-center
                    font-semibold
                    text-zinc-950
                  "
                >
                  •
                </div>

                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {item.year}
                </p>

                <h3 className="mt-2 text-3xl font-bold text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
