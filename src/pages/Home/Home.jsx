import React from "react";
import { homeBanner } from "../../staticData";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div
        className={`${styles.homeContainer} flex-row items-center content-space-around wrap p-2`}
      >
        <img className="w-40 h-30  m-3" src={homeBanner} alt="quiz" />
        <div className="text-center p-1 m-1 mb-3">
          <h1>Welcome to evolt quiz!</h1>
          <h2 className="mt-1 mb-3">Let's see how much you score🤔?</h2>
          <div className="flex-row flex-center">
            <Link to="/category">
              <span className="primary-cta cta py-1 px-4 w-20 font-bold rounded-sm flex-row flex-center">
                Get Started
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
