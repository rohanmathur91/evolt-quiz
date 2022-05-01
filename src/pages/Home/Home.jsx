import React from "react";
import { Link } from "react-router-dom";
import { useScrollToTop, useDocumentTitle } from "../../hooks";
import { Footer } from "../../components";
import { homeBanner } from "../../staticData";

export const Home = () => {
  useScrollToTop();
  useDocumentTitle("Home");

  return (
    <>
      <main className="max-container main-container flex-row items-center content-space-around wrap p-2">
        <img className="w-40 h-30 mt-3 mx-3" src={homeBanner} alt="quiz" />
        <div className="text-center p-1 m-1 mb-3">
          <h2>Welcome to evolt quiz!</h2>
          <h3 className="mt-1 mb-3">Let's see how much you score🤔?</h3>
          <div className="flex-row flex-center">
            <Link
              to="/category"
              className="cta primary-cta py-1 px-3 font-semibold rounded-sm icon-container"
            >
              Get Started
              <span className="cta-icon material-icons-outlined ml-1 transition-3">
                trending_flat
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
