import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useQuiz } from "../../contexts";
import { fetchUserResults } from "../../services";
import { useToast, useScrollToTop, useDocumentTitle } from "../../hooks";
import { getSortedResults } from "../../utils";
import { Loader, ResultCard } from "../../components";
import styles from "./Profile.module.css";

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();
  const { user, handleLogout } = useAuth();
  const { userResults, quizDispatch } = useQuiz();
  const sortedResults = getSortedResults(userResults);

  useScrollToTop();
  useDocumentTitle("Profile");

  useEffect(() => {
    fetchUserResults({
      user,
      showToast,
      setIsLoading,
      quizDispatch,
    });
  }, [user, showToast, setIsLoading, quizDispatch]);

  return (
    <main className="max-container main-container flex-column items-center pb-7">
      <h3 className="mt-7 mb-2">Your Profile</h3>
      <div className="flex-row flex-center border rounded-sm p-3 mx-2 wrap">
        <div
          className={`${styles.profileIcon} flex-row flex-center w-10 h-10 rounded-full mr-4`}
        >
          <span>{user.fullName.slice(0, 2).toUpperCase()}</span>
        </div>
        <div className="flex-row items-center content-space-between wrap">
          <div className="m-2">
            <p className="mb-1">
              <span className="font-semibold">Name:</span> {user.fullName}
            </p>
            <p className={`${styles.email}`}>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className={`${styles.logoutBtn} outlined-btn rounded-sm transition-2 ml-4`}
          >
            Logout
          </button>
        </div>
      </div>

      <div className={`${styles.container} py-2 w-100 flex-row items-center`}>
        <Link to="/category" className="icon-container">
          <span className="material-icons-outlined arrow-icon mr-1">west</span>
          <span className={`${styles.link} text-base`}>Play Now</span>
        </Link>

        <Link to="/leaderboard" className="icon-container ml-auto">
          <span className={`${styles.link} text-base`}>Leaderboard</span>
          <span className="material-icons-outlined arrow-icon ml-1">east</span>
        </Link>
      </div>
      <h3 className="text-center mb-4">Checkout your quiz results 👇🏼</h3>

      {isLoading ? (
        <Loader />
      ) : userResults.length ? (
        <ul className={`${styles.container} w-100 mt-4`}>
          {sortedResults.map((result) => (
            <li key={result._id}>
              <ResultCard {...result} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4 flex-row items-center">
          No results to show.
        </p>
      )}
    </main>
  );
};
