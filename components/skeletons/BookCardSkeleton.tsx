import React from "react";
import { Skeleton } from "../ui/skeleton";

const BookCardSkeleton = () => {
  return (
    <Skeleton className="w-full h-[150px] bg-muted dark:bg-slate-800 rounded-lg" />
  );
};

export default BookCardSkeleton;
