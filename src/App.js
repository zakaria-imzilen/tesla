import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/components/Account";
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
          <Route path="*" element="404" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
