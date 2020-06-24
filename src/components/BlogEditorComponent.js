import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Form, Col } from "react-bootstrap";
import { BlogPosts } from "../data/blogs.js";

class BlogEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", imgUrl: "", blogEntry: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //const form = event.currentTarget;
    console.log(this.state.title);
    console.log(this.state.name);
    console.log(this.state.imgUrl);
    console.log(this.state.blogEntry);

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <br />
        <h2>Blog Post</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Col} controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter title"
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <br />
            <Form.File
              onChange={(e) => {
                this.setState({
                  imgUrl: e.target.value.replace("C:\\fakepath\\", ""),
                });
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Blog Entry</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!");
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ blogEntry: data });
              }}
            />
            <br />
            <Button type="submit">Submit form</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default BlogEditor;
