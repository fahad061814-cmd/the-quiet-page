import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const POSTS_QUERY = `*[_type=="post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  mainImage
}`;

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY);

  const featured = posts[0];
  const others = posts.slice(1);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-8">

        {/* Hero */}

        <section className="py-20">

          <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
            The Quiet Page
          </p>

          <h1 className="mt-6 max-w-3xl font-serif text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Reflections on faith,
            knowledge and life.
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-gray-600">
            Essays written slowly and published only when they are worth returning to.
          </p>

        </section>

        {/* Featured */}

        {featured && (

          <section className="mb-28">

            <Link href={`/articles/${featured.slug.current}`}>

              {featured.mainImage?.asset && (

                <Image
                  src={urlFor(featured.mainImage).width(1800).height(1000).url()}
                  alt={featured.title}
                  width={1800}
                  height={1000}
                  priority
                  className="aspect-[16/8] w-full rounded-3xl object-cover transition duration-300 hover:opacity-95"
                />

              )}

            </Link>

            <div className="mt-10 max-w-3xl">

              <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
                Featured Writing
              </p>

              <Link href={`/articles/${featured.slug.current}`}>

                <h2 className="mt-4 font-serif text-5xl font-bold leading-tight hover:text-gray-700 transition">
                  {featured.title}
                </h2>

              </Link>

              <p className="mt-5 text-gray-500">
                {new Date(featured.publishedAt).toLocaleDateString()}
              </p>

              <Link
                href={`/articles/${featured.slug.current}`}
                className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
              >
                Read Article →
              </Link>

            </div>

          </section>

        )}

        {/* Latest */}

        {others.length > 0 && (

          <section className="pb-24">

            <h2 className="mb-12 font-serif text-4xl font-bold">
              Latest Writings
            </h2>

            <div className="grid gap-12 md:grid-cols-2">

              {others.map((post: any) => (

                <article key={post._id}>

                  {post.mainImage?.asset && (

                    <Link href={`/articles/${post.slug.current}`}>

                      <Image
                        src={urlFor(post.mainImage).width(900).height(600).url()}
                        alt={post.title}
                        width={900}
                        height={600}
                        className="aspect-[4/3] w-full rounded-2xl object-cover"
                      />

                    </Link>

                  )}

                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>

                  <Link href={`/articles/${post.slug.current}`}>

                    <h3 className="mt-3 font-serif text-3xl font-bold hover:text-gray-700">
                      {post.title}
                    </h3>

                  </Link>

                </article>

              ))}

            </div>

          </section>

        )}

      </main>

      <Footer />

    </>
  );
}