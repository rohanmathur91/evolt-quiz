import {
  SET_SCORE,
  SET_CATEGORIES,
  INITIALIZE_QUIZ,
  SET_CURRENT_QUESTION_INDEX,
} from "./";

export const quizInitialstate = {
  score: 0,
  quiz: [],
  categories: [],
  currentQuestionIndex: 0,
};

export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case INITIALIZE_QUIZ:
      return { ...quizState, quiz: payload, currentQuestionIndex: 0, score: 0 };

    case SET_SCORE:
      return { ...quizState, score: payload };

    case SET_CATEGORIES:
      return { ...quizState, categories: payload };

    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...quizState,
        currentQuestionIndex: payload ?? 0,
      };

    default:
      throw new Error(`${type} action type not found.`);
  }
};
