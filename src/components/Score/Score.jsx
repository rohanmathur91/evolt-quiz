import React from "react";
import { useQuiz } from "../../contexts";

export const Score = () => {
  const { quiz, score, currentQuestionIndex } = useQuiz();

  return (
    <div className="w-100 flex-row content-space-between">
      <div>
        <span className="text-xl font-bold">{currentQuestionIndex + 1}</span>
        <span className="text-lg font-bold">/{quiz.length}</span>
      </div>
      <div className="text-lg font-bold">
        Score: <span className="text-xl font-bold">{score}</span>
      </div>
    </div>
  );
};
