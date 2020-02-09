import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { DirectionsBike, TrafficOutlined, DriveEtaOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let's Make a Difference</h2>
          <h5 className={classes.description}>
            Low stress bike networks are the best way to solve these problems at
            the same time According to the FHA, more than half of all vehicle
            trips are between 1-10 miles, a convenient cycling distance. But the
            lack of infrastructure makes the cycling risky and inconvenient. A
            study conducted by Breakaway Research Group found approximately 53%
            of Americans were interested in commuting via bicycle, but didn{"'"}t
            because of safety concerns as. With low stress bicycle networks
            were built, more Americans would cycle.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Improved roads from less use"
              description=""
              icon={DirectionsBike}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Relief of traffic congestion"
              description=""
              icon={TrafficOutlined}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Savings by avoiding vehicle payments"
              description=""
              icon={DriveEtaOutlined}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
