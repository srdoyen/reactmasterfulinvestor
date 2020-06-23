import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Form, Col } from "react-bootstrap";

class BlogEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", img: "", blogEntry: "" };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(form);
  };

  render() {
    return (
      <div className="container">
        <br />
        <h2>Blog Post</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group as={Col} controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="title" placeholder="Enter title" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.File
              id="exampleFormControlFile1"
              label="Example file input"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Blog Entry</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onInit={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ blogEntry: data });
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
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
