import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

//decoration
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);


function UnderConstruction(props) {

    const classes = useStyles();
    const { ...rest } = props;

    return (
    <div>
      <Header
        color="transparent"
        brand="Build the Lanes"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/under-construction.jpeg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <h1 style={{padding:"150px 0"}}>This Page is under contruction. Please come back later. Aaron Miller will build this addition soon.</h1>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default UnderConstruction;
