import { formatPrismicTimestamp } from "@/lib/utils";
import { Content } from "@prismicio/client";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  post: Content.BlogpostDocument;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { title } = post.data;
  const date = formatPrismicTimestamp(post.first_publication_date);

  return (
    <Link href={`/blogs/${post.uid}`}>
      <article className="hover:bg-neutral-900 mb-2 cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg">
        <div className="flex justify-between items-center gap-2 sm:gap-4">
          <p className="">{title}</p>
          <span className="text-muted-foreground">{date}</span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
