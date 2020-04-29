//Written By Aaron Miller
import React, {useState, useEffect} from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {authenticationService} from 'services/authentication.service';
import {history} from 'helpers/history';
//model section components
import Donators from "views/HomeLoggedIn/Sections/Donators.js";
import EngineerCertifications from "views/HomeLoggedIn/Sections/EngineerCertifications.js";
import EngineerDegrees from "views/HomeLoggedIn/Sections/EngineerDegrees.js";
import Projects from "views/HomeLoggedIn/Sections/Projects.js";
import Responsibilities from "views/HomeLoggedIn/Sections/Responsibilities.js";
import Staffs from "views/HomeLoggedIn/Sections/Staffs.js";
import ApplicableStandards from "views/HomeLoggedIn/Sections/ApplicableStandards.js";
import Donates from "views/HomeLoggedIn/Sections/Donates.js";
import Users from "views/HomeLoggedIn/Sections/Users.js";
import Admins from "views/HomeLoggedIn/Sections/Admins.js";
import Engineers from "views/HomeLoggedIn/Sections/Engineers.js";
//put work into the button - would like to have it work with token in furture maybe
import {SignInOutButton} from "components/Header/SignInOutButton.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks() {

  const classes = useStyles();

  const headerData = [
    {
      page: "Our Mission",
      link: ""
    },{
      page: "About Us",
      link: "about-us"
    },{
      page: "Why Bikes",
      link: "why-bikes"
    },
    {
      page: "Approach",
      link: "approach"
    },{
      page: "Contact Us",
      link: "contact-us"
    }
  ];

  const headerContent = headerData.map((c) => {
    return(
      <ListItem className={classes.listItem}>
        <Link
          to={`/${c.link}`}
          color="transparent"
          className={classes.navLink}
          key={"dsvshead-link-"+c.link}>
          {c.page}
        </Link>
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
          dropdownHeader="User Pages"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link
              to="/signin"
              className={classes.dropdownLink}
              key={"header-link-sign-up"}>
              Sign in
            </Link>,
            { divider: true },
            <Link
              to="/sign-up"
              className={classes.dropdownLink}
              key={"header-link-sign-up"}>
              Sign Up
            </Link>,
            { divider: true },
          ]}
        />
      </ListItem>
    </List>
  );
}


//******DATABASE SECTION******
export const homeLoggedInPath = "/home-logged-in/"

export const DatabasePages = [{
  title:'Users',
  path:homeLoggedInPath+'users',
  explanation:'Info',
  componentSection:() => <Users allowDelete={false}/>
},{
  title:'Admins',
  path:homeLoggedInPath+'admins',
  explanation:'Info',
  componentSection:() => <Admins allowDelete={false}/>
},{
  title: 'Staffs',
  path:homeLoggedInPath+'staffs',
  explanation:'Info',
  componentSection:() => <Staffs allowDelete={false}/>
},{
  title:'Engineers',
  path:homeLoggedInPath+'engineers',
  explanation:'Info',
  componentSection:() => <Engineers allowDelete={false}/>
},{
  title:'Donators',
  path:homeLoggedInPath+'donators',
  explanation:' Info',
  componentSection:() => <Donators allowDelete={false}/>
},{
  title:'Projects',
  path:homeLoggedInPath+'projects',
  explanation:' Info',
  componentSection:() => <Projects allowDelete={true}/>
},{
  title:'Responsibilities',
  path:homeLoggedInPath+'responsibilities',
  explanation:' Info',
  componentSection:() => <Responsibilities allowDelete={true}/>
},{
  title:'Donates',
  path:homeLoggedInPath+'donates',
  explanation:' Info',
  componentSection:() => <Donates allowDelete={true}/>
},{
  title:'Applicable Standards',
  path:homeLoggedInPath+'applicable-standards',
  explanation:' Info',
  componentSection:() => <ApplicableStandards allowDelete={true}/>
},{
  title:'Engineer Certifications',
  path:homeLoggedInPath+'engineer-certifications',
  explanation:'Engineer Database Info',
  componentSection:() => <EngineerCertifications allowDelete={true}/>
},{
  title:'Engineer Degrees',
  path:homeLoggedInPath+'engineer-degrees',
  explanation:'Engineer Database Info',
  componentSection:() => <EngineerDegrees allowDelete={true}/>
}];

const DatabaseButtonStyle = {
  background:"#4caf50",
  margin:"20px"
}

export const MapedDatabasePages = DatabasePages.map((c) => {
  return(
    <Link to={c.path}>
      <Button
        style={DatabaseButtonStyle}
        simple color="success"
        size="sm"
        onClick={() => {}}>
        {"Select "+c.title}
      </Button>
    </Link>
  )
})
