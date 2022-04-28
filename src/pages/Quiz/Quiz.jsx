import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { fetchQuiz } from "../../services/";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import { Rules, CurrentQuestion, Loader } from "../../components";

export const Quiz = () => {
  const [showRules, setShowRules] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { quizId } = useParams();
  const { showToast } = useToast();
  const { quizDispatch, selectedCategory } = useQuiz();

  useScrollToTop();
  useDocumentTitle(selectedCategory || "Quiz");

  useEffect(() => {
    fetchQuiz({ quizId, showToast, setIsLoading, quizDispatch });
  }, [quizId, showToast, quizDispatch]);

  return (
    <main className="main-container flex-column items-center mx-2">
      {isLoading ? (
        <Loader />
      ) : showRules ? (
        <Rules category={selectedCategory} setShowRules={setShowRules} />
      ) : (
        <CurrentQuestion />
      )}
    </main>
  );
};
