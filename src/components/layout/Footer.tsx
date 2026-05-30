import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-black/10">
      <Container>
        <div className="flex flex-col gap-12 py-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-2xl font-semibold text-zinc-950">
              Nikunj Variya
            </p>

            <p className="mt-3 max-w-md text-zinc-600 leading-relaxed">
              Building thoughtful digital systems through algorithms,
              engineering, and modern web technologies.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-600">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-950"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-950"
            >
              LinkedIn
            </a>

            <a
              href="mailto:nikvrya@gmail.com"
              className="transition-colors hover:text-zinc-950"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
