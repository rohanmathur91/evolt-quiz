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
  const handleShareQuiz = () => {
    navigator.clipboard.writeText(`http://localhost:3000/quiz/${_id}`);
  };

  return (
    <div className={`${styles.card} rounded-sm m-2 p-1`}>
      <img className={`${styles.image} rounded-sm`} src={image} alt={alt} />
      <h4 className="mt-2">{category}</h4>
      <p className="my-1">{title}</p>
      <p className="text-sm text-gray mb-2">{numberOfquestions} Questions</p>
      <div className="category-footer flex-row items-center">
        <Link
          to={`/quiz/${_id}`}
          className="cta primary-cta rounded-sm transition-2"
        >
          Take quiz
        </Link>

        <button
          data-tooltip="Share quiz"
          onClick={handleShareQuiz}
          className="tooltip icon-container ml-auto outlined-btn rounded-sm"
        >
          <span className="material-icons-outlined sub-title">share</span>
        </button>
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
