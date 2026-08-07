"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

export default function Search({ posts = [] }: { posts: any[] }) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ["title"],
        threshold: 0.3,
      }),
    [posts]
  );

  const results =
    query.trim() === ""
      ? []
      : fuse.search(query).map((result) => result.item);

  return (
    <section className="mb-16">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg"
      />

      {query && (
        <div className="mt-10 space-y-8">
          {results.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            results.map((post) => (
              <article key={post._id}>
                <Link href={`/articles/${post.slug.current}`}>
                  <h2 className="font-serif text-3xl font-bold hover:text-gray-700">
                    {post.title}
                  </h2>
                </Link>
              </article>
            ))
          )}
        </div>
      )}
    </section>
  );
}