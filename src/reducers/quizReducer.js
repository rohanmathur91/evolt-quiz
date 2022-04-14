import { SET_CATEGORIES } from "./";

export const quizInitialstate = {
  categories: [],
};

export const quizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case SET_CATEGORIES:
      return { ...quizState, categories: payload };
  }
};
