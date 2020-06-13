import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function VideoPlay() {
  return (
    <header>
      <div className="overlay"></div>
      <video
        playsInline="playsInline"
        autoPlay="autoPlay"
        muted="muted"
        loop="loop"
      >
        <source
          src={require("../img/coverr-tent-on-mountain-top-1585312178298.mp4")}
          type="video/mp4"
        />
      </video>
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-3">
              <b>Masterful Investor</b>
            </h1>
            <p className="h4 mb-0">Reach Your Financial Goals</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function BlogCard({ blogPost }) {
  return (
    <div className="card">
      <img
        src={require("../img/chrome-river.jpg")}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{blogPost.title}</h5>
        <p className="card-text">{blogPost.description.substring(0, 300)}...</p>
        <p className="card-text">
          <small className="text-muted">Last updated {blogPost.date}</small>
        </p>
      </div>
    </div>
  );
}

function HomeComponent(props) {
  const CardDeck = props.BlogPosts.slice(-3).map((blogPost) => {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="card-deck">
            <BlogCard blogPost={blogPost} />
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <VideoPlay />
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <h4>Greetings Friend!</h4>
              <p></p>
              <p>
                Prepare to be taken on a journey towards financial
                <code> mastery</code>. On this platform, I will share tons of
                content related to investing & personal finance. While I am by
                no means an expert, I hope to share with you all the lessons I
                have learned and delve into new ones alongside you! We are all
                in a state of growth, and building your life on your terms takes
                time. Here, I hope to share my experiences and other resources
                to help others better their financial position to reach their
                goals too.
              </p>
              <p>
                This website is strictly for <code>long term investing</code>{" "}
                and building wealth and achieving financial freedom the
                <code>boring</code> way. We will touch on all sorts of investing
                topics like stocks, index funds, real estate, and much, much
                more! Also, we will look at ways to overcome debt, minimize
                expenses, and increase income.
              </p>
              <p>
                Take a look at the <code>Calculators</code> page for financial
                resource calculators & the <code>Blogs</code> for content
                related to investing and finance.
              </p>
              <p>Enjoy!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 bottom">
              <div className="mx-auto">
                <div className="img-spacing d-flex">
                  <img
                    src={require("../img/icons8-calculator-100.png")}
                    style={{ width: "100px" }}
                    className="card-img-top mx-auto"
                    alt="..."
                  />
                </div>
                <h4>Calculators</h4>
                <p className="lead mb-0">
                  Budgeting, debt, stock, rental property, & financial
                  independence calculators
                </p>
              </div>
            </div>
            <div className="col-lg-4 bottom">
              <div className="mx-auto">
                <div className="img-spacing d-flex">
                  <img
                    src={require("../img/icons8-notepad-100.png")}
                    style={{ width: "100px" }}
                    className="card-img-top mx-auto"
                    alt="..."
                  />
                </div>
                <h4>Blogs</h4>
                <p className="lead mb-0">
                  Personal investing & finance experience as well as in depth
                  research!
                </p>
              </div>
            </div>
            <div className="col-lg-4 bottom">
              <div className="mx-auto">
                <div className="img-spacing d-flex">
                  <img
                    src={require("../img/icons8-more-info-100.png")}
                    style={{ width: "100px" }}
                    className="card-img-top mx-auto"
                    alt="..."
                  />
                </div>
                <h4>About Me</h4>
                <p className="lead mb-0">
                  Learn more about me specifically & feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {CardDeck}
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-sm mx-auto">
            <div className="card">
              <h3 className="card-header bg-dark text-white">
                Subscribe to my Newsletter
              </h3>
              <div className="card-body">
                <form id="reserveForm">
                  <div className="form-group row">
                    <label className="col-sm-6 col-form-label" htmlFor="Date">
                      Name
                    </label>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="name"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-6 col-form-label" htmlFor="Date">
                      Email
                    </label>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <button type="button" className="btn btn-success">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
