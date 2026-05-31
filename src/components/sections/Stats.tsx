export default function Stats() {
  return (
    <section className="bg-white py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-24">
          <div className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-500">
            Metrics
          </div>

          <h2 className="text-5xl font-black leading-none tracking-[-0.06em] md:text-8xl">
            Progress through
            <br />
            consistency.
          </h2>
        </div>

        <div className="space-y-20">
          <Metric
            value="250+"
            label="Problems Solved"
          />

          <Metric
            value="15+"
            label="Projects Built"
          />

          <Metric
            value="1000+"
            label="Hours Learning"
          />

          <Metric
            value="10+"
            label="Technologies"
          />
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-t border-black/10 pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="text-[5rem] font-black leading-none tracking-[-0.06em] md:text-[10rem]">
          {value}
        </div>

        <div className="pb-4 text-xl text-neutral-500">
          {label}
        </div>
      </div>
    </div>
  );
}
