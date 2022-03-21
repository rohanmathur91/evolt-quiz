import React from "react";
import styles from "./Category.module.css";
import { CategoryCard } from "../../components";

const categorys = [
  {
    title: "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard.",
    alt: "quiz-category",
    image: "https://picsum.photos/300/300",
    numberOfquestions: 5,
  },
  {
    title: "Scissors Cuts Paper. Paper Covers Rock. Rock Crushes Lizard.",
    alt: "quiz-category",
    image: "https://picsum.photos/300/300",
    numberOfquestions: 5,
  },
  {
    title: "Big bang theory",
    alt: "quiz-category",
    image: "https://picsum.photos/300/300",
    numberOfquestions: 5,
  },
];

export const Category = () => {
  return (
    <div className="flex-column items-center">
      <h3 className="mt-6">Quiz Categories</h3>
      <div className="flex-row content-center wrap mt-4 mx-2 mb-2">
        {categorys.map((category) => (
          <CategoryCard {...category} />
        ))}
      </div>
    </div>
  );
};
