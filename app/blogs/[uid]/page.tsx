import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import NewsletterComp from "@/components/NewsletterComp";
import { formatPrismicTimestamp } from "@/lib/utils";
import * as prismic from "@prismicio/client";
import Head from "next/head";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  const publishedDate = formatPrismicTimestamp(page.first_publication_date);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.data.title as string,
    author: {
      "@type": "Person",
      name: "Rahul Gupta",
      // The full URL must be provided, including the website's domain.
      url: new URL("https://rahulguptadev.in/about"),
    },
    image: prismic.asImageSrc(page.data.featured_image),
    datePublished: page.first_publication_date,
    dateModified: page.last_publication_date,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <Link
        href="/blogs"
        className="text-muted-foreground flex items-center gap-2 mb-4"
      >
        <FaArrowLeft />
        Back to All Posts
      </Link>
      <SliceZone slices={page.data.slices} components={components} />

      <span className="block text-center mt-12">
        Published on {publishedDate}
      </span>

      <div className="flex w-full justify-center items-center my-6">
        <span className="h-[1px] w-32 dark:bg-neutral-100"></span>
      </div>

      <NewsletterComp />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
