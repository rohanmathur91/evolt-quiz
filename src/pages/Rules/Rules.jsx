import React from "react";
import styles from "./Rules.module.css";

export const Rules = () => {
  return (
    <div className="flex-column items-center mt-4">
      <h3>Rules</h3>
      <div className={`${styles.content} mt-4 mx-2 p-4 rounded-sm`}>
        <p className="mb-3 text-title">
          1. For each <span className="correct text-title">correct</span> answer
          gets +2 points.
        </p>
        <p className="mb-3 text-title">
          2. For each <span className="wrong text-title">wrong</span> answer
          gets -2 points.
        </p>
        <p className="mb-3 text-title">3. Only one chance for each answer.</p>
        <p className="text-title">All The Best.</p>
      </div>
      <a
        className="mt-4 mb-2 cta py-1 px-2 font-semibold primary-cta rounded-sm"
        href="../quiz/quiz.html"
      >
        Let's start
      </a>
    </div>
  );
};
