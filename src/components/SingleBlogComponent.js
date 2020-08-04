import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button, Form, Col } from "react-bootstrap";

var parse = require("html-react-parser");

class SingleBlogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", comment: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.name);
    fetch("https://localhost:3443/blogs/comments", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        blogId: this.props._id,
        name: this.state.name,
        email: this.state.email,
        comment: this.state.comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    event.preventDefault();
  }

  render() {
    const blog = this.props.blogPost;

    if (blog) {
      return (
        <>
          <div className="blog">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-lg-10">
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
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group as={Col} controlId="title">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="us"
                          placeholder="Enter name"
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="name">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="name">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          type="comment"
                          placeholder="Enter comment"
                          onChange={(e) =>
                            this.setState({ comment: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group>
                        <Button type="submit">Submit form</Button>
                      </Form.Group>
                    </Form>
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
