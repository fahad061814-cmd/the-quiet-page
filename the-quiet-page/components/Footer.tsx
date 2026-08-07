import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-32">
      <div className="mx-auto max-w-6xl px-8 py-16">

        <h2 className="font-serif text-3xl font-bold">
          The Quiet Page
        </h2>

        <p className="mt-4 max-w-lg text-gray-600">
          Thoughtful words worth returning to.
        </p>

        <div className="mt-10 flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>

        <p className="mt-12 text-sm text-gray-400">
          © {new Date().getFullYear()} The Quiet Page
        </p>

      </div>
    </footer>
  );
}