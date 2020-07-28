import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Calculators from "./CalculatorsComponent";
import Blogs from "./BlogsComponent.js";
import SingleBlogComponent from "./SingleBlogComponent.js";
import FooterComponent from "./FooterComponent";
import BlogEditor from "./BlogEditorComponent";
import HeaderComponent from "./HeaderComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
//import { BlogPosts } from "../data/blogs.js";

class MainComponent extends React.Component {
  state = {
    BlogPosts: [],
  };

  componentWillMount() {
    fetch("https://localhost:3443/blogs")
      .then((response) => response.json())
      .then((blogPosts) => this.setState({ BlogPosts: blogPosts }));
  }

  render() {
    const BlogWithTitle = ({ match }) => {
      return (
        <SingleBlogComponent
          blogPost={
            this.state.BlogPosts.filter(
              (blog) => blog.title === match.params.title
            )[0]
          }
        />
      );
    };
    return (
      <>
        <HeaderComponent />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <HomeComponent BlogPosts={this.state.BlogPosts} />}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/calculators" component={Calculators} />
          <Route
            exact
            path="/blogs"
            render={() => <Blogs BlogPosts={this.state.BlogPosts} />}
          />
          <Route exact path="/blogeditor" component={BlogEditor} />
          <Route exact path="/blogs/:blogTitle" component={BlogWithTitle} />
          <Redirect to="/home" />
        </Switch>
        <FooterComponent />
      </>
    );
  }
}

export default withRouter(MainComponent);
