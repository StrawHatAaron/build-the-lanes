import React, {useState, useEffect} from 'react';
import { HashRouter, Route, Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import HeaderLoggedIn from "components/Header/HeaderLoggedIn.js"


// import AdminPage from "views/AdminLoggedIn/AdminPage.js";


export default function HomeLoggedIn() {
  return (
        <div>
            <h1>Build The Lanes Web App - CSc 174</h1>
            <p>You're logged in already!!!</p>
            <HeaderLoggedIn></HeaderLoggedIn>
        </div>
    );
}
