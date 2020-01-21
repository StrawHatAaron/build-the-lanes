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
        <div className={classes.textCenter + " " + classes.sharingArea}>
        <GridContainer justify="center">
          <h3>Support us!</h3>
        </GridContainer>
        <Button color="google">
          <i className={classes.socials + " fab fa-patreon"} /> Donate
        </Button>
        <Button color="info">
          <i className={classes.socials + " fab fa-linkedin"} /> Connect
        </Button>
      </div>
    </div>
  );
}
