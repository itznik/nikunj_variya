export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20">
        <div className="border-b border-white/10 pb-16">
          <div className="text-xs uppercase tracking-[0.5em] text-white/40">
            Nikunj Variya
          </div>

          <h2 className="mt-8 max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            Engineering
            <br />
            products,
            <br />
            systems &
            <br />
            solutions.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
              Focus
            </div>

            <p className="text-white/60">
              Software Engineering
            </p>

            <p className="mt-2 text-white/60">
              Full Stack Development
            </p>

            <p className="mt-2 text-white/60">
              System Design
            </p>
          </div>

          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
              Connect
            </div>

            <div className="flex flex-col gap-3">
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

          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
              Built With
            </div>

            <p className="text-white/60">
              Next.js
            </p>

            <p className="mt-2 text-white/60">
              TypeScript
            </p>

            <p className="mt-2 text-white/60">
              Tailwind CSS
            </p>

            <p className="mt-2 text-white/60">
              Framer Motion
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 text-sm text-white/40 md:flex-row md:justify-between">
            <span>
              © 2026 Nikunj Variya
            </span>

            <span>
              Designed & Developed by Nikunj Variya
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
