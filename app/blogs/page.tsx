import { createClient } from "@/prismicio";
import React, { Suspense } from "react";
import * as prismic from "@prismicio/client";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import CategoryList from "@/components/CategoryList";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import FetchBlogPosts from "@/components/FetchBlogPosts";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    tag?: string;
  };
}) => {
  const client = createClient();
  const categories = await client.getAllByType("category");
  const tag = searchParams?.tag || "all";

  return (
    <section className="space-y-6">
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
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          </>
        }
      >
        <FetchBlogPosts searchTag={tag} />
      </Suspense>
    </section>
  );
};

export default page;
