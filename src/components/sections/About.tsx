export default function About() {
  return (
    <section className="bg-black py-40 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-6 text-xs uppercase tracking-[0.5em] text-white/40">
          About
        </div>

        <h2 className="max-w-5xl text-5xl font-black leading-[1] tracking-[-0.06em] md:text-8xl">
          I study medicine.
          <br />
          I build software.
          <br />
          I obsess over
          <br />
          systems.
        </h2>

        <div className="mt-20 flex flex-wrap gap-4">
          {[
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "System Design",
            "Algorithms",
            "DSA",
          ].map((skill) => (
            <div
              key={skill}
              className="
                rounded-full
                border
                border-white/10
                px-5
                py-3
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
