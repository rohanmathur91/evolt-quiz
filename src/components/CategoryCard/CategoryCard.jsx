import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.css";

export const CategoryCard = ({
  alt,
  image,
  title,
  category,
  numberOfquestions,
}) => {
  return (
    <div className={`${styles.card} rounded-sm m-2 p-1`}>
      <img className={`${styles.image} rounded-sm`} src={image} alt={alt} />
      <h4 className="mt-2">{category}</h4>
      <p className="my-1">{title}</p>
      <p className="text-sm text-gray mb-2">Play the quiz to test yourself.</p>
      <div className="category-footer flex-row items-center">
        <p className="text-gray">{numberOfquestions} Questions</p>
        <Link
          to="/rules"
          className="cta primary-cta py-1 px-2 font-bold ml-auto rounded-sm transition-2"
        >
          Take quiz
        </Link>
      </div>
    </div>
  );
};
