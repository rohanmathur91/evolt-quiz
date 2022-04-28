import { useEffect, useContext, useReducer, createContext } from "react";
import { useToast } from "../hooks";
import { quizReducer, quizInitialstate } from "../reducers";
import { fetchCategories } from "../services";

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
  const { showToast } = useToast();

  useEffect(() => {
    fetchCategories({ showToast, quizDispatch });
  }, [showToast]);

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
