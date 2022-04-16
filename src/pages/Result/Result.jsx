import React from "react";
import { Score } from "../../components";
import { useQuiz } from "../../contexts";
import styles from "./Result.module.css";

export const Result = () => {
  const { quiz } = useQuiz();

  return (
    <main className="main-container flex-column items-center mx-2">
      <h3 className="text-underline mt-4">Your Result 🎉</h3>
      <div className="quiz-container w-100 flex-column items-center mt-3 mb-6">
        <Score />
        <h3 className="my-2">Check Answers</h3>
        {quiz.length > 0 &&
          quiz.map(
            ({ _id: quizId, question, options, selectedOptionId, score }) => (
              <div key={quizId} className="flex-column items-center w-100">
                <p className="mt-5 title">{question}</p>

                {selectedOptionId ? (
                  <p className="text-gray mt-1 mb-5 text-sm">{score} Points</p>
                ) : (
                  <p className="text-red mt-1 mb-5 text-sm">Not attempted</p>
                )}

                {options.map(({ _id, option, isCorrect }) => (
                  <button
                    key={_id}
                    disabled
                    className={`${styles.option} ${
                      isCorrect ? styles.correct : ""
                    } ${
                      _id === selectedOptionId && !isCorrect ? styles.wrong : ""
                    } w-100 transition-3 text-base font-regular p-2 rounded-sm mb-2`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )
          )}
      </div>
    </main>
  );
};