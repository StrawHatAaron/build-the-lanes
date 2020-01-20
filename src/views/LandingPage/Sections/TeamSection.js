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

  const aboutUsData = [{
    name:"Steffen Berr",
    title:"Transportation Engineer",
    description:"Planning, traffic analysis, roadway design",
    pic:"steffen"
  },{
    name:"Luis",
    title:"Traffic Enginneer",
    description:"Roadway Design",
    pic:"luis"
  },{
    name:"Life Kelly",
    title:"Envoirmental Engineer",
    description:"Safety and Health Contract Managment",
    pic:"life"
  },{
    name:"Mark Westbrook",
    title:"Envoirmental Engineer",
    description:"Safety and Health Contract Managment",
    pic:"life"
  },]

  const aboutUsContent = aboutUsData.map((c) => {
    return(
      <GridItem xs={12} sm={12} md={3} lg={3}>
      <Card plain>
        <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
          <img 
            src={require("assets/img/faces/"+c.pic+".png")} 
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
        {/* <CardBody>
          <p className={classes.description}>
          {c.description}
          </p>
        </CardBody> */}
      </Card>
    </GridItem>
    )
  })

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <GridContainer>
        {aboutUsContent}
      </GridContainer>
    </div>
  );
}
