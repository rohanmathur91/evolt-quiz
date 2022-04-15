import { SET_QUIZ, SET_CATEGORIES, SET_CURRENT_QUESTION_INDEX } from "./";

export const quizInitialstate = {
  quiz: [],
  categories: [],
  currentQuestionIndex: 0,
};

export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case SET_QUIZ:
      return { ...quizState, quiz: payload };

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
