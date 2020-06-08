import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SingleBlogComponent(props) {
  const blog = props.blogPost;
  if (blog) {
    return (
      <>
        <div class="blog">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-lg-8">
              <h1 class="postTitle">{blog.title}</h1>
              <p class="lead">
                by
                <Link to={`/contact`}> {blog.author}</Link>
              </p>
              <p>Posted on {blog.date}</p>
              <img
                class="img-fluid rounded"
                src={require("../img/Canva - Photo of High-Rise Buildings.jpg")}
                alt=""
              />
              <hr />
              <p class="lead blogText">{blog.description}</p>

              <hr />

              <div class="card my-4">
                <h5 class="card-header">Leave a Comment:</h5>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <div class="media mb-4">
                <img
                  class="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt=""
                />
                <div class="media-body">
                  <h5 class="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>

              <div class="media mb-4">
                <img
                  class="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt=""
                />
                <div class="media-body">
                  <h5 class="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div class="media mt-4">
                    <img
                      class="d-flex mr-3 rounded-circle"
                      src="http://placehold.it/50x50"
                      alt=""
                    />
                    <div class="media-body">
                      <h5 class="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div class="media mt-4">
                    <img
                      class="d-flex mr-3 rounded-circle"
                      src="http://placehold.it/50x50"
                      alt=""
                    />
                    <div class="media-body">
                      <h5 class="mt-0">Commenter Name</h5>
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
            <div class="col-md-2">
              <div class="card my-4">
                <h5 class="card-header">Search</h5>
                <div class="card-body">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search for..."
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div class="card my-4">
                <h5 class="card-header">Categories</h5>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card my-4">
                <h5 class="card-header">Side Widget</h5>
                <div class="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </>
    );
  }
  return <div />;
}

export default SingleBlogComponent;
