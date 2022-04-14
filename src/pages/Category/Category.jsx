import React from "react";
import { CategoryCard } from "../../components";
import { useQuiz } from "../../contexts";

export const Category = () => {
  const { categories } = useQuiz();

  return (
    <main className="main-container flex-column items-center">
      <h3 className="mt-3">Quiz Categories</h3>
      <div className="flex-row content-center wrap mt-4 mx-2 mb-2">
        {categories.map((category) => (
          <CategoryCard key={category._id} {...category} />
        ))}
      </div>
    </main>
  );
};
