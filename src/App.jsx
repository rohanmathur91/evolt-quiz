import { Route, Routes } from "react-router-dom";
import { Home, Category } from "./pages";
import { Navbar } from "./components";
import Mockman from "mockman-js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;
