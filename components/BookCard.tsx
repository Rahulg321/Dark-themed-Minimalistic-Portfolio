import { Content } from "@prismicio/client";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Content.BookDocument }) => {
  return (
    <Link href={`/books`}>
      <div className="flex flex-col md:flex-row hover:bg-muted mb-2 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out px-4 py-2 rounded-lg md:justify-between hover:cursor-pointer md:items-center">
        <p className="">{book.data.name}</p>
        <span className="text-muted-foreground">by {book.data.author}</span>
      </div>
    </Link>
  );
};

export default BookCard;
