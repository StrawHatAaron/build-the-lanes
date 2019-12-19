import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Navigation Pills</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>With Icons</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Dashboard",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          The nature of these problems demands a rapid solution.
                          Scientists predict that only twelve years remain to
                          dramatically reduce carbon emissions to avoid
                          catastrophic climate change. Over 20,000 lives a year
                          could be saved if our roads were quickly rebuilt to
                          meet vision zero standards. Even economy would quickly
                          feel the benefits of reducing the costs of traffic
                          congestion and obesity. Each year of delay brings
                          massive costs in human lives, time, and money.
                        </p>
                        <br />
                        <p>
                          Unfortunately, the civil engineering industry in the
                          United States is not positioned to quickly rebuild the
                          transportation system. Some of the blame falls on the
                          government for spending slightly more than the 2% of
                          the recommended 5% of GDP on infrastructure. However,
                          much of it is because American projects cost
                          significantly more compared to European ones. For
                          example, large rail projects, such as the California
                          High Speed Rail or new subway projects in the United
                          States cost approximately seven times more per mile
                          than European projects. American projects also take
                          longer. A depressing example is the long-awaited BART
                          extension to Silicon Valley. Although the extension
                          was anticipated to happen decades ago, the project’
                          completion has been pushed back to 2030. The reasons
                          for these higher costs and delays range from higher
                          labor costs, overuse of design bid build process, and
                          America’s decentralized approach to building
                          infrastructure. However, regardless of who is to
                          blame, it is clear a new approach is needed to solve
                          the 4 problems quickly.
                        </p>
                        <br />
                        <p>
                          The construction of complete bike networks in cities
                          is the best way to tackle the four problems. Per the 
                          Federal Highway Administration, more than half of all vehicle trips are
                          between 1-10 miles, which is a distance that is convenient for cycling. But most Americans
                          don’t, as there is no infrastructure in place that makes the trip safe and convenient. A study
                          conducted by Breakaway Research Group found approximately 53% of Americans were
                          interested in commuting via bicycle, but cited safety concerns as what was stopping them. If
                          continuous bicycle networks were built, a significant portion of this population would switch
                          from driving to bicycling, which would significantly improve the four problems. Fewer people on
                          the road would mean a decrease in vehicle collisions, carbon emissions, traffic congestion
                          would improve. The Netherlands is an excellent example. In cities such as Amsterdam, Delft,
                          and Grottingen, more than half of all trips are via bicycle. This explains why studies such as the
                          one conducted by Waze found that Dutch drivers the highest satisfaction rating, by measuring
                          factors such as road conditions, traffic delays, and likelihood of accidents. Unfortunately, efforts
                          to build this infrastructure by traditional means would be unsustainably long and expensive.
                          This is where the non-profit Build the Lanes comes in.                        
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
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
