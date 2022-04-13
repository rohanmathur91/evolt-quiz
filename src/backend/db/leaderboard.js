import { v4 as uuid } from "uuid";

export const leaderboard = [
  {
    _id: uuid(),
    quizId: 1,
    numberOfquestions: 3,
    totalScore: 10,
    attempted: 3,
    correctAnswers: 3,
    userName: "adarsh",
  },
  {
    _id: uuid(),
    quizId: 1,
    numberOfquestions: 3,
    totalScore: 7,
    attempted: 3,
    correctAnswers: 3,
    userName: "rohan",
  },
  {
    _id: uuid(),
    quizId: 1,
    numberOfquestions: 2,
    totalScore: 8,
    attempted: 3,
    correctAnswers: 3,
    userName: "balak",
  },
];
