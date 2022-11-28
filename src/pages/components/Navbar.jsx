import { useState } from "react";
import TeslaLogo from "./images/tesla.png";
import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ menuSte }) => {
  const [menu, setMenu] = useState(false);

  const renderAsideClasses = () => {
    return menu
      ? "position-absolute top-0 end-0 w-75 bg-light py-5 px-4"
      : "invisible";
  };

  return (
    <nav className="position-fixed container-fluid py-4 px-3">
      <div className="w-80 container d-flex justify-content-between">
        <div className="d-flex gap-2 align-items-center">
          <img src={TeslaLogo} alt="Tesla Logo" width={40} />
          <span style={{ fontFamily: "Athene", fontSize: "1.5rem" }}>
            <Link to="/">TESLA</Link>
          </span>
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

            <div id="list-toggle" className="d-flex gap-3">
              <Link to="/account">
                <span className="fs-6 font-monospace fw-bold">Sign Up</span>
              </Link>
            </div>
          </>
        )}
      </div>

      <aside className={renderAsideClasses()}>
        <div className="d-block text-end">
          <i onClick={() => setMenu(!menu)} className="bi bi-x-circle-fill"></i>
        </div>
        <Link to="/signup">
          <h4 className="display-6 text-start my-5">Sign Up</h4>
        </Link>
      </aside>
    </nav>
  );
};

export default Navbar;
