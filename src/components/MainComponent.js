import React from "react";
import "../App.css";
import "../newStyle.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Calculators from "./CalculatorsComponent";
import Blogs from "./BlogsComponent.js";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class MainComponent extends React.Component {
  render() {
    return (
      <>
        <HeaderComponent />
        <Router>
          <Switch>
            <Route path="/home" component={HomeComponent} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/calculators" component={Calculators} />
            <Route path="/blogs" component={Blogs} />
            <Redirect to="/home" />
          </Switch>
        </Router>
        <FooterComponent />
      </>
    );
  }
}

export default MainComponent;
