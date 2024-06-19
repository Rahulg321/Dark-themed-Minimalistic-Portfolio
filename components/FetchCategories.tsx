import React from "react";
import CategoryList from "./CategoryList";
import { createClient } from "@/prismicio";

const FetchCategories = async () => {
  // await for 3 sec
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const client = createClient();
  const categories = await client.getAllByType("category");

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default FetchCategories;
