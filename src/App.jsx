import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Rules, Category, Quiz, Result } from "./pages";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
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
