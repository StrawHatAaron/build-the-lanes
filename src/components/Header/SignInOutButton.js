//Written by Aaron Miller
import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import {authenticationService} from 'services/authentication.service';
import {history} from 'helpers/history';


export class SignInOutButton extends React.Component {

  constructor(){
    this.state = {
      signIn:false,
    }
  }

  componentDidMount(){
    console.log('email:', localStorage.getItem('email'));
    console.log('password:', localStorage.getItem('password'));
    console.log('token:', localStorage.getItem('token'));
    console.log('f_name:', localStorage.getItem('f_name'));
  }

  render(){
    return(
      <Link
        to={"/signin"}
        key={"header-link-signin"}>
        Sign In
      </Link>
    )
  }
}
