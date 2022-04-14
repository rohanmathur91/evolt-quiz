import React from "react";
import { v4 as uuid } from "uuid";
import { Score, CurrentQuestion } from "../../components";

const quizzes = [
  {
    _id: uuid(),
    question: "Sheldon is which type of scientist?",
    options: [
      { _id: uuid(), option: "Experimental physicist", correctAnswer: true },
      { _id: uuid(), option: "Aerospace engineer", correctAnswer: false },
      { _id: uuid(), option: "Microbiologist", correctAnswer: false },
      { _id: uuid(), option: "Theoretical physicist", correctAnswer: false },
    ],
  },
];

export const Quiz = () => {
  return (
    <main className="main-container flex-column items-center mx-2">
      <h3 className="text-underline mt-4">Quiz Topic</h3>
      <div className="quiz-container w-100 flex-column items-center mt-3">
        <Score />
        <CurrentQuestion quiz={quizzes[0]} />
      </div>
    </main>
  );
};
