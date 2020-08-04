import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  FaHome,
  FaInfo,
  FaBook,
  FaAddressCard,
  FaCalculator,
  FaPencilAlt,
} from "react-icons/fa";

class HeaderComponent extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="black" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/home">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link href="/about">
              <FaInfo /> About Us
            </Nav.Link>
            <Nav.Link href="/contact">
              <FaAddressCard /> Contact Us
            </Nav.Link>
            <Nav.Link href="/blogs">
              <FaBook /> Blogs
            </Nav.Link>
            <NavDropdown
              title={
                <span>
                  <FaCalculator /> Calculators
                </span>
              }
            >
              <NavDropdown.Item href="/debt_calculator">
                Debt Calculator
              </NavDropdown.Item>
              <NavDropdown.Item href="/rental_property_calculator">
                Rental Property Calculator
              </NavDropdown.Item>
              <NavDropdown.Item href="/stock_calculator">
                Stock Calculator
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">
              <FaPencilAlt /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderComponent;
