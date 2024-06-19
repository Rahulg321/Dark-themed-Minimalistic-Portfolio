import RatingBookCard from "@/components/RatingBookCard";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import BookCardSkeleton from "@/components/skeletons/BookCardSkeleton";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa6";

/**
 * Props for `BookIndex`.
 */
export type BookIndexProps = SliceComponentProps<Content.BookIndexSlice>;

/**
 * Component for "BookIndex" Slices.
 */
const BookIndex = ({ slice }: BookIndexProps): JSX.Element => {
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
      <h1 className="mb-2">Books I&#39;ve Read</h1>
      <span>Here is a curated list of all the books I&#39;ve read.</span>
      <Suspense
        fallback={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BookCardSkeleton />
              <BookCardSkeleton />
              <BookCardSkeleton />
              <BookCardSkeleton />
              <BookCardSkeleton />
              <BookCardSkeleton />
            </div>
          </>
        }
      >
        <FetchBooks />
      </Suspense>
    </section>
  );
};

export default BookIndex;

async function FetchBooks() {
  // await for 3 seconds
  const client = createClient();
  const books = await client.getAllByType("book");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((e) => {
        return <RatingBookCard book={e} key={e.id} />;
      })}
    </div>
  );
}
