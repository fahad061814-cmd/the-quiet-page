import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      _createdAt,
      mainImage
    }
    `,
    { slug }
  );

  if (!post) {
    notFound();
  }

  const words = JSON.stringify(post.body ?? "")
    .replace(/<[^>]+>/g, "")
    .split(/\s+/).length;

  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <>
      <Navbar />

      <main className="pb-24">

        {post.mainImage?.asset && (
          <section className="mx-auto mt-10 max-w-7xl px-8">
            <Image
              src={urlFor(post.mainImage).width(1800).height(900).url()}
              alt={post.title}
              width={1800}
              height={900}
              priority
              className="aspect-[16/8] w-full rounded-3xl object-cover shadow-lg"
            />
          </section>
        )}

        <section className="mx-auto mt-20 max-w-3xl px-8">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            {new Date(post._createdAt).toLocaleDateString()} · {readingTime} min read
          </p>

          <h1 className="mt-6 font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            {post.title}
          </h1>

          <article className="prose prose-lg lg:prose-xl mt-16 max-w-none">
            <PortableText value={post.body} />
          </article>

        </section>

      </main>

      <Footer />
    </>
  );
}