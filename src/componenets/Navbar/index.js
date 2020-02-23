import React, { useState, useContext } from "react";
import { Link } from "@reach/router";
import Login from "../Login";
import Signup from "../Sign-up";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../../Route";
const Navbar = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSignup, setToggleSignup] = useState(false);
  const data = useContext(AuthContext);
  data.loggedIn = true
  console.log(data);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src={Logo} alt="applogo" width="112" height="28" />
          </a>

          <a
            href="/"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-start">
              <Link to="/services" className="navbar-item">
                Services
              </Link>
            </div>
            {data.loggedIn ? null : (
              <div className="navbar-item">
                <div className="buttons">
                  <button
                    onClick={() => setToggleLogin(!toggleLogin)}
                    className="button is-light"
                  >
                    Log in
                  </button>
                </div>
              </div>
            )}

            <div className="navbar-item">
              <div className="buttons">
                <button
                  onClick={() => setToggleSignup(!toggleSignup)}
                  className="button is-light"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggleLogin ? (
        <Login close={() => setToggleLogin(false)} />
      ) : (
        <span></span>
      )}
      {toggleSignup ? (
        <Signup close={() => setToggleSignup(false)} />
      ) : (
        <span></span>
      )}
    </nav>
  );
};
export default Navbar;
