import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{"background": "#ff95a7"}}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex" id="navbar">
          <Link className="navbar-brand col-lg-3 me-0 fs-3" to="/">
            NCNews
          </Link>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <Link className="nav-link fs-5" aria-current="page" to="/">
                Косметика
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" aria-current="page" to="/beauty">
                Красота
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" aria-current="page" to="/fashion">
                Мода
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link fs-5 dropdown-toggle"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-current="page"
                to="/about"
              >
                О нас
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/about/history"
                  >
                    История
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/about/production"
                  >
                    Производство
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
