import AlgorithmVisual from "@/components/visuals/AlgorithmVisual";
import Marquee from "@/components/visuals/Marquee";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-[0.5em] text-neutral-500">
            Software Engineer • DSA • System Design
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-[4rem] font-black leading-[0.9] tracking-[-0.06em] text-black md:text-[6rem] lg:text-[8rem]">
              NIKUNJ
            </h1>

            <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-black md:text-6xl">
              Building systems,
              <br />
              algorithms and products
              <br />
              that scale.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
              Focused on software engineering, problem solving, full-stack
              development and designing scalable digital systems.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="rounded-full bg-black px-8 py-4 text-white transition hover:scale-[1.03]">
                View Projects
              </button>

              <button className="rounded-full border border-neutral-300 bg-white px-8 py-4 text-black transition hover:bg-neutral-100">
                Resume
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#e7e4dd] pt-10">
              <div>
                <div className="text-4xl font-bold">250+</div>
                <div className="mt-2 text-sm text-neutral-500">
                  Problems Solved
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold">15+</div>
                <div className="mt-2 text-sm text-neutral-500">
                  Projects Built
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold">3+</div>
                <div className="mt-2 text-sm text-neutral-500">
                  Years Learning
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Marquee />
          </div>
          
          <div>
            <AlgorithmVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
