import { Route, Routes } from "react-router-dom";
import { Home, Rules, Category } from "./pages";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;
