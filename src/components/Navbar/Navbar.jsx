import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`${styles.navbar} flex-row content-space-between items-center sticky top-0 z-1 w-100 py-2 px-6`}
    >
      <Link to="/" className={`${styles.heading} font-semibold`}>
        Evolt Quiz
      </Link>
      <div className="flex-row items-center">
        <Link
          to="/login"
          className={`${styles.loginCta} transition-2 rounded-sm text-base font-regular`}
        >
          Login
        </Link>
        <button
          title="Change theme"
          onClick={toggleTheme}
          className={`${styles.themeBtn} rounded-sm icon-container ml-1 transition-2`}
        >
          <span className="material-icons-outlined">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </div>
    </nav>
  );
};
