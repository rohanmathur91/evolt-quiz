import React from "react";
import styles from "./Rules.module.css";

export const Rules = ({ category, setShowRules }) => {
  const handleStartClick = () => setShowRules(false);

  return (
    <>
      <h3 className="mt-7">{category} Quiz Rules</h3>
      <div className={`${styles.content} mt-4 mx-2 p-4 rounded-sm`}>
        <p className="mb-3 title">
          1. For each <span className={`${styles.correct} title`}>correct</span>{" "}
          answer gets +5 points.
        </p>
        <p className="mb-3 title">
          2. For each <span className={`${styles.wrong} title`}>wrong</span>{" "}
          answer gets 0 points.
        </p>
        <p className="mb-3 title">3. For each question you will get 30 sec.</p>
        <p className="mb-3 title">4. Only one chance for each answer.</p>
        <p className="title text-center">All The best and play well.</p>
      </div>
      <button
        onClick={handleStartClick}
        className="mt-4 mb-2 cta font-semibold primary-cta rounded-sm"
      >
        Let's start
      </button>
    </>
  );
};

Rules.defaultProps = {
  category: "",
  setShowRules: () => {},
};
