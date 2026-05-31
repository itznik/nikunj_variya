import PinnedShowcase from "@/components/visuals/PinnedShowcase";

export default function Featured() {
  return (
    <section className="bg-[#f5f4ef]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20">
          <div className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Featured Work
          </div>

          <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Building products,
            <br />
            not projects.
          </h2>
        </div>
      </div>

      <PinnedShowcase />
    </section>
  );
}
