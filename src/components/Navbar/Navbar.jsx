import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav
            className={`${styles.navbar} flex-row content-space-between items-center sticky top-0 z-1 w-100 py-2 px-6`}
        >
            <Link to="/" className="text-xl font-black">
                Evolt
            </Link>
            <Link
                to="/login"
                className={`${styles.login__cta} transition-2 py-1 px-2 rounded-sm`}
            >
                Login
            </Link>
        </nav>
    );
};
