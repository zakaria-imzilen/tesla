import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../css/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signMeUp } from "../app/user";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    const regexEmail =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

    if (firstName.length < 3) {
      alert("First Name should be at least 4 characters");
    } else if (lastName.length < 3) {
      alert("Last Name should be at least 4 characters");
    } else if (regexEmail.test(email)) {
      alert("Enter a valid email format");
    } else if (pwd.length < 7) {
      alert("Password should be at least 8 characters");
    } else {
      // Everything is okay
      // Just log you in, not sign in you up
      dispatch(signMeUp({ firstName, lastName, email }));
      navigate("/");
    }
  };

  return (
    <div id="signup" className="position-relative">
      <Navbar menuSte={false} />

      <form className="w-75 position-fixed top-50 start-50 translate-middle">
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
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
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
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
          />
        </div>

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
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="pwd"
            className="form-label text-secondary fw-semibold"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control bg-secondary bg-opacity-25"
            name="pwd"
            id="pwd"
            value={pwd}
            onChange={({ target }) => setPwd(target.value)}
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
          onClick={handleSignUp}
          type="submit"
        >
          Submit
        </button>
        <p
          className="mt-3 btn fw-semibold text-secondary d-block w-100 m-auto"
          style={{ fontSize: ".8rem" }}
        >
          <Link to="/signin">
            <u>Already have an account ? Try signing in</u>
          </Link>
        </p>
      </form>

      <Footer fixedBottom={true} />
    </div>
  );
};

export default Signup;
