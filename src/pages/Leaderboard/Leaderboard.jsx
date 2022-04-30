import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import { fetchLeaderboard } from "../../services";
import { getSortedResults } from "../../utils";
import { Loader, ResultCard } from "../../components";
import styles from "./Leaderboard.module.css";

export const Leaderboard = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { leaderboard, quizDispatch } = useQuiz();
  const sortedLeaderboard = getSortedResults(leaderboard);

  useScrollToTop();
  useDocumentTitle("Leaderboard");

  useEffect(() => {
    fetchLeaderboard({ showToast, quizDispatch, setIsLoading });
  }, [showToast, quizDispatch]);

  return (
    <main className="main-container pb-5">
      <div className={`${styles.leaderboard} pt-4`}>
        <Link
          to="/category"
          className={`${styles.categoryLink} icon-container`}
        >
          <span className="material-icons-outlined arrow-icon">arrow_back</span>
          <span className={`${styles.link} text-base ml-1`}>Category</span>
        </Link>

        <h3 className="text-underline my-4 icon-container">
          Leaderboard
          <span className={`${styles.trophyIcon} material-icons-round ml-1`}>
            emoji_events
          </span>
        </h3>
        {isLoading ? (
          <Loader />
        ) : leaderboard.length ? (
          <ul>
            {sortedLeaderboard.map((result) => (
              <li key={result._id}>
                <ResultCard {...result} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-4">No results to show.</p>
        )}
      </div>
    </main>
  );
};
