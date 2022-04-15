import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { SET_CURRENT_QUESTION_INDEX } from "../../reducers";
import styles from "./CurrentQuestion.module.css";

export const CurrentQuestion = () => {
  const [clickedOptionId, setClickedOptionId] = useState("");
  const navigate = useNavigate();
  const { quiz, currentQuestionIndex, quizDispatch } = useQuiz();
  const { question, options } = quiz[currentQuestionIndex] ?? {};

  const handleOptionClick = (option) => {
    if (!clickedOptionId) {
      setClickedOptionId(option._id);

      setTimeout(() => {
        if (currentQuestionIndex < quiz.length - 1) {
          setClickedOptionId("");
          quizDispatch({
            type: SET_CURRENT_QUESTION_INDEX,
            payload: currentQuestionIndex + 1,
          });
        } else {
          navigate("/category");
        }
      }, 500);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quiz.length) {
      quizDispatch({
        type: SET_CURRENT_QUESTION_INDEX,
        payload: currentQuestionIndex + 1,
      });
    }
  };

  return (
    <>
      <div className="flex-column items-center w-100">
        <p className="my-5 text-lg font-semibold">{question}</p>
        {quiz.length > 0 &&
          options.map(({ _id, option, isCorrect }) => (
            <button
              key={_id}
              onClick={() => handleOptionClick({ _id, option, isCorrect })}
              className={`${styles.answer} ${
                clickedOptionId && isCorrect ? styles.correct : ""
              } ${
                clickedOptionId && _id === clickedOptionId && !isCorrect
                  ? styles.wrong
                  : ""
              } w-100 transition-3 p-2 rounded-sm mb-2`}
            >
              {option}
            </button>
          ))}
      </div>
      <button
        onClick={handleNextClick}
        className="cta primary-cta py-1 pl-2 pr-1 rounded-sm font-semibold icon-container"
      >
        Next<span className="material-icons-outlined ml-1">navigate_next</span>
      </button>
    </>
  );
};
