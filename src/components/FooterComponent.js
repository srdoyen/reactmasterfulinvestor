import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/calculators">Calculators</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col col-sm-5 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://facebook.com/"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>
          <div className="col col-sm-4 text-center">
            <h5>Contact</h5>
            <a role="button" className="btn btn-link" href="tel:+18005222222">
              <i className="fa fa-phone"></i> 1-800-522-2222
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:campsites@nucamp.co"
            >
              <i className="fa fa-envelope-o"></i> srdoyen@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
