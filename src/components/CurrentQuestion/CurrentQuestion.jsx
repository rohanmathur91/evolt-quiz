import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import {
  SET_SELECTED_OPTION,
  SET_CURRENT_QUESTION_INDEX,
} from "../../reducers";
import styles from "./CurrentQuestion.module.css";

export const CurrentQuestion = () => {
  const navigate = useNavigate();
  const { quiz, quizDispatch, currentQuestionIndex } = useQuiz();
  const {
    options,
    question,
    _id: quizId,
    selectedOptionId,
  } = quiz[currentQuestionIndex] ?? {};

  const handleOptionClick = ({ _id, isCorrect }) => {
    if (!selectedOptionId) {
      quizDispatch({
        type: SET_SELECTED_OPTION,
        payload: {
          quizId,
          selectedOptionId: _id,
          score: isCorrect ? 5 : -5,
        },
      });

      setTimeout(() => {
        if (currentQuestionIndex < quiz.length - 1) {
          quizDispatch({
            type: SET_CURRENT_QUESTION_INDEX,
            payload: currentQuestionIndex + 1,
          });
        } else {
          navigate("/result");
        }
      }, 600);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      quizDispatch({
        type: SET_CURRENT_QUESTION_INDEX,
        payload: currentQuestionIndex + 1,
      });
    } else {
      navigate("/result");
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
              onClick={() => handleOptionClick({ _id, isCorrect })}
              className={`${styles.option} ${
                selectedOptionId && isCorrect ? styles.correct : ""
              } ${
                selectedOptionId && _id === selectedOptionId && !isCorrect
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
