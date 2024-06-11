import { createClient } from "@/prismicio";
import React from "react";
import BlogCard from "./BlogCard";
import * as prismic from "@prismicio/client";
import { unstable_noStore } from "next/cache";

const FetchBlogPosts = async ({ searchTag }: { searchTag: string }) => {
  unstable_noStore();
  const client = createClient();
  let blogposts;

  if (searchTag === "all") {
    blogposts = await client.getAllByType("blogpost");
  } else {
    const category = await client.getByUID("category", searchTag);
    blogposts = await client.getAllByType("blogpost", {
      filters: [prismic.filter.at("my.blogpost.category", category.id)],
    });
  }

  if (blogposts.length === 0) {
    return <div>No blog posts found.</div>;
  }

  console.log(blogposts);

  return (
    <div className="">
      {blogposts.map((post) => {
        return <BlogCard post={post} key={post.uid} />;
      })}
    </div>
  );
};

export default FetchBlogPosts;
