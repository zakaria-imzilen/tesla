import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../css/signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="position-relative" style={{ height: "100vh" }}>
      <Navbar menuSte={false} />

      <form className="w-75">
        <span className="text-secondary text-monospace">Steps 1 of 2</span>

        <h1 className="display-2 w-100 mb-5">Create Account</h1>

        <div className="my-3">
          <label
            htmlFor="firstName"
            className="form-label text-secondary fw-semibold"
          >
            First Name
          </label>
          <input
            type="text"
            className="form-control bg-secondary bg-opacity-25"
            name="firstName"
            id="firstName"
            aria-describedby="helpId"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="lastName"
            className="form-label text-secondary fw-semibold"
          >
            Last Name
          </label>
          <input
            type="text"
            className="form-control bg-secondary bg-opacity-25"
            name="lastName"
            id="lastName"
            aria-describedby="helpId"
          />
        </div>

        <p className="text-secondary" style={{ padding: "0 0 16px 0" }}>
          By continuing, I understand and agree to{" "}
          <a
            className="fw-semibold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tesla.com/about/legal?redirect=no#privacy-statement"
          >
            <u>Tesla’s Privacy Notice</u>
          </a>{" "}
          and{" "}
          <a
            className="fw-semibold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tesla.com/about/legal?redirect=no#terms-of-use"
          >
            <u>Terms of Use</u>
          </a>{" "}
          for creating a Tesla Account
        </p>

        <button
          className="btn btn-primary fw-semibold d-block w-50 m-auto"
          disabled
        >
          <Link to="/signuptwo">Next</Link>
        </button>
        <p
          className="mt-3 btn fw-semibold text-secondary d-block w-100 m-auto"
          disabled
          style={{fontSize: ".8rem"}}
        >
          <Link to="/signin"><u>Already have an account ? Try signing in</u></Link>
        </p>
      </form>

      <Footer fixedBottom={true} />
    </div>
  );
};

export default Signup;
