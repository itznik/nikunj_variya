import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-20">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-heading text-2xl font-semibold">
              Nikunj Variya
            </h3>

            <p className="mt-3 max-w-md text-neutral-500">
              Building thoughtful digital systems through engineering,
              algorithms, and product thinking.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
