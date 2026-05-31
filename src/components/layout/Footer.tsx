export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-12 lg:px-20">
        <div className="border-t border-white/10 pt-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/40">
                Nikunj Variya
              </p>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
                Software
                <br />
                Engineer.
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-4 text-white/60">
              <a href="mailto:nikvrya@gmail.com">
                Email
              </a>

              <a href="#">
                GitHub
              </a>

              <a href="#">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:justify-between">
            <span>
              © 2026 Nikunj Variya
            </span>

            <span>
              Next.js · TypeScript · Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
