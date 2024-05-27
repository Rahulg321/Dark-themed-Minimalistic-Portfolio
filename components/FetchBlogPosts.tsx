"use client";

import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";
import { useSearchParams } from "next/navigation";
import * as prismic from "@prismicio/client";
import { formatPrismicTimestamp } from "@/lib/utils";

const FetchBlogPosts = async () => {
  //set a timeout of 3 seconds
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") ?? "all";
  const client = createClient();
  let blogposts;

  if (tag === "all") {
    blogposts = await client.getAllByType("blogpost");
  } else {
    const category = await client.getByUID("category", tag);
    blogposts = await client.getAllByType("blogpost", {
      filters: [prismic.filter.at("my.blogpost.category", category.id)],
    });
  }

  if (blogposts.length === 0) {
    return <div>No blog posts found.</div>;
  }

  return (
    <div className="">
      {blogposts.map((post) => {
        return <BlogCard post={post} key={post.uid} />;
      })}
    </div>
  );
};

export default FetchBlogPosts;
