import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth, useTheme } from "../../contexts";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`${styles.navbar} sticky top-0 z-1 w-100 py-2 px-5`}>
      <div className="max-container flex-row content-space-between items-center">
        <Link to="/" className={`${styles.logo} font-semibold`}>
          Evolt Quiz
        </Link>

        <div className="flex-row items-center">
          <NavLink
            to={user ? "/profile" : "/login"}
            className={({ isActive }) =>
              `${styles.navIcon} ${
                isActive ? styles.active : ""
              } transition-2 tooltip rounded-sm icon-container font-regular`
            }
          >
            <span className="material-icons-round">person_outline</span>
            <span className="tooltip-text">{user ? "Profile" : "Login"}</span>
          </NavLink>
          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              `${styles.navIcon} ${
                isActive ? styles.active : ""
              } transition-2 tooltip rounded-sm icon-container font-regular`
            }
          >
            <span className="material-icons-round">leaderboard</span>
            <span className="tooltip-text">Leaderboard</span>
          </NavLink>

          <button
            onClick={toggleTheme}
            className={`${styles.navIcon} tooltip rounded-sm icon-container transition-2`}
          >
            <span className="material-icons-outlined">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
            <span className="tooltip-text">
              Change to {theme === "dark" ? "light" : "dark"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
