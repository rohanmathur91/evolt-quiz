import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { quizReducer, quizInitialstate } from "../reducers";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [{ categories }, quizDispatch] = useReducer(
    quizReducer,
    quizInitialstate
  );

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        console.log(categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <QuizContext.Provider value={{ categories, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
