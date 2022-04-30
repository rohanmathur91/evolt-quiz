import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} flex-column flex-center py-7 mx-4`}>
      <p className="mb-2">Made with ❤️ by Rohan Mathur.</p>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          className={`${styles.link} mx-1`}
          href="https://github.com/rohanmathur91/evolt-quiz"
        >
          <i
            className={`${styles.icons} fa fa-github ${styles.icons} transition-2`}
          ></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={`${styles.link} mx-1`}
          href="https://twitter.com/@rohanmathur91"
        >
          <i className={`${styles.icons} fa fa-twitter transition-2`}></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={`${styles.link} mx-1`}
          href="https://www.linkedin.com/in/rohanmathur04/"
        >
          <i
            className={`${styles.icons} fa fa-linkedin-square transition-2`}
          ></i>
        </a>
      </div>
    </footer>
  );
};
