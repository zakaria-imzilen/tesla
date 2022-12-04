import { useState } from "react";
import TeslaLogo from "./images/tesla.png";
import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ menuSte, homePage }) => {
  const [menu, setMenu] = useState(false);

  const renderAsideClasses = () => {
    return menu
      ? "position-absolute top-0 end-0 w-75 bg-light py-5 px-4"
      : "invisible";
  };

  return (
    <nav
      className={`position-fixed container-fluid py-2 px-3 ${
        !homePage && "bg-light shadow-sm"
      }`}
    >
      <div className="w-80 container d-flex justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <Link to="/">
            <img src={TeslaLogo} alt="Tesla Logo" width={30} />
            <span style={{ fontFamily: "Athene", fontSize: "1.2rem" }}>
              TESLA
            </span>
          </Link>
        </div>
        {menuSte && (
          <>
            <button
              className="btn bg-secondary bg-opacity-25 rounded-1 fw-bold"
              onClick={() => setMenu(!menu)}
              id="btn-toggler"
            >
              Menu
            </button>

            <div id="list-toggle" className="d-flex gap-5">
              <Link to="/customorder/model3">
                <span className="fs-6 font-monospace fw-bold">Model 3</span>
              </Link>
              <Link to="/customorder/modelY">
                <span className="fs-6 font-monospace fw-bold">Model Y</span>
              </Link>
              <Link to="/customorder/modelx">
                <span className="fs-6 font-monospace fw-bold">Model X</span>
              </Link>
              <Link to="/customorder/models">
                <span className="fs-6 font-monospace fw-bold">Model S</span>
              </Link>
              <Link to="/signup">
                <span className="fs-6 font-monospace fw-bold">Sign Up</span>
              </Link>
              <Link to="/signup">
                <span className="fs-6 font-monospace fw-bold">Sign In</span>
              </Link>
            </div>
          </>
        )}
      </div>

      <aside className={renderAsideClasses()}>
        <div className="d-block text-end">
          <i onClick={() => setMenu(!menu)} className="bi bi-x-circle-fill"></i>
        </div>
        <Link to="/customorder/model3">
          <span className="fs-6 font-monospace fw-bold">Model 3</span>
        </Link>
        <Link to="/customorder/modelY">
          <span className="fs-6 font-monospace fw-bold">Model Y</span>
        </Link>
        <Link to="/customorder/modelx">
          <span className="fs-6 font-monospace fw-bold">Model X</span>
        </Link>
        <Link to="/customorder/models">
          <span className="fs-6 font-monospace fw-bold">Model S</span>
        </Link>
        <Link to="/signup">
          <span className="fs-6 font-monospace fw-bold">Sign Up</span>
        </Link>
        <Link to="/signup">
          <span className="fs-6 font-monospace fw-bold">Sign In</span>
        </Link>{" "}
      </aside>
    </nav>
  );
};

export default Navbar;
