export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111111] py-40 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <div className="mb-6 text-xs uppercase tracking-[0.5em] text-white/40">
            Contact
          </div>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-[8rem]">
            Let's build
            <br />
            something useful.
          </h2>

          <a
            href="mailto:nikvrya@gmail.com"
            className="
              mt-12
              inline-block
              text-2xl
              font-semibold
              md:text-5xl
            "
          >
            nikvrya@gmail.com
          </a>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10">
          <div className="flex flex-wrap gap-8 text-lg">
            <a href="#">
              GitHub
            </a>

            <a href="#">
              LinkedIn
            </a>

            <a href="/resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
