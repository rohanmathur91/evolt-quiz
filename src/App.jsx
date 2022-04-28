import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Signup,
  Home,
  Category,
  Quiz,
  Result,
  Leaderboard,
} from "./pages";
import { Navbar, Toast } from "./components";
import { useTheme } from "./contexts";
import Mockman from "mockman-js";
import "./App.css";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;
