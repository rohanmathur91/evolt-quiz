import React from "react";
import { Link } from "react-router-dom";
import styles from "./Rules.module.css";

export const Rules = () => {
  return (
    <main className="main-container flex-column items-center">
      <h3 className="mt-4">Rules</h3>
      <div className={`${styles.content} mt-4 mx-2 p-4 rounded-sm`}>
        <p className="mb-3 title">
          1. For each <span className={`${styles.correct} title`}>correct</span>{" "}
          answer gets +2 points.
        </p>
        <p className="mb-3 title">
          2. For each <span className={`${styles.wrong} title`}>wrong</span>{" "}
          answer gets -2 points.
        </p>
        <p className="mb-3 title">3. Only one chance for each answer.</p>
        <p className="title">All The Best.</p>
      </div>
      <Link
        to="/quiz"
        className="mt-4 mb-2 cta py-1 px-2 font-semibold primary-cta rounded-sm"
      >
        Let's start
      </Link>
    </main>
  );
};
