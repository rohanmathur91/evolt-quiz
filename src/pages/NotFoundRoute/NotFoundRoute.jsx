import React from "react";
import { Link } from "react-router-dom";
import { notFound } from "../../staticData";
import styles from "./NotFoundRoute.module.css";

export const NotFoundRoute = () => {
  return (
    <main className="main-container max-container flex-column items-center content-center">
      <img
        src={notFound}
        alt="notFound"
        className={`${styles.notFoundImage}`}
      />
      <p className="text-lg font-semibold">Oops! page not found.</p>
      <Link to="/category" className="icon-container">
        <span className="material-icons-outlined mr-1 arrow-icon">
          arrow_back
        </span>
        <span className={`${styles.link}`}>Go Back</span>
      </Link>
    </main>
  );
};
