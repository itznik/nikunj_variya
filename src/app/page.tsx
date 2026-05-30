import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="flex min-h-screen items-center justify-center">
          <h1 className="font-heading text-7xl font-bold">
            Foundation Complete
          </h1>
        </section>
      </main>

      <Footer />
    </>
  );
}
