import React from "react";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<nav class="navbar flex-row content-space-between items-center fixed top-0 z-1 w-100  py-2 px-6">
			<a class="text-xl font-black" href="./index.html">
				Evolt
			</a>
			<a
				class="login-cta transition-2 py-1 px-2 rounded-sm"
				href="./auth/login.html"
			>
				login
			</a>
		</nav>
	);
};
