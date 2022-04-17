import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuiz } from "../../contexts";
import { SET_LEADERBOARD } from "../../reducers";
import { Loader } from "../../components";
import { encodedToken } from "../../token";
import styles from "./Leaderboard.module.css";

export const Leaderboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { leaderboard, quizDispatch } = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const {
          data: { results },
        } = await axios.get("/api/results", {
          headers: { authorization: encodedToken },
        });

        console.log(results);
        quizDispatch({ type: SET_LEADERBOARD, payload: results });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [quizDispatch]);

  return (
    <main className="max-container main-container">
      <h3 className="text-underline my-4 text-center">Leaderboard</h3>
      {isLoading ? (
        <Loader />
      ) : leaderboard.length ? (
        <div className={`${styles.leaderboard}`}>
          {leaderboard.map(
            ({ _id, category, createdAt, totalScore, userName }) => (
              <div
                key={_id}
                className={`${styles.result} flex-row items-center content-space-between p-2 mx-1 mb-3 rounded-sm`}
              >
                <div
                  className={`${styles.avatar} avatar-sm white flex-row flex-center rounded-full mr-2`}
                >
                  {userName.slice(0, 2)}
                </div>
                <p className={`${styles.name}`}>{userName}</p>
                <div className={`${styles.category} flex-column flex-center`}>
                  <span className="text-xs text-gray mb-1">Category</span>
                  <p>{category}</p>
                </div>

                <div className={`${styles.score} flex-column flex-center`}>
                  <span className="text-xs text-gray mb-1">Score</span>
                  <p>{totalScore}</p>
                </div>

                <div
                  className={`${styles.date} flex-column flex-center ml-auto`}
                >
                  <span className="text-xs text-gray mb-1">Date</span>
                  <span>{createdAt}</span>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <p className="text-center mt-4">No results to show.</p>
      )}
    </main>
  );
};
