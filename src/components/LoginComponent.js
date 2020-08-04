import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import BlogEditorComponent from "./BlogEditorComponent";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isSubmitted: false, token: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeChild = this.changeChild.bind(this);
  }

  changeChild(data) {
    this.setState({ isSubmitted: true, token: data.token });
  }

  handleSubmit(event) {
    fetch("https://localhost:3443/users/login", {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => this.changeChild(data));

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        {!this.state.isSubmitted && (
          <>
            <br />
            <h2>Administrator Login</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Col} controlId="title">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="us"
                  placeholder="Enter username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Button type="submit">Submit form</Button>
              </Form.Group>
            </Form>
          </>
        )}
        {this.state.isSubmitted && (
          <BlogEditorComponent token={this.state.token} />
        )}
      </div>
    );
  }
}

export default Login;
