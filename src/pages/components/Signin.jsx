import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../css/signin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logMeIn } from "../app/user";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [tryResErr, setTryResErr] = useState(false);

  const handleLogIn = () => {
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regexPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!regexEmail.test(email)) {
      document.getElementById("email").classList.add("border", "border-danger");
    } else if (!regexPwd.test(pwd)) {
      document.getElementById("pwd").classList.add("border", "border-danger");
    } else {
      // All inputs respect the REGEX Formulas
      // Let's examine accordance
      dispatch(logMeIn({ email, pwd }));
    }
  };

  return (
    <div id="signin">
      <Navbar menuSte={false} />

      {tryResErr && (
        <div className="alert alert-danger" role="alert">
          <strong>Credentials don't match our records</strong>
        </div>
      )}

      {user.loggedIn && (
        <div style={{zIndex: 5}} className="alert alert-success" role="alert">
          <strong>Logged In</strong> successfuly <br />
          You can now order your <Link to="/"><b><i>Next Tesla car</i></b></Link>
        </div>
      )}

      <form className="w-50">
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
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <div className="my-3">
          <label htmlFor="pwd" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="pwd"
            id="pwd"
            placeholder=""
            value={pwd}
            onChange={({ target }) => setPwd(target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleLogIn}
          className="px-5 my-4 btn bg-secondary bg-opacity-75 text-dark m-auto d-block"
        >
          Log In
        </button>

        <p className="text-secondary text-center">
          <u style={{ cursor: "no-drop" }}>Trouble Signing in ?</u>
        </p>

        <div className="my-3 d-flex container w-100 align-items-center gap-3 justify-content-center">
          <u className="w-25 border border-dark border-opacity-25"></u>
          <span className="text-secondary fw-semibold">Or</span>
          <u className="w-25 border border-dark border-opacity-25"></u>
        </div>

        <button className="btn bg-secondary bg-opacity-10 fw-semibold d-block w-100 m-auto ">
          <Link to="/signup">Create Account</Link>
        </button>
      </form>
      <Footer fixedBottom={true} />
    </div>
  );
};

export default Signin;
