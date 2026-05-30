import Container from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    title: "Algorithmic Thinking",
    description:
      "I enjoy breaking complex problems into smaller, predictable systems. Whether it's DSA, optimization, or application architecture, my focus is reducing complexity without sacrificing clarity.",
  },

  {
    number: "02",
    title: "Systems Over Features",
    description:
      "Good software is more than working code. I focus on maintainability, scalability and architecture so systems continue to perform as they grow.",
  },

  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Coming from a BHMS background, every engineering concept was self-taught. Curiosity, consistency and deliberate practice drive how I approach software development.",
  },
];

export default function Philosophy() {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Philosophy
          </p>

          <h2 className="mt-4 max-w-5xl text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
            The principles that guide how I solve problems and build software.
          </h2>
        </div>

        <div className="space-y-12">
          {principles.map((item) => (
            <div
              key={item.number}
              className="
                flex
                flex-col
                gap-6
                rounded-[32px]
                border
                border-black/10
                bg-white
                p-8
                md:flex-row
                md:items-start
                md:justify-between
              "
            >
              <div className="md:w-1/4">
                <p className="text-sm text-zinc-500">
                  {item.number}
                </p>
              </div>

              <div className="md:w-3/4">
                <h3 className="text-3xl font-bold text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
