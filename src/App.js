import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/components/Account";
import Signin from "./pages/components/Signin";
import Signup from "./pages/components/Signup";
import Home from "./pages/home";
import Testdrive from "./pages/Testdrive";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/testdrive" element={<Testdrive />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element="404" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
