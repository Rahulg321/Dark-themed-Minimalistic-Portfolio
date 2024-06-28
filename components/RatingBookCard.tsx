import { convertToDateString } from "@/lib/utils";
import { Content } from "@prismicio/client";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

const RatingBookCard = ({ book }: { book: Content.BookDocument }) => {
  const date = convertToDateString(book.data.finished_date as string);
  const rating = book.data.rating as number;

  return (
    <div className="border-2 p-2 bg-muted dark:bg-slate-900">
      <div className="relative w-full h-48 aspect-w-1 aspect-h-1 mb-2">
        <PrismicNextImage field={book.data.featured_image} fill className="" />
      </div>
      <div className="space-y-1">
        <span className="block">{book.data.name}</span>
        <span className="block text-muted-foreground">
          By {book.data.author}
        </span>
        <div className="flex gap-2">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <IoStarSharp key={index} className="text-yellow-500 text-xl" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RatingBookCard;
