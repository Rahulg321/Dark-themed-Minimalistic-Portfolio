import { formatPrismicTimestamp } from "@/lib/utils";
import { Content } from "@prismicio/client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  post: Content.BlogpostDocument;
  classname?: string;
}

const BlogCard = ({ post, classname }: BlogCardProps) => {
  const { title } = post.data;
  const date = formatPrismicTimestamp(post.first_publication_date);

  return (
    <Link href={`/blogs/${post.uid}`}>
      <article
        className={clsx(
          "hover:bg-blue-200 dark:hover:bg-gray-800 mb-2 cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg blog-card",
          classname
        )}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  md:gap-4">
          <p className="">{title}</p>
          <span className="text-muted-foreground">{date}</span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
