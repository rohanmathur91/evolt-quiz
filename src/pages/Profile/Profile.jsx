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
    <main className="max-container main-container flex-column items-center">
      <div className="flex-row flex-center mt-7 mb-4 border p-3 rounded-sm mx-2 wrap">
        <div
          className={`${styles.profileIcon} flex-row flex-center w-10 h-10 rounded-full mr-4`}
        >
          <span>{user.fullName.slice(0, 2).toUpperCase()}</span>
        </div>
        <div className="flex-row items-center content-space-between wrap">
          <div className="my-2">
            <p className="mb-1">
              <span className="font-semibold">Name:</span> {user.fullName}
            </p>
            <p>
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

      {!isLoading ? (
        <Loader />
      ) : userResults.length ? (
        <ul className={`${styles.results} w-100 mt-4`}>
          {sortedResults.map((result) => (
            <li key={result._id}>
              <ResultCard {...result} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4 flex-row items-center">
          No results to show.
          <Link
            to="/category"
            className={`${styles.categoryLink} text-base flex-row items-center ml-1`}
          >
            <span>Play some quiz</span>
            <span class="material-icons-outlined ml-1">east</span>
          </Link>
        </p>
      )}
    </main>
  );
};
