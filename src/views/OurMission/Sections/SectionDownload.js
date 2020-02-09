/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
        <div className={classes.textCenter} style={{padding:"-1em -1em"}}>
        <GridContainer justify="center">
          <h2>Support Us on Patreon!</h2>
        </GridContainer>
        <Button style={{padding:"20px 40px", fontSize:"1.25rem"}} href="https://www.patreon.com/buildthelanes/posts" color="google">
          <i className={classes.socials + " fab fa-patreon"} /> Donate
        </Button>
      </div>
    </div>
  );
}
