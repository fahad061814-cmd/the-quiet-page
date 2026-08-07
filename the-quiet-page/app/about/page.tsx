import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-4xl px-8 py-24">

        <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
          About
        </p>

        <h1 className="mt-6 font-serif text-6xl font-bold leading-tight">
          Why The Quiet Page Exists
        </h1>

        <p className="mt-10 text-xl leading-9 text-gray-700">
          The Quiet Page is a place for thoughtful writing.
          In a world filled with endless scrolling and constant noise,
          these essays are written to slow the reader down and encourage
          reflection.
        </p>

        <div className="mt-16 space-y-8 text-lg leading-9 text-gray-700">

          <p>
            Every article is written with care rather than speed.
            The goal is not to publish often, but to publish something
            worth reading twice.
          </p>

          <p>
            Here you'll find reflections on faith, knowledge,
            character, time, purpose and the lessons hidden in
            ordinary life.
          </p>

          <p>
            Thank you for taking the time to read.
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}