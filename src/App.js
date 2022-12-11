import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomOrder from "./pages/components/CustomOrder";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Testdrive from "./pages/Testdrive";
import { store } from "./store/store";

function App() {
	return (
		<div className="app">
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/testdrive" element={<Testdrive />} />
						<Route path="/customorder/:car" element={<CustomOrder />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
