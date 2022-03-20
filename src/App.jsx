import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
