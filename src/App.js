import React, {useReducer} from 'react';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
//template designs from material ui and creative time
import "assets/scss/material-kit-react.scss?v=1.8.0";
// pages for this product
import OurMission from "views/OurMission/OurMission.js";
import WhyBikes from "views/WhyBikes/WhyBikes.js";
import AboutUs from "views/AboutUs/AboutUs.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import Approach from "views/Approach/Approach.js";
import UnderConstruction from "views/UnderConstruction/UnderConstruction.js";
import SigninPage from "views/SigninPage/SigninPage.js";
import SignUp from "views/SignUp/SignUp.js";
import HomeLoggedIn from "views/HomeLoggedIn/HomeLoggedIn.js";
import AdminPage from "views/AdminLoggedIn/AdminPage.js";
//uses the history part
import {history} from 'helpers/history';
import {Role} from 'helpers/role'
import {authenticationService} from 'services/authentication.service';
import {PrivateRoute} from 'utils/PrivateRoute';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Button from "@material-ui/core/Button";

function reducer(state, action){

  console.log("pressed")

  switch(action.type){
    case true:
      localStorage.setItem("signedIn", false);
      return "sign out";
    case false:
      localStorage.setItem("signedIn", true);
      return "sign in";
    default:
      return state;
  }
}

const App = () =>{

  const [count, dispatch] = useReducer(reducer, "sign out");


  return(
    <HashRouter history={history}>
      <h1>obj: {count}</h1>
      <button onClick={() => dispatch({type: localStorage.getItem("signedIn")})}>sign</button>
      <Header
        color="success"
        brand="Build The Lanes˚"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Switch>
        <Route
          key="why-bikes"
          exact path="/why-bikes"
          component={WhyBikes} />
        <Route
          key="signin-page"
          exact path="/signin"
          component={SigninPage} />
        <Route
          key="sign-up"
          exact path="/sign-up"
          component={SignUp} />
        <Route
          key="about-us"
          exact path="/about-us"
          component={AboutUs} />
        <Route
          key="contact-us"
          exact path="/contact-us"
          component={ContactUs} />
        <Route
          key="our-mission"
          exact path="/"
          component={OurMission} />
        <Route
          key="approach"
          exact path="/approach"
          component={Approach} />
        <Route
          key="home-page"
          path="/home-logged-in"
          component={HomeLoggedIn} />
      </Switch>
    </HashRouter>
  )
}

export default App;
