import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar flex-row content-space-between items-center fixed top-0 z-1 w-100  py-2 px-6">
			<Link to="/" className="text-xl font-black">
				Evolt
			</Link>
			<Link to="/login" className="login-cta transition-2 py-1 px-2 rounded-sm">
				Login
			</Link>
		</nav>
	);
};
