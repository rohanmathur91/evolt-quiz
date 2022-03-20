import React from "react";
import quizHero from "../../assets/quiz.svg";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div
        class={`${styles.home__container} flex-row items-center content-space-around wrap p-2`}
      >
        <div class="w-40 mt-3 mx-3 flex-row items-center">
          <img src={quizHero} alt="quiz" />
        </div>

        <div class="text-center p-1 m-1 mb-3">
          <h1>Welcome to evolt quiz!</h1>
          <h2 class="mt-1 mb-3">Let's see how much you score🤔?</h2>
          <div className="flex-row flex-center">
            <Link to="/category">
              <span className="primary-cta cta py-2 px-4 w-20 font-bold rounded-sm flex-row flex-center">
                Get Started{" "}
                <span class="cta-icon material-icons-outlined ml-1 transition-3">
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
