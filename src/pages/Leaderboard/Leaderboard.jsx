import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import { fetchLeaderboard } from "../../services";
import { getSortedLeaderboard } from "../../utils";
import { Loader } from "../../components";
import styles from "./Leaderboard.module.css";

export const Leaderboard = () => {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { leaderboard, quizDispatch } = useQuiz();
  const sortedLeaderboard = getSortedLeaderboard(leaderboard);

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
          className={`${styles.goBackLink} cta flex-row flex-center outlined-btn rounded-sm ml-2`}
        >
          <span className="material-icons-outlined mr-1">west</span> Go back
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
          <div>
            {sortedLeaderboard.map(
              ({ _id, category, createdAt, totalScore, username }) => (
                <div
                  key={_id}
                  className={`${styles.result} flex-row items-center content-space-between p-2 mx-1 mb-3 rounded-sm`}
                >
                  <div
                    className={`${styles.avatar} avatar-sm white flex-row flex-center rounded-full mr-2`}
                  >
                    {username.slice(0, 2)}
                  </div>
                  <p className={`${styles.name}`}>{username}</p>
                  <div className={`${styles.category} flex-column flex-center`}>
                    <span className="text-xs text-gray mb-1">Category</span>
                    <p>{category}</p>
                  </div>

                  <div className={`${styles.score} flex-column flex-center`}>
                    <span className="text-xs text-gray mb-1">Score</span>
                    <p>{totalScore < 10 ? "0" + totalScore : totalScore}</p>
                  </div>

                  <div
                    className={`${styles.date} flex-column flex-center ml-auto`}
                  >
                    <span className="text-xs text-gray mb-1">Date</span>
                    <span className="text-sm">{createdAt}</span>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <p className="text-center mt-4">No results to show.</p>
        )}
      </div>
    </main>
  );
};
