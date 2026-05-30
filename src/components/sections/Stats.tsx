import Container from "@/components/ui/Container";

const stats = [
  {
    value: "250+",
    label: "Problems Solved",
  },

  {
    value: "15+",
    label: "Projects Built",
  },

  {
    value: "1000+",
    label: "Hours Learning",
  },

  {
    value: "10+",
    label: "Technologies",
  },
];

export default function Stats() {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Problem Solving
          </p>

          <h2 className="mt-4 max-w-5xl text-5xl font-bold tracking-tight text-zinc-950 md:text-7xl">
            Progress measured through consistency, curiosity and practice.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-[32px]
                border
                border-black/10
                bg-white
                p-8
              "
            >
              <p className="text-6xl font-bold tracking-tight text-zinc-950">
                {stat.value}
              </p>

              <p className="mt-4 text-lg text-zinc-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-8
            rounded-[32px]
            border
            border-black/10
            bg-white
            p-10
          "
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Current Focus
              </p>

              <h3 className="mt-4 text-3xl font-bold text-zinc-950">
                Data Structures & Algorithms
              </h3>

              <p className="mt-4 text-zinc-600 leading-relaxed">
                Strengthening problem-solving ability through
                deliberate practice, optimization and deeper
                understanding of algorithmic patterns.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Learning
              </p>

              <h3 className="mt-4 text-3xl font-bold text-zinc-950">
                System Design
              </h3>

              <p className="mt-4 text-zinc-600 leading-relaxed">
                Studying scalable architecture, distributed systems,
                caching strategies and performance optimization.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Building
              </p>

              <h3 className="mt-4 text-3xl font-bold text-zinc-950">
                Full Stack Products
              </h3>

              <p className="mt-4 text-zinc-600 leading-relaxed">
                Developing modern applications using Next.js,
                TypeScript and production-oriented engineering
                practices.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
