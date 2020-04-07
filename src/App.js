import React, {useState, useEffect} from 'react';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
//template designs from material ui and creative time
import "assets/scss/material-kit-react.scss?v=1.8.0";
// pages for this product
import OurMission from "views/OurMission/OurMission.js";
import WhyBikes from "views/WhyBikes/WhyBikes.js";
import AboutUs from "views/AboutUs/AboutUs.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import Approach from "views/Approach/Approach.js";
import UnderConstruction from "views/UnderConstruction/UnderConstruction";

import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/HomeLoggedIn/HomePage.js";
import AdminPage from "views/AdminLoggedIn/AdminPage.js";

//uses the history part
import {history} from 'helpers/history';
import {Role} from 'helpers/role'
import {authenticationService} from 'services/authentication.service';
import {PrivateRoute} from 'utils/PrivateRoute';


class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          currentUser: null,
          isAdmin: false
      };
  }

  componentDidMount() {
      authenticationService.currentUser.subscribe(x => this.setState({
          currentUser: x,
          isAdmin: x && x.role === Role.Admin
      }));
  }

  logout() {
      authenticationService.logout();
      history.push('/login');
  }

  render(){
    const { currentUser, isAdmin } = this.state;
    return(
      <HashRouter history={history}>
        <Switch>
          <PrivateRoute
            key="home-authed"
            exact path="/home"
            component={HomePage} />
          <PrivateRoute
            key="admin-authed"
            path="/admin"
            roles={[Role.Admin]}
            component={AdminPage} />
            
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
      </HashRouter>
    )
  }
}

export default App;
