import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/site-logo2.png";

export default function Navbar2(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "light" ? "dark" : "light"
        } bg-${props.mode === "dark" ? "success" : "dark"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="no sorry" id="top-logo" />
          </Link>
          <div
            className="form-check form-switch"
            style={{ color: props.mode === "dark" ? "black" : "white" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.buttonText}
            </label>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{
                    color: props.mode === "dark" ? "red" : "white",
                    fontWeight: "bolder",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{
                    color: props.mode === "dark" ? "red" : "white",
                    fontWeight: "bolder",
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
