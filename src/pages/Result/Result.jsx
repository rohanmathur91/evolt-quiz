import React, { useEffect } from "react";
import { useAuth, useQuiz } from "../../contexts";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import { saveResultService } from "../../services";
import { getTotalScore } from "../../utils";
import styles from "./Result.module.css";

export const Result = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { quiz, quizDispatch, selectedCategory } = useQuiz();
  const totalScore = getTotalScore(quiz);

  useScrollToTop();
  useDocumentTitle("Result");

  useEffect(() => {
    saveResultService({
      user,
      showToast,
      totalScore,
      quizDispatch,
      selectedCategory,
    });
  }, [user, showToast, totalScore, quizDispatch, selectedCategory]);

  return (
    <main className="main-container flex-column items-center mx-2">
      <h3 className="text-underline mt-4">Your Result 🎉</h3>
      <div className="quiz-container w-100 flex-column items-center mt-3 mb-6">
        <div className="w-100 flex-row items-center content-space-between">
          <p className="text-lg font-bold">Questions: {quiz.length}</p>
          <div className="text-lg font-bold">
            Score: <span className="text-lg font-bold">{totalScore}</span>
          </div>
        </div>
        <h3 className="mt-5">Check Answers</h3>
        {quiz.length > 0 &&
          quiz.map(
            (
              { _id: quizId, question, options, selectedOptionId, score },
              index
            ) => (
              <div key={quizId} className="flex-column w-100">
                <p className="mt-5 title">
                  {index + 1}. {question}
                </p>

                {selectedOptionId ? (
                  <p className="text-gray text-center mt-1 mb-5 text-sm">
                    {score} Points
                  </p>
                ) : (
                  <p className="text-red text-center mt-1 mb-5 text-sm">
                    Not attempted
                  </p>
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
