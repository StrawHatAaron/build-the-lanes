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
import {CssTextField} from "assets/jss/Constants.js";
import styles from "assets/jss/material-kit-react/views/signinPage.js";
import {history} from "helpers/history";
import {authenticationService} from "services/authentication.service"
import image from "assets/img/sign-in.jpeg";


const useStyles = makeStyles(styles);

export default function SigninPage(props) {

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 1000);
  const classes = useStyles();
  const { ...rest } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                    <h4>Login</h4>
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
                  <CssTextField
                      variant="outlined"
                      margin="normal"
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)} />
                  <CssTextField
                      type = "password"
                      variant="outlined"
                      margin="normal"
                      id="password"
                      label="Password"
                      name="password"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}/>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple color="primary"
                      size="lg"
                      onClick={() => {
                        console.log(email);
                        console.log(password);
                        if(email.trim() === ""){
                          alert("Email Cannot Be Empty")
                        } else if(password.trim() === ""){
                          alert("Password Cannot Be Empty")
                        } else {
                          authenticationService.signin(email, password)
                          .then(
                            user => {
                              history.push("/home-logged-in/projects");
                              window.location.reload();
                            },
                            error => {
                              alert("Error, " + error);
                            }
                          );
                        }
                      }}>
                      Get started
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
