import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
//font awseome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Why should we want to change?</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h3>
                <small>Well here are the numbers</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Collisions",
                    tabIcon: Face, //<FontAwesomeIcon icon={"fa-car-crash"}/>,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Vehicle collisions are the leading cause 
                        of death for those between the ages of 1-44 
                        and it is growing. 2018 was the third year 
                        in a row where fatal accidents increased 
                        to over 40,000. The economic cost of vehicle crashes exceeds 75 billion dollars annually.
                      </p>
                    )
                  },
                  {
                    tabName: "Air Quality",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        In states such as California, the transportation 
                        sector accounts for approximately 40 percent 
                        of carbon emissions. Besides damaging local 
                        air quality, it is a significant contributor 
                        to climate change. Which has the potential 
                        to cause a worldwide economic and humanitarian 
                        crisis. The economic cost of air pollution 
                        from vehicles alone is pegged at 29 billion 
                        dollars annually. 
                      </p>
                    )
                  },
                  {
                    tabName: "Productivity",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                         The average American commuter wastes an extra 
                         54 hours a year due to traffic congestion. 
                         However, traffic congestion costs more than time. 
                         Worker productivity, fuel, and cost of consumer 
                         goods are affected. This adds up to approximately 
                         305 billion dollars. 
                      </p>
                    )
                  },
                  {
                    tabName: "Fitness",
                    tabIcon: Build,
                    tabContent: (
                      <p className={classes.textCenter}>
                         Obesity is positively correlated with how 
                         frequently one drives. This medical condition 
                         now captures approximately 39% of adults and 
                         costs our nation an extra 147 billion dollars 
                         a year. 
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
