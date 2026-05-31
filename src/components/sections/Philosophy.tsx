export default function Philosophy() {
  const principles = [
    {
      number: "01",
      title: "Think in Systems",
      description:
        "Every application is more than code. Understanding architecture, tradeoffs and scale matters more than memorizing frameworks.",
    },
    {
      number: "02",
      title: "Solve Before Building",
      description:
        "Technology is only useful when it solves a real problem. The goal is clarity and outcomes, not complexity.",
    },
    {
      number: "03",
      title: "Learn Continuously",
      description:
        "The best engineers stay curious. Every project becomes an opportunity to improve systems thinking and technical depth.",
    },
  ];

  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-white/50">
            Philosophy
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">
            Building software is
            <br />
            ultimately about
            <br />
            solving problems.
          </h2>
        </div>

        <div className="space-y-24">
          {principles.map((item) => (
            <div
              key={item.number}
              className="
                grid
                gap-8
                border-t
                border-white/10
                pt-10
                lg:grid-cols-[180px_1fr]
              "
            >
              <div className="text-5xl font-black text-white/20">
                {item.number}
              </div>

              <div>
                <h3 className="text-3xl font-bold md:text-5xl">
                  {item.title}
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
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
