import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomOrder from "./pages/components/CustomOrder";
import Signin from "./pages/components/Signin";
import Signup from "./pages/components/Signup";
import Home from "./pages/home";
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/customorder/:car" element={<CustomOrder />} />
            <Route path="*" element="404" />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
