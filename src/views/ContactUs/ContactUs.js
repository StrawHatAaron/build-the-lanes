import React from "react";

import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/components.js";
//sections for this page
import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

function ContactUs(props) {

    const classes = useStyles();
    const { ...rest } = props;

    return (
        <>
            <Header
                brand="Build the Lanes"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    color: "white",
                    marginLeft: "2em"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/our-mission.jpeg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                        <div className={classes.brand}>
                            <h1 className={classes.title} 
                                style={{
                                    backgroundColor:"#4caf50",
                                    padding: "20px",
                                    borderRadius: "20px"
                                }}>
                                Contact Us
                            </h1>
                        </div>
                        </GridItem>
                    </GridContainer>
                </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <WorkSection />
                </div>
            <Footer />
        </>
    );
}

export default ContactUs;
