import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    value: "250+",
    label: "Problems Solved",
  },
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "1000+",
    label: "Hours Learning",
  },
  {
    value: "10+",
    label: "Technologies",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-32">
      <Container>
        <SectionHeading
          label="Problem Solving"
          title="Progress measured through consistency, curiosity and practice."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[32px] bg-zinc-950 p-10 text-white"
            >
              <p className="text-6xl font-bold tracking-tight">
                {stat.value}
              </p>

              <p className="mt-4 text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
