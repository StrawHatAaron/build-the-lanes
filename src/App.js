import React, {useState, useEffect} from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
//template designs from material ui and creative time
import "assets/scss/material-kit-react.scss?v=1.8.0";
// pages for this product
import OurMission from "views/OurMission/OurMission.js";
import WhyBikes from "views/WhyBikes/WhyBikes.js";
import AboutUs from "views/AboutUs/AboutUs.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import Approach from "views/Approach/Approach.js";
import UnderConstruction from "views/UnderConstruction/UnderConstruction";
//uses the history part
import {history} from './helpers/history';
import {Role} from './helpers/role'
import {authenticationService} from './services/authentication.service';


function App(){

  // const [currentUser, setCurrentUser] = useState({
  //   currentUser: null,
  //   isAdmin: false
  // });
  // const [isAdmin, setIsAdmin] = useState(false);
  //
  // useEffect(() => {
  //   authenticationService.currentUser.subscribe(x => setCurrentUser({
  //     currentUser: x,
  //     isAdmin: x && x.role === Role.Admin
  //   }));
  // })
  //
  // function logout() {
  //   authenticationService.logout();
  //   history.push('/login');
  // }

  return(
    <HashRouter history={history}>
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
    </HashRouter>
  )
}

export default App;
