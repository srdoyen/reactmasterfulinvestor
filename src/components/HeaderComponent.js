import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

class HeaderComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top navbar-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#nucampNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nucampNavbar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-home fa-lg"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fa fa-info fa-lg"></i> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  <i className="fa fa-book fa-lg"></i> Blogs
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-calculator fa-lg"></i>
                  Calculators
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="./calculators/index-fund-calculator.html"
                  >
                    Index Fund Calculator
                  </a>
                  <a
                    className="dropdown-item"
                    href="./calculators/rental-property-calculator.html"
                  >
                    Rental Property Calculator
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i className="fa fa-address-card fa-lg"></i> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
