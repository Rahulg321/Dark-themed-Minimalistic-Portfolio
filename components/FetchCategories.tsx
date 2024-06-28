import React from "react";
import CategoryList from "./CategoryList";
import { createClient } from "@/prismicio";

const FetchCategories = async () => {
  const client = createClient();
  const categories = await client.getAllByType("category");

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};

export default FetchCategories;
