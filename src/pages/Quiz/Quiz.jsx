import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuiz } from "../../contexts";
import { SET_QUIZ, SET_CURRENT_QUESTION_INDEX } from "../../reducers";
import { Score, CurrentQuestion, Loader } from "../../components";
import { encodedToken } from "../../token";

export const Quiz = () => {
  const [isloading, setIsLoading] = useState(false);
  const { quizId } = useParams();
  const { quizDispatch } = useQuiz();

  useEffect(() => {
    (async () => {
      if (quizId) {
        try {
          setIsLoading(true);
          const {
            data: { quiz },
          } = await axios.get(`/api/quiz/${quizId}`, {
            headers: { authorization: encodedToken },
          });

          quizDispatch({ type: SET_QUIZ, payload: quiz.quiz });
          quizDispatch({ type: SET_CURRENT_QUESTION_INDEX });
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [quizId, quizDispatch]);

  return (
    <main className="main-container flex-column items-center mx-2">
      <h3 className="text-underline mt-4">Quiz Time</h3>
      {isloading ? (
        <Loader />
      ) : (
        <div className="quiz-container w-100 flex-column items-center mt-3">
          <Score />
          <CurrentQuestion />
        </div>
      )}
    </main>
  );
};
