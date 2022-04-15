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
      <Link to="/" className="text-xl font-black">
        Evolt
      </Link>

      <div className="flex-row items-center">
        <Link
          to="/login"
          className={`${styles.loginCta} transition-2 py-1 px-2 rounded-sm`}
        >
          Login
        </Link>

        <button
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
