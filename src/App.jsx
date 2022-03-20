import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
