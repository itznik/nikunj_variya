export default function Philosophy() {
  return (
    <section className="bg-white py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div className="mb-6 text-xs uppercase tracking-[0.5em] text-neutral-500">
          Philosophy
        </div>

        <h2 className="max-w-5xl text-5xl font-black leading-[1] tracking-[-0.06em] md:text-8xl">
          Great software is built
          through clarity,
          consistency and
          deliberate thinking.
        </h2>

        <div className="mt-24 grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 text-black/20 text-5xl font-black">
              01
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Systems Thinking
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Understanding tradeoffs,
              architecture and scale.
            </p>
          </div>

          <div>
            <div className="mb-4 text-black/20 text-5xl font-black">
              02
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Problem Solving
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Technology exists to solve
              meaningful problems.
            </p>
          </div>

          <div>
            <div className="mb-4 text-black/20 text-5xl font-black">
              03
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Continuous Learning
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Every project is an opportunity
              to improve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
