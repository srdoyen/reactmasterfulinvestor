import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function RenderBlogItem({ blogPost }) {
  return (
    <Link to={`/blogs/${blogPost.id}`}>
      <div className="row">
        <div className="col">
          <div className="list-group">
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{blogPost.title}</h5>
                <small className="text-muted d-none d-md-block">
                  Last updated {blogPost.date}
                </small>
              </div>
              <p className="mb-1">
                {blogPost.description.substring(0, 300)}...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Blogs(props) {
  const blogPosts = props.BlogPosts.map((blogPost) => {
    return (
      <div className="row" key={blogPost.id}>
        <div className="col-2"></div>
        <div className="col-8">
          <RenderBlogItem blogPost={blogPost} />
        </div>
        <div className="col-2"></div>
      </div>
    );
  });
  return <>{blogPosts}</>;
}

export default Blogs;
