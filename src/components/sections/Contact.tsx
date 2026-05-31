export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-40 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/50">
            Contact
          </p>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
            Let's build
            <br />
            something useful.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            Interested in software engineering, product
            development, system design or simply discussing
            interesting ideas.
          </p>

          <a
            href="mailto:nikvrya@gmail.com"
            className="
              mt-16
              inline-block
              text-2xl
              font-semibold
              md:text-4xl
            "
          >
            nikvrya@gmail.com
          </a>
        </div>

        <div className="mt-24 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white/60"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white/60"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className="text-xl hover:text-white/60"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
