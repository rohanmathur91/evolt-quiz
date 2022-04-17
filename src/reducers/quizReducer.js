import {
  SET_CATEGORIES,
  INITIALIZE_QUIZ,
  SET_CURRENT_QUESTION_INDEX,
  SET_SELECTED_OPTION,
} from "./";

export const quizInitialstate = {
  quiz: [],
  categories: [],
  selectedCategory: "",
  currentQuestionIndex: 0,
};

export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case INITIALIZE_QUIZ:
      return {
        ...quizState,
        score: 0,
        currentQuestionIndex: 0,
        quiz: payload.quiz,
        selectedCategory: payload.selectedCategory,
      };

    case SET_CATEGORIES:
      return { ...quizState, categories: payload };

    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...quizState,
        currentQuestionIndex: payload ?? 0,
      };

    case SET_SELECTED_OPTION:
      return {
        ...quizState,
        quiz: quizState.quiz.map((eachQuiz) =>
          eachQuiz._id === payload.quizId
            ? {
                ...eachQuiz,
                score: payload.score,
                selectedOptionId: payload.selectedOptionId,
              }
            : eachQuiz
        ),
      };

    default:
      throw new Error(`${type} action type not found.`);
  }
};
