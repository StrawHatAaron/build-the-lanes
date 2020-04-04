import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { TrafficOutlined, FitnessCenterOutlined, LocalGasStationOutlined, TrendingDownOutlined, AttachMoneyOutlined, CloudOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  const trafficData = [{
    title: "Less wear and tear on roads",
    description: "",
    icon: AttachMoneyOutlined,
    iconColor: "info",
  },{
    title: "Traffic Relief",
    description: "",
    icon: TrafficOutlined,
    iconColor: "success",
  },{
    title: "Gas Savings",
    description: "",
    icon: LocalGasStationOutlined,
    iconColor: "danger",
  },{
    title: "Less Pollution",
    description: "",
    icon: CloudOutlined,
    iconColor: "info",
  },{
    title: "Less Obesity",
    description: "",
    icon: FitnessCenterOutlined,
    iconColor: "success",
  },{
    title: "Fewer Car Crashes",
    description: "",
    icon: TrendingDownOutlined,
    iconColor: "danger",
  }];


  const trafficContent = trafficData.map((c)=> {
    return(
      <GridItem xs={12} sm={12} md={4}>
        <InfoArea
          title={c.title}
          description=""
          icon={c.icon}
          iconColor={c.iconColor}
          vertical
        />
    </GridItem>
    );
  })

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let's Make a Difference</h2>
          <h5 className={classes.description}>
          Bicycling is the best way to solve these problems. According to the Federal Highway Administration, half of all car trips are less than ten miles. These distances are bikeable, especially with the debut of electric assistance, But the absence of safe cycling infrastructure keeps most people in their cars. If better bike networks were built, our communities would reap the rewards from increased cycling.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          {trafficContent}
        </GridContainer>
      </div>
    </div>
  );
}
