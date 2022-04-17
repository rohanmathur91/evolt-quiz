import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuiz } from "../../contexts";
import { INITIALIZE_QUIZ } from "../../reducers";
import { Score, Rules, CurrentQuestion, Loader } from "../../components";
import { encodedToken } from "../../token";

export const Quiz = () => {
  const [showRules, setShowRules] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { quizId } = useParams();
  const { selectedCategory, quizDispatch } = useQuiz();

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

          quizDispatch({
            type: INITIALIZE_QUIZ,
            payload: { quiz: quiz.quiz, selectedCategory: quiz.category },
          });
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [quizId, quizDispatch]);

  return (
    <main className="main-container flex-column items-center mx-2">
      {isLoading ? (
        <Loader />
      ) : showRules ? (
        <Rules category={selectedCategory} setShowRules={setShowRules} />
      ) : (
        <>
          <h3 className="text-underline mt-4">{selectedCategory} Quiz</h3>
          <div className="quiz-container w-100 flex-column items-center mt-3">
            <Score />
            <CurrentQuestion />
          </div>
        </>
      )}
    </main>
  );
};
