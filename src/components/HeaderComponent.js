import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
                <a className="nav-link" href="#">
                  <i className="fa fa-home fa-lg"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="aboutus.html">
                  <i className="fa fa-info fa-lg"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blogs.html">
                  <i className="fa fa-book fa-lg"></i> Blogs
                </a>
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
                <a className="nav-link" href="contactus.html">
                  <i className="fa fa-address-card fa-lg"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
