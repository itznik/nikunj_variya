export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.5em] text-white/40">
              Nikunj Variya
            </div>

            <div className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
              Software Engineer
            </div>
          </div>

          <div className="text-white/40">
            © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
