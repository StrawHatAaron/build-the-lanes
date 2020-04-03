import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import OurMission from "views/OurMission/OurMission.js";
import WhyBikes from "views/WhyBikes/WhyBikes.js";
import AboutUs from "views/AboutUs/AboutUs.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import Approach from "views/Approach/Approach.js";
import UnderConstruction from "views/UnderConstruction/UnderConstruction";
//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarCrash, faSmog, faChartLine, faSmileWink} from "@fortawesome/free-solid-svg-icons";
library.add(faCarCrash, faSmog, faChartLine, faSmileWink);

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <Switch>
      <Route
        key="why-bikes"
        exact path="/why-bikes"
        component={WhyBikes} />
      <Route
        key="login-page"
        exact path="/login"
        component={LoginPage} />
      <Route
        key="sign-up"
        exact path="/sign-up"
        component={UnderConstruction} />
      <Route
        key="about-us"
        exact path="/about-us"
        component={AboutUs} />
      <Route
        key="contact-us"
        exact path="/contact-us"
        component={ContactUs} />
      <Route
        key="home-page"
        exact path="/"
        component={OurMission} />
      <Route
        key="approach"
        exact path="/approach"
        component={Approach} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
