import CategoryList from "@/components/CategoryList";
import FetchBlogPosts from "@/components/FetchBlogPosts";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";

/**
 * Props for `BlogIndex`.
 */
export type BlogIndexProps = SliceComponentProps<Content.BlogIndexSlice>;

/**
 * Component for "BlogIndex" Slices.
 */
const BlogIndex = async ({ slice }: BlogIndexProps) => {
  const client = createClient();
  const categories = await client.getAllByType("category");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-6"
    >
      <Link
        href="/"
        className="text-muted-foreground flex items-center gap-2 mb-4"
      >
        <FaArrowLeft />
        Go Back
      </Link>

      <h1 className="">All Blogs</h1>
      <div className="">
        <CategoryList categories={categories} />
      </div>

      <Suspense
        fallback={
          <>
            <div className="space-y-4">
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          </>
        }
      >
        <FetchBlogPosts />
      </Suspense>
    </section>
  );
};

export default BlogIndex;
