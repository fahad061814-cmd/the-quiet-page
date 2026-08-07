import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-tight"
        >
          The Quiet Page
        </Link>

        <div className="flex gap-8 text-sm">
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-500">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}