import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f6f5f2] py-40"
    >
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's Build Something Useful."
          description="Always interested in learning, collaborating and discussing engineering, software and interesting ideas."
        />

        <div className="mt-16">
          <a
            href="mailto:nikvrya@gmail.com"
            className="
              text-3xl
              font-semibold
              text-zinc-950
              transition-opacity
              hover:opacity-60
            "
          >
            nikvrya@gmail.com
          </a>

          <div className="mt-10 flex flex-wrap gap-8 text-lg text-zinc-600">
            <a href="https://github.com">
              GitHub
            </a>

            <a href="https://linkedin.com">
              LinkedIn
            </a>

            <a href="/resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
