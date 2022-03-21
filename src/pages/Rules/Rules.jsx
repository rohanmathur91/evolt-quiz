import React from "react";
import styles from "./Rules.module.css";

export const Rules = () => {
  return (
    <div className="flex-column items-center mt-8">
      <a className="mt-6 text-xl font-bold" href="./rules.html">
        Rules
      </a>
      <div className={`${styles.content} mt-4 mx-2 p-4 rounded-sm`}>
        <p className="mb-3 text-lg">1. Quiz is free and open to all persons.</p>
        <p className="mb-3 text-lg">
          2. For each <span className="correct text-lg">correct</span> answer
          gets +2 points 😎
        </p>
        <p className="mb-3 text-lg">
          3. For each <span className="wrong text-lg">wrong</span> answer gets
          -2 points 😯
        </p>
        <p className="mb-3 text-lg">4. Only one chance for each answer.</p>
        <p className="mb-3 text-lg">5. Quiz is free and open to all persons.</p>
      </div>
      <a
        className="mt-4 mb-2 cta py-1 px-2 font-semibold primary-cta rounded-sm"
        href="../quiz/quiz.html"
      >
        Let's start.
      </a>
    </div>
  );
};
