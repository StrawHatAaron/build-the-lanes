import React, {useState, useEffect} from 'react';
import { HashRouter, Route, Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import {MapedDatabasePages, homeLoggedInPath, DatabasePages} from "components/Header/HeaderLinks.js";
import Users from "views/HomeLoggedIn/Sections/Users.js"

const DatabaseButtonsWrapperStyle = {
  display: "grid",
  gridTemplateColumns: "20% 20% 20% 20% 20%",
}

const DataRoutesStyle = {
  margin:"100px"
}

const DataRoutes = DatabasePages.map((c) => {
  return(
    <>
    <Route
      key={c.path}
      exact path={c.path}
      component={c.componentSection}
    />
    </>
  )
})

export default function HeaderLoggedIn() {
  return (
    <div>
      <div style={DatabaseButtonsWrapperStyle}>
        {MapedDatabasePages}
      </div>
      <div style={DataRoutesStyle}>
        {DataRoutes}
      </div>
    </div>
  );
}
