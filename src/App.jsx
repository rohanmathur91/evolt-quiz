import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Signup,
  Home,
  Category,
  Quiz,
  Result,
  Profile,
  Leaderboard,
  NotFoundRoute,
} from "./pages";
import { Navbar, PrivateRoute, Toast } from "./components";
import { useTheme } from "./contexts";
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
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </div>
  );
};

export default App;
