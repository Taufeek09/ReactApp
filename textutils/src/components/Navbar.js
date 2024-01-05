import { Link } from "react-router-dom";
import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}
      >
        <Link className="navbar-brand font-weight-bolder ml-3" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link font-weight-bolder" to="/">
                {props.home} <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link font-weight-bolder" to="/About">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
                                                                                                                                                                                                                                                                                                                                                                                  <input
                                                                                                                                                                                                                                                                                                                                                                                                className="form-control mr-sm-2"
                                                                                                                                                                                                                                                                                                                                                                                                              type="search"
                                                                                                                                                                                                                                                                                                                                                                                                                            placeholder="Search"
                                                                                                                                                                                                                                                                                                                                                                                                                                          aria-label="Search"
                                                                                                                                                                                                                                                                                                                                                                                                                                                      /> */}
          {/* <button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              className="btn btn-outline-success my-2 my-sm-0"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            type="submit"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Search
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </button> */}

          {/* </form> */}

          <div
            className="custom-control custom-switch mr-4"
            style={{ cursor: "pointer" }}
          >
            <input
              style={{ cursor: "pointer" }}
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={props.togglemode}
            />
            <label
              className={`custom-control-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="customSwitch1"
              style={{ cursor: "pointer" }}
            >
              Enable {props.mode === "dark" ? "Light" : "Dark"} Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.defaultProps = {
  home: "Home",
  about: "About",
};
