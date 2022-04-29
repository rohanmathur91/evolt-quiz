import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.css";

export const CategoryCard = ({
  _id,
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
      <div className="category-footer flex-row items-center mt-3">
        <p className="text-sm text-gray">{numberOfquestions} Questions</p>
        <Link
          to={`/quiz/${_id}`}
          className="cta primary-cta ml-auto rounded-sm transition-2"
        >
          Take quiz
        </Link>
      </div>
    </div>
  );
};

CategoryCard.defaultProps = {
  _id: "",
  alt: "",
  image: "",
  title: "",
  category: "",
  numberOfquestions: 0,
};
