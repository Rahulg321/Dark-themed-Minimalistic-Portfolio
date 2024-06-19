import React from "react";
import { Skeleton } from "../ui/skeleton";

const BookCardSkeleton = () => {
  return (
    <Skeleton className="w-full h-[150px] bg-blue-100 dark:bg-neutral-800 rounded-lg" />
  );
};

export default BookCardSkeleton;
