import React from "react";
import { useQuiz } from "../../contexts";
import { getTotalScore } from "../../utils";

export const Score = () => {
  const { quiz, currentQuestionIndex } = useQuiz();
  const totalScore = getTotalScore(quiz);

  return (
    <div className="w-100 flex-row content-space-between">
      <div>
        <span className="text-xl font-bold">{currentQuestionIndex + 1}</span>
        <span className="text-lg font-bold">/{quiz.length}</span>
      </div>
      <div className="text-lg font-bold">
        Score: <span className="text-xl font-bold">{totalScore}</span>
      </div>
    </div>
  );
};
