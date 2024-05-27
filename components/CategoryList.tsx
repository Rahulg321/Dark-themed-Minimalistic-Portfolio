"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const CategoryList = ({
  categories,
}: {
  categories: Content.CategoryDocument[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(categories);

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <ul className="flex gap-4 flex-wrap">
      <li
        className="text-neutral-400 hover:underline transition-all duration-100 ease-in cursor-pointer hover:text-black dark:hover:text-neutral-100"
        onClick={() => {
          router.push(pathname + "?" + createQueryString("tag", "all"));
        }}
      >
        All
      </li>
      {categories.map((category) => (
        <li
          key={category.id}
          className="text-neutral-400 hover:underline transition-all duration-100 ease-in cursor-pointer hover:text-black dark:hover:text-neutral-100"
          onClick={() => {
            router.push(
              pathname + "?" + createQueryString("tag", category.uid as string)
            );
          }}
        >
          {category.data.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
