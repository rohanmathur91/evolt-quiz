import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import {
  SET_SELECTED_OPTION,
  SET_CURRENT_QUESTION_INDEX,
} from "../../reducers";
import { getTotalScore } from "../../utils";
import styles from "./CurrentQuestion.module.css";

export const CurrentQuestion = () => {
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { quiz, quizDispatch, selectedCategory, currentQuestionIndex } =
    useQuiz();
  const totalScore = getTotalScore(quiz);
  const {
    options,
    question,
    _id: quizId,
    selectedOptionId,
  } = quiz[currentQuestionIndex] ?? {};

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < quiz.length - 1) {
      setTimer(30);
      quizDispatch({
        type: SET_CURRENT_QUESTION_INDEX,
        payload: currentQuestionIndex + 1,
      });
    } else {
      navigate("/result");
    }
  }, [quiz, navigate, quizDispatch, currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      nextQuestion();
    }
  }, [timer, nextQuestion]);

  useEffect(() => {
    let intervalId = setInterval(() => setTimer((prev) => prev - 1), 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleOptionClick = ({ _id, isCorrect }) => {
    if (!selectedOptionId) {
      quizDispatch({
        type: SET_SELECTED_OPTION,
        payload: {
          quizId,
          selectedOptionId: _id,
          score: isCorrect ? 5 : 0,
        },
      });
      setTimeout(() => nextQuestion(), 800);
    }
  };

  return (
    <>
      <div
        className={`${styles.header} mt-7 flex-row items-center content-space-between w-100`}
      >
        <p className="font-semibold text-center">{selectedCategory} Quiz</p>
        <p className="flex-row items-center content-end">
          <span className="material-icons-outlined">timer</span>
          <span className={`${styles.timer} text-right`}>
            00 : {timer < 10 ? "0" + timer : timer}
          </span>
        </p>
      </div>

      <div className="quiz-container w-100 flex-column items-center mt-3">
        <div className="w-100 flex-row content-space-between text-gray">
          <span>
            Question: {currentQuestionIndex + 1} / {quiz.length}
          </span>

          <span className="text-base">
            Score:
            <span className="title ml-1 font-bold">
              {totalScore < 10 ? "0" + totalScore : totalScore}
            </span>
          </span>
        </div>

        <div className="flex-column w-100">
          <p className="my-5 title text-center">{question}</p>
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
                } w-100 transition-3 p-2 text-base font-regular rounded-sm mb-2`}
              >
                {option}
              </button>
            ))}
        </div>
        <div className="flex-row items-center content-space-between w-100 mb-7">
          <Link
            to="/category"
            className={`${styles.quitLink} rounded-sm icon-container`}
          >
            <span className="material-icons-outlined mr-1">highlight_off</span>{" "}
            Quit
          </Link>

          <button
            onClick={nextQuestion}
            className="cta primary-cta rounded-sm pl-3 font-semibold icon-container"
          >
            {currentQuestionIndex === quiz.length - 1 ? "Show result" : "Next"}
            <span className="material-icons-outlined">navigate_next</span>
          </button>
        </div>
      </div>
    </>
  );
};
