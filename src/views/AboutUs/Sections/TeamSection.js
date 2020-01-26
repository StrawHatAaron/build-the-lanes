import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const aboutUsData = [
    {
      name: "Steffen Berr",
      title: "Transportation Engineer",
      description: "Planning, traffic analysis, roadway design",
      pic: "steffen.png"
    },{
      name: "Luis Martin",
      title: "Transportation Enginneer",
      description: "Roadway Design",
      pic: "luis.png"
    },{
      name: "Life Kelly",
      title: "Envoirmental Engineer",
      description: "Safety and Health Contract Managment",
      pic: "life.png"
    },{
      name: "Mark Westbrook",
      title: "Civil Engineer",
      description: "Safety and Health Contract Managment",
      pic: "mark.jpg"
    }
  ];

  const aboutUsContent = aboutUsData.map((c) => {
    return(
      <GridItem xs={12} sm={12} md={6}>
        <Card plain>
          <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
            <img 
              src={require("assets/img/faces/"+c.pic)} 
              alt="..." 
              className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            {c.name}
            <br />
            <small className={classes.smallTitle}>
              {c.title}
            </small>
          </h4>
        </Card>
      </GridItem>
    )
  })

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About Us</h2>
      <div className={classes.section}>
        We are a 501(c)(3) organization that specializes in implementing unfunded and overlooked bicycle
        infrastructure in American cities. We partner with your local towns to donate the needed engineering work
        to bring projects to life and coordinate private funding to fastrack construction.
        Our team is made up of CSU Sacramento alumni and graduating seniors.
      </div>
      <GridContainer>
        {aboutUsContent}
      </GridContainer>
    </div>
  );
}
