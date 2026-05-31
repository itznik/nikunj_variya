import AlgorithmVisual from "@/components/visuals/AlgorithmVisual";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-6 text-xs uppercase tracking-[0.5em] text-neutral-500">
          Software Engineer • DSA • System Design
        </div>

        <h1
          className="
            max-w-6xl
            text-[4.5rem]
            font-black
            leading-[0.9]
            tracking-[-0.08em]
            md:text-[8rem]
            lg:text-[10rem]
          "
        >
          Building
          <br />
          software that
          <br />
          solves problems.
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="max-w-2xl text-xl leading-relaxed text-neutral-600">
              BHMS student turned software engineer.
              Focused on algorithms, full stack development,
              scalable systems and continuous learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  rounded-full
                  bg-black
                  px-8
                  py-4
                  text-white
                "
              >
                View Work
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-black/10
                  px-8
                  py-4
                "
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <AlgorithmVisual />
          </div>
        </div>

        <div className="mt-24 border-t border-black/10 pt-10">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-black md:text-6xl">
                250+
              </div>

              <div className="mt-2 text-sm text-neutral-500">
                Problems Solved
              </div>
            </div>

            <div>
              <div className="text-4xl font-black md:text-6xl">
                15+
              </div>

              <div className="mt-2 text-sm text-neutral-500">
                Projects
              </div>
            </div>

            <div>
              <div className="text-4xl font-black md:text-6xl">
                3+
              </div>

              <div className="mt-2 text-sm text-neutral-500">
                Years Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
