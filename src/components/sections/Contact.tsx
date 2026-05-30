import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-40"
    >
      <Container>
        <div className="border-t border-black/10 pt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2
            className="
              mt-6
              font-heading
              text-[4rem]
              leading-[0.9]
              font-bold
              tracking-[-0.06em]
              text-zinc-950
              md:text-[6rem]
              lg:text-[8rem]
            "
          >
            Let's Build
            <br />
            Something Useful.
          </h2>

          <p className="mt-10 max-w-xl text-xl leading-relaxed text-zinc-600">
            I'm always interested in learning, collaborating and
            discussing engineering, algorithms, product development
            and interesting ideas.
          </p>

          <div className="mt-16 flex flex-col gap-6">
            <a
              href="mailto:nikvrya@gmail.com"
              className="
                text-2xl
                font-medium
                text-zinc-950
                transition-opacity
                hover:opacity-60
              "
            >
              nikvrya@gmail.com
            </a>

            <div className="flex flex-wrap gap-8 text-lg text-zinc-600">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950"
              >
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                className="hover:text-zinc-950"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
