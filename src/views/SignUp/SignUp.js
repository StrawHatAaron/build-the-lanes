import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import MenuItem from '@material-ui/core/MenuItem';
import {CssTextField} from "assets/jss/Constants.js";
import {UserURL} from "utils/ApiConstants.js"
import {UsersM, UsersSignUpM, Headers, RoleBasedUsers} from "views/HomeLoggedIn/Models.js";
import styles from "assets/jss/material-kit-react/views/signinPage.js";
import {history} from "helpers/history";
import {authenticationService} from "services/authentication.service";
import image from "assets/img/bike-sign-up.jpg";

const useStyles = makeStyles(styles);

export default function SignUp(props){

  Array.prototype.contains = function (obj) {
    return this.indexOf(obj) > -1;
  };
  //need some things to check based off
  //which type of input box to display
  const dontDisplay = ["Id", "PasswordHash", "PasswordSalt", "Title", "Type", "Created", "AmountDonated"]
  const intAttributes = ["AmountDonated"]
  const dateAttributes = ["Created"]
  const money = ["AmountDonated"]

  const columns = UsersM;
  const inputCols = UsersSignUpM;

  const [inputShow, setInputShow] = useState([]);
  const [state, setState] = useState(UsersSignUpM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });

    if(event.target.name==="Roles"){
      switch(event.target.value){
        case 'd':
        console.log("set to donator");
        setInputShow(["AmountDonated"]);
        break;
        case 's':
        console.log("set to staff");
        setInputShow(["Title", "Type", "Created"]);
        break;
        case 'e':
        setInputShow(["Title", "Type"]);
        break;
        case 'a':
        setInputShow(["Title", "Created"]);
        break;
        case 'sd':
        setInputShow(["Title", "Type", "Created", "AmountDonated"]);
        break;
        case 'ed':
        setInputShow(["Title", "Type", "AmountDonated"]);
        break;
        case 'ad':
        setInputShow(["Title", "Created", "AmountDonated"]);
        break;
      }
    }

  };

  function postData(url, data){

    data.AmountDonated = 10.50;
    data.Created = new Date(data.Created).toISOString()

    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: Headers,
      body: JSON.stringify(data),
    })
    .then((response) => {
      alert("Success");
      console.log('response:', response);
      window.location.reload();
    })
    .catch((error) => {
      alert("Error", error);
      console.error('Error:', error);
    });
  }

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 1000);
  const classes = useStyles();
  const { ...rest } = props;



  return (
    <div>
      <Header
        absolute
        color="success"
        brand="Build the Lanes"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="success" className={classes.cardHeader}>
                    <h2>Sign Up</h2   >
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>Enter your Credentials</p>
                  <CardBody>
                  {Object.keys(inputCols).map((key, i) => {
                    if(dontDisplay.contains(key)){}//do nothing because we don't want it displayed
                    else if(key==="Roles") {return(
                      [<CssTextField
                        variant="outlined"
                        margin="normal"
                        id={key}
                        select label="Choose Type of User"
                        value={state.Roles}
                        name={key}
                        onChange={handleChange}
                        helperText="User type choosen will trigger the material user views to be populated">
                        {RoleBasedUsers.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                        ))}
                      </CssTextField>]
                    )} else if (intAttributes.contains(key)) {return(
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        id={key}
                        type="number"
                        label={Object.values(inputCols)[i]}
                        name={key}
                        onChange={handleChange} />
                    )} else if(dateAttributes.contains(key)) {return(
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        id={key}
                        name={key}
                        label="Created"
                        type="datetime-local"
                        defaultValue="2017-05-24T09:18:54.092Z"
                        InputLabelProps={{shrink: true,}}
                        onChange={handleChange}/>
                    )} else {return(
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        id={key}
                        label={Object.values(inputCols)[i]}
                        name={key}
                        onChange={handleChange} />
                    )}
                  })}
                  {Object.keys(inputCols).map((key, i) => {
                    if(inputShow.contains(key)) {
                      if (intAttributes.contains(key)) {return(
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          id={key}
                          type="number"
                          label={Object.values(inputCols)[i]}
                          name={key}
                          onChange={handleChange} />
                      )} else if(dateAttributes.contains(key)) {return(
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          id={key}
                          name={key}
                          label="Created"
                          type="datetime-local"
                          defaultValue="2017-05-24T09:18:54.092Z"
                          InputLabelProps={{shrink: true,}}
                          onChange={handleChange}/>
                      )} else {return(
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          id={key}
                          label={Object.values(inputCols)[i]}
                          name={key}
                          onChange={handleChange} />
                      )}
                    }
                  })}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Button
                    onClick={() => postData(UserURL+"register/", state)}
                    primary color="info">
                    INSERT/POST
                  </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
