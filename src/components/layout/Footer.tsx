import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <Container>
        <div className="py-24">
          <div className="border-b border-white/10 pb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Nikunj Variya
            </p>

            <h2
              className="
                mt-6
                max-w-4xl
                font-heading
                text-5xl
                font-bold
                leading-[0.9]
                tracking-[-0.06em]
                md:text-7xl
              "
            >
              Building software through
              algorithms, systems thinking
              and continuous learning.
            </h2>
          </div>

          <div
            className="
              flex
              flex-col
              gap-10
              pt-12
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p className="text-zinc-400">
                Software Engineer
              </p>

              <p className="mt-2 text-zinc-400">
                Full Stack Developer
              </p>

              <p className="mt-2 text-zinc-400">
                DSA Enthusiast
              </p>
            </div>

            <div className="flex gap-8 text-zinc-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:nikvrya@gmail.com"
                className="hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

          <div
            className="
              mt-16
              border-t
              border-white/10
              pt-8
              flex
              flex-col
              gap-4
              text-sm
              text-zinc-500
              md:flex-row
              md:justify-between
            "
          >
            <p>© 2026 Nikunj Variya</p>

            <p>
              Built with Next.js, TypeScript &
              Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
