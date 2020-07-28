import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

var parse = require("html-react-parser");

class SingleBlogComponent extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const blog = this.props.blogPost;

    if (blog) {
      return (
        <>
          <div className="blog">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-lg-8">
                <h1 className="postTitle">{blog.title}</h1>
                <p className="lead">
                  by
                  <Link to={`/contact`}> {blog.author}</Link>
                </p>
                <p>Last updated: {blog.updatedAt.substring(0, 10)}</p>
                <img
                  className="img-fluid rounded"
                  src={require(`../img/${blog.image}`)}
                  alt=""
                />
                <hr />
                <div className="lead blogText">{parse(blog.description)}</div>

                <hr />

                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea className="form-control" rows="3"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>

                <div className="media mb-4">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src="http://placehold.it/50x50"
                    alt=""
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                </div>

                <div className="media mb-4">
                  <img
                    className="d-flex mr-3 rounded-circle"
                    src="http://placehold.it/50x50"
                    alt=""
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                    <div className="media mt-4">
                      <img
                        className="d-flex mr-3 rounded-circle"
                        src="http://placehold.it/50x50"
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="mt-0">Commenter Name</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div className="media mt-4">
                      <img
                        className="d-flex mr-3 rounded-circle"
                        src="http://placehold.it/50x50"
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="mt-0">Commenter Name</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card my-4">
                  <h5 className="card-header">Search</h5>
                  <div className="card-body">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">
                          Go!
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card my-4">
                  <h5 className="card-header">Categories</h5>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <Link>Web Design</Link>
                          </li>
                          <li>
                            <Link>HTML</Link>
                          </li>
                          <li>
                            <Link>Freebies</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <Link>JavaScript</Link>
                          </li>
                          <li>
                            <Link>CSS</Link>
                          </li>
                          <li>
                            <Link>Tutorials</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card my-4">
                  <h5 className="card-header">Side Widget</h5>
                  <div className="card-body">
                    You can put anything you want inside of these side widgets.
                    They are easy to use, and feature the new Bootstrap 4 card
                    containers!
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </>
      );
    }
    return <div />;
  }
}

export default SingleBlogComponent;
