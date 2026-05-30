import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const timeline = [
  {
    year: "2024",
    title: "Started Programming",
    description:
      "Began learning programming fundamentals and problem solving while pursuing BHMS.",
  },
  {
    year: "2025",
    title: "Focused on DSA",
    description:
      "Built a strong foundation in algorithms, recursion, trees, dynamic programming and optimization.",
  },
  {
    year: "2026",
    title: "Full Stack Development",
    description:
      "Started building modern applications using Next.js, TypeScript and scalable engineering practices.",
  },
  {
    year: "Next",
    title: "Systems at Scale",
    description:
      "Exploring distributed systems, system design and performance engineering.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-white py-32"
    >
      <Container>
        <SectionHeading
          label="Journey"
          title="A timeline of learning, building and continuous improvement."
        />

        <div className="relative">
          <div className="absolute left-[23px] top-0 h-full w-px bg-black/10" />

          <div className="space-y-16">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-white">
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
