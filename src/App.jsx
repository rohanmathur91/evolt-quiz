import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Category, Quiz, Result, Leaderboard } from "./pages";
import { Navbar } from "./components";
import { useTheme } from "./contexts";
import "./App.css";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
