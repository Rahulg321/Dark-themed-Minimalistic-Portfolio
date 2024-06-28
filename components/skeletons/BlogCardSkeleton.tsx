import React from "react";
import { Skeleton } from "../ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <Skeleton className="w-full h-[50px] bg-muted dark:bg-slate-800 rounded-lg" />
  );
};

export default BlogCardSkeleton;
