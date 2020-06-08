import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class AboutComponent extends React.Component {
  render() {
    return (
      <>
        <div>
          <div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>About Me</h2>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="container">
              <div className="row row-content">
                <div className="col-sm-6">
                  <h3>Our Mission</h3>
                  <p>My name is Scott Doyen & I would like to meet you!</p>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <h3 className="card-header bg-primary text-white">
                      Facts At a Glance
                    </h3>
                    <div className="card-body">
                      <dl className="row">
                        <dt className="col-6">Born</dt>
                        <dd className="col-6">February 3, 1800</dd>
                        <dt className="col-6">City of Origin</dt>
                        <dd className="col-6">Fullerton, CA</dd>
                        <dt className="col-6">Alma Mater</dt>
                        <dd className="col-6">
                          University of California, Davis
                        </dd>
                        <dt className="col-6">Experience</dt>
                        <dd className="col-6">3+ years</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutComponent;
