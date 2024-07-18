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
type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogpost", params.uid)
    .catch(() => notFound());

  const publishedDate = formatPrismicTimestamp(page.first_publication_date);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: page.data.title,
            datePublished: page.first_publication_date,
            dateModified: page.first_publication_date,
            description: page.data.meta_description,
            image:
              prismic.asImageSrc(page.data.meta_image) ||
              "https://www.rahulguptadev.in/icon.png",
            url: `https://rahulguptadev.in/blogs/${page.uid}`,
            author: {
              "@type": "Person",
              name: "Rahul Gupta",
            },
          }),
        }}
      />
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

  const { title, meta_description: description } = page.data;
  const publicationTime = page.first_publication_date;

  const image = page.data.featured_image;
  const ogImage =
    prismic.asImageSrc(image) || "https://www.rahulguptadev.in/icon.png";

  return {
    title,
    description,
    openGraph: {
      title: title as string,
      description: description as string,
      type: "article",
      publishedTime: publicationTime,
      url: `https://www.rahulguptadev.in/blogs/${page.uid}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title as string,
      description: description as string,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blogpost");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
