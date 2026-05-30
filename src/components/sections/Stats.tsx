import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Stats() {
  return (
    <section className="bg-white py-40">
      <Container>
        <SectionHeading
          label="Problem Solving"
          title="Progress measured through consistency."
          description="Every project, algorithm and learning session contributes to long-term engineering growth."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            className="
              rounded-[40px]
              bg-zinc-950
              p-10
              text-white
            "
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              Core Metric
            </p>

            <h3
              className="
                mt-6
                text-[5rem]
                font-bold
                leading-none
                tracking-tight
              "
            >
              250+
            </h3>

            <p className="mt-4 text-xl text-zinc-300">
              Problems Solved
            </p>

            <p className="mt-8 max-w-lg leading-relaxed text-zinc-400">
              Consistent practice across arrays, trees,
              graphs, recursion, dynamic programming and
              algorithmic problem solving.
            </p>
          </div>

          <div className="grid gap-8">
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

        <div
          className="
            mt-8
            rounded-[40px]
            bg-[#efede7]
            p-10
          "
        >
          <div className="grid gap-8 md:grid-cols-3">
            <FocusCard
              title="Current Focus"
              content="Data Structures & Algorithms"
            />

            <FocusCard
              title="Learning"
              content="System Design"
            />

            <FocusCard
              title="Building"
              content="Full Stack Products"
            />
          </div>
        </div>
      </Container>
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
    <div
      className="
        rounded-[32px]
        border
        border-black/10
        bg-white
        p-8
      "
    >
      <p className="text-5xl font-bold tracking-tight text-zinc-950">
        {value}
      </p>

      <p className="mt-3 text-zinc-600">
        {label}
      </p>
    </div>
  );
}

function FocusCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </p>

      <h3 className="mt-4 text-2xl font-bold text-zinc-950">
        {content}
      </h3>
    </div>
  );
}
