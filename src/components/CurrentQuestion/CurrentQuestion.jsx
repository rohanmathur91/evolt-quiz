import React from "react";
import styles from "./CurrentQuestion.module.css";

export const CurrentQuestion = ({ quiz }) => {
  const { question, options } = quiz;
  return (
    <>
      <div className="flex-column items-center">
        <div className="my-5 text-lg font-semibold">{question}</div>
        <div>
          {options.map(({ _id, option }) => (
            <button
              key={_id}
              className={`${styles.answer} w-100 transition-3 p-2 rounded-sm mb-2`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button className="cta primary-cta py-1 pl-2 pr-1 rounded-sm font-semibold icon-container">
        Next<span class="material-icons-outlined ml-1">navigate_next</span>
      </button>
    </>
  );
};
