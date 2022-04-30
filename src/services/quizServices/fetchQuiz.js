import axios from "axios";
import { INITIALIZE_QUIZ } from "../../reducers";
import { encodedToken } from "../../token";

export const fetchQuiz = async ({
  quizId,
  showToast,
  setIsLoading,
  quizDispatch,
}) => {
  if (quizId) {
    try {
      setIsLoading(true);
      const {
        data: { quiz },
      } = await axios.get(`/api/quiz/${quizId}`, {
        headers: { authorization: encodedToken },
      });

      quizDispatch({
        type: INITIALIZE_QUIZ,
        payload: { quiz: quiz.quiz, selectedCategory: quiz.category },
      });
      setIsLoading(false);
    } catch (error) {
      showToast("error", "Something went wrong, please refresh!");
    }
  }
};
