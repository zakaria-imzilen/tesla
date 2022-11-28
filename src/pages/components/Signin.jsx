import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../css/signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Navbar menuSte={false} />
      <form className="w-75">
        <h1 className="display-2 w-100 mb-5">Sign in</h1>

        <div className="my-3">
          <label
            htmlFor="email"
            className="form-label text-secondary fw-semibold"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control bg-secondary bg-opacity-25"
            name="email"
            id="email"
            aria-describedby="helpId"
          />
        </div>

        <p className="text-secondary text-center">
          <u style={{ cursor: "no-drop" }}>Trouble Signing in ?</u>
        </p>

        <div className="my-3 d-flex container w-100 align-items-center gap-3 justify-content-center">
          <u className="w-25 border border-dark border-opacity-25"></u>
          <span className="text-secondary fw-semibold">Or</span>
          <u className="w-25 border border-dark border-opacity-25"></u>
        </div>

        <button className="btn bg-secondary bg-opacity-10 fw-semibold d-block w-50 m-auto">
          <Link to="/signup">Create Account</Link>
        </button>
      </form>
      <Footer fixedBottom={true} />
    </>
  );
};

export default Signin;
