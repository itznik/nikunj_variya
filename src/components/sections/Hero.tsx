import ArchitectureGraph from "@/components/graphics/ArchitectureGraph";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F6F4EE] pt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-[0.45em] text-neutral-500">
            Software Engineer • Systems • Algorithms
          </span>
        </div>

        <h1
          className="
            max-w-6xl
            text-[4rem]
            font-black
            leading-[0.9]
            tracking-[-0.08em]
            md:text-[7rem]
            lg:text-[9rem]
          "
        >
          Building
          <br />
          systems,
          <br />
          products &
          <br />
          algorithms.
        </h1>

        <div className="mt-10 max-w-xl">
          <p className="text-xl leading-relaxed text-neutral-600">
            Focused on engineering products,
            scalable systems and solving
            meaningful problems.
          </p>
        </div>

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

        <div className="mt-24">
          <ArchitectureGraph />
        </div>
      </div>
    </section>
  );
}
