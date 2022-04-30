import React from "react";
import styles from "./ResultCard.module.css";

export const ResultCard = ({ username, category, totalScore, createdAt }) => {
  return (
    <div
      className={`${styles.result} flex-row items-center content-space-between p-2 mx-1 mb-3 rounded-sm`}
    >
      <div
        className={`${styles.avatar} avatar-sm white flex-row flex-center rounded-full mr-2`}
      >
        {username.slice(0, 2).toUpperCase()}
      </div>
      <p className={`${styles.name}`}>{username}</p>
      <div className={`${styles.category} flex-column flex-center`}>
        <span className="text-xs text-gray mb-1">Category</span>
        <p>{category}</p>
      </div>

      <div className={`${styles.score} flex-column flex-center`}>
        <span className="text-xs text-gray mb-1">Score</span>
        <p>{totalScore < 10 ? "0" + totalScore : totalScore}</p>
      </div>

      <div className={`${styles.date} flex-column flex-center ml-auto`}>
        <span className="text-xs text-gray mb-1">Date</span>
        <span className="text-sm">{createdAt}</span>
      </div>
    </div>
  );
};

ResultCard.defaultProps = {
  username: "",
  category: "",
  totalScore: 0,
  createdAt: "",
};
