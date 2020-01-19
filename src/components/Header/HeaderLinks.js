import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {

  const classes = useStyles();

  const headerData = [
    {page:"Our Mission"},
    {page:"Why Bikes"},
    {page:"Project Delivery"},
    {page:"Current Project"},
    {page:"About Us"},
  ];

  const headerContent = headerData.map((c) => {
    return(
      <ListItem className={classes.listItem}>
        <Button
          href="/profile-page"
          color="transparent"
          className={classes.navLink}>
          {c.page}
        </Button>
      </ListItem>
    )
  });

  return (
    <List className={classes.list}>
      {headerContent}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="More"
          dropdownHeader="Pages"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Landing
            </Link>,
            { divider: true },
            <Link to="/landing-page" className={classes.dropdownLink}>
              Your Story
            </Link>,
            { divider: true },
            
          ]}
        />
      </ListItem>
    </List>
  );
}
