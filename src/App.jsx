import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Rules, Category, Quiz, Result } from "./pages";
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
        <Route path="/rules/:quizId" element={<Rules />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
