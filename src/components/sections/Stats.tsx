import MetricsGrid from "@/components/visuals/MetricsGrid";

export default function Stats() {
  return (
    <section className="bg-[#f5f4ef] py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <div className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Metrics
          </div>

          <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Progress through
            consistency.
          </h2>
        </div>

        <MetricsGrid />
      </div>
    </section>
  );
}
