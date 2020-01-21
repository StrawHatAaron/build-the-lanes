import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import OurMission from "views/OurMission/OurMission.js";
import WhyBikes from "views/WhyBikes/WhyBikes.js";
import AboutUs from "views/AboutUs/AboutUs.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ContactUs from "views/ContactUs/ContactUs.js";
//font awesome 
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarCrash, faSmog, faChartLine, faSmileWink} from "@fortawesome/free-solid-svg-icons";
library.add(faCarCrash, faSmog, faChartLine, faSmileWink);


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/why-bikes" component={WhyBikes} />
      <Route exact path="/login-page" component={LoginPage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route path="/" component={OurMission} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
