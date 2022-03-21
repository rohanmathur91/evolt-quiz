import React from "react";
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
      <div className="mb-2">
        <img className={`${styles.image} rounded-sm`} src={image} alt={alt} />
      </div>
      <h4>{category}</h4>
      <p className="my-2 font-semibold">{title}</p>
      <p className="text-sm text-gray mb-2">Play the quiz to test yourself.</p>
      <div className="category-footer flex-row items-center">
        <p className="text-gray">{numberOfquestions} Questions</p>
        <button className="cta primary-cta py-1 px-2 font-bold ml-auto rounded-sm transition-2">
          Take quiz
        </button>
      </div>
    </div>
  );
};
