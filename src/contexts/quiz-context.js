import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { quizReducer, quizInitialstate, SET_CATEGORIES } from "../reducers";

const QuizContext = createContext({
  ...quizInitialstate,
  quizDispatch: () => {},
});

const QuizProvider = ({ children }) => {
  const [
    {
      quiz,
      score,
      userResults,
      leaderboard,
      selectedCategory,
      currentQuestionIndex,
      categories,
    },
    quizDispatch,
  ] = useReducer(quizReducer, quizInitialstate);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");

        quizDispatch({ type: SET_CATEGORIES, payload: categories });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quiz,
        score,
        categories,
        userResults,
        leaderboard,
        selectedCategory,
        currentQuestionIndex,
        quizDispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
