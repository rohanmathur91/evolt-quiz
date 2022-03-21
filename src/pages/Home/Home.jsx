import React from "react";
import quizHero from "../../assets/images/quiz.svg";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div
        className={`${styles.home__container} flex-row items-center content-space-around wrap p-2`}
      >
        <div className="w-40 mt-3 mx-3 flex-row items-center">
          <img src={quizHero} alt="quiz" />
        </div>

        <div className="text-center p-1 m-1 mb-3">
          <h1>Welcome to evolt quiz!</h1>
          <h2 className="mt-1 mb-3">Let's see how much you score🤔?</h2>
          <div classNameName="flex-row flex-center">
            <Link to="/category">
              <span classNameName="primary-cta cta py-2 px-4 w-20 font-bold rounded-sm flex-row flex-center">
                Get Started{" "}
                <span className="cta-icon material-icons-outlined ml-1 transition-3">
                  trending_flat
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
