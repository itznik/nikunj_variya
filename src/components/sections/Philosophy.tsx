import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Algorithmic Thinking",
    description:
      "Breaking complex problems into predictable systems and scalable solutions.",
  },
  {
    number: "02",
    title: "Systems Over Features",
    description:
      "Prioritizing architecture, maintainability and long-term scalability.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Growing through curiosity, deliberate practice and consistent experimentation.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-[#efede7] py-32">
      <Container>
        <SectionHeading
          label="Philosophy"
          title="The principles that guide how I solve problems and build software."
        />

        <div className="space-y-8">
          {principles.map((item) => (
            <div
              key={item.number}
              className="rounded-[32px] bg-white p-8"
            >
              <p className="text-sm text-zinc-500">
                {item.number}
              </p>

              <h3 className="mt-4 text-3xl font-bold text-zinc-950">
                {item.title}
              </h3>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
