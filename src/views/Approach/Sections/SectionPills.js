import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ErrorOutline from "@material-ui/icons/ErrorOutline";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//New Addition
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getStepsOld() {
  return [
    'City recognizes the need for a bike facility or is persuaded to the need by a citizen group', 
    'City commissions a feasibility study', 
    'City commissions impact studies ',
    'City releases a Request for Proposals (RFP)',
    'City selects best potential prospects',
    'City signs contract with the designer and design work begins.',
    'Consultant submits final plans to city and final costs are closed out.',
    'City releases statement of qualifications, which invites contractors to bid on construction of the project.',
    ' Funding is usually a mix of grants, city budget, and earmarked funding from state and federal programs',
    'City selects contractor',
    'City applies for necessary permits to complete construction of the project.',
    'Contractor send RFIs to designer for clarification on any design related questions.',
    'Contractor finishes construction of project'
  ];
}

function getStepsBuildLanes(){
  return [
    'Build the Lanes (BTL) and the city select an unfunded project.', 
    'BTL submits 30% plans to the city for feedback.', 
    'BTL finishes design.',
    'City signs an agreement to build the project by a reasonable deadline and use donations for the project itself.',
    'Money earmarked for the project is transferred to the city upon the signing.',
    'City constructs project.'
  ];
}

function getStepContentOld(step) {
  switch (step) {
    case 0:
      return ``;
    case 1:
      return ``;
    case 2:
      return ``;
    case 3:
      return ``;
    case 4:
      return ``;
    case 5:
      return ``;
    case 6:
      return ``;
    case 7:
      return ``;
    case 8:
      return ``;
    case 9:
      return ``;
    case 10:
      return ``;
    case 11:
      return ``;
    case 12:
      return ``;
    default:
      return '';
  }
}

function getStepContentBuildLanes(step){
  switch (step){
    case 0:
      return "City agrees to let BTL develop plans to 30% completion under no contractual obligation.";
    case 1:
      return "If approved, BTL estimates project costs and finishes the design. At the same time, BTL coordinates corporate sponsorship of the project BTL posts project on its website and begins crowdfunding for its construction. ";
    case 2:
      return "";
    case 3:
      return "";
    case 4:
      return ""
    default:
      return "";
  }
}

export default function SectionPills() {
  const classes = useStyles();
  const [activeStepOld, setActiveStepOld] = React.useState(0);
  const [activeStepBuildLanes, setActiveStepBuildLanes] = React.useState(0);
  const stepsOld = getStepsOld();
  const stepsBuildLanes = getStepsBuildLanes();

  const handleNextOld = () => {
    setActiveStepOld(prevActiveStep => prevActiveStep + 1);
  };

  const handleBackOld = () => {
    setActiveStepOld(prevActiveStep => prevActiveStep - 1);
  };

  const handleResetOld = () => {
    setActiveStepOld(0);
  };


  const handleNextBuildLanes = () => {
    setActiveStepBuildLanes(prevActiveStep => prevActiveStep + 1);
  };

  const handleBackBuildLanes = () => {
    setActiveStepBuildLanes(prevActiveStep => prevActiveStep - 1);
  };

  const handleResetBuildLanes = () => {
    setActiveStepBuildLanes(0);
  };

  return (
    <GridContainer justify="center" className={classes.root}>
    <GridItem xs={12} sm={12} md={6}>
      <h1 style={{padding:"10px"}}>Conventional Approach</h1>
      <div style={{padding:"10px"}}>
        
      </div>
        <Stepper activeStep={activeStepOld} orientation="vertical">
          {stepsOld.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContentOld(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStepOld === 0}
                      onClick={handleBackOld}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNextOld}
                      className={classes.button}
                    >
                      {activeStepOld === stepsOld.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStepOld === stepsOld.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography></Typography>
            <Button onClick={handleResetOld} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}


      <div style={{padding:"15px"}}>
      <h3>What’s wrong with this?</h3>
        <p>
          1. This approach can make sense for massive projects such as the new Bay Bridge in California.
          But it can burden smaller projects with excessive costs and delays. A new bike trail can end up
          costing more than a million dollars a mile and take years to complete.
        </p>
        <br/>
        <p>
          2. Consultants are hired with a pre negotiated cost cap. However, they are compensated on a
          “pay as they work basis”. There is no incentive for the consulting firm to be more efficient.
          Lower costs mean less money for the consultant.
        </p>
        <br/>
        <p>
          3. Every consultant engineer is assigned a billing rate by their firm. More experienced engineers
          have higher rates whereas those with less experience have lower ones. To stay under budget,
          great engineers are not able to concentrate on a single project and work is left to those with
          lower rates. This slows down projects and negatively affects project quality.
        </p>
      </div>

    </GridItem>


    <GridItem xs={12} sm={12} md={6} >
    <h1>Build The Lanes Approach</h1>
        <Stepper activeStep={activeStepBuildLanes} orientation="vertical">
          {stepsBuildLanes.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContentBuildLanes(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStepBuildLanes === 0}
                      onClick={handleBackBuildLanes}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="#4caf50"
                      onClick={handleNextBuildLanes}
                      className={classes.button}
                    >
                      {activeStepBuildLanes === stepsBuildLanes.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStepBuildLanes === stepsBuildLanes.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography></Typography>
            <Button onClick={handleResetBuildLanes} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}

        <div style={{padding:"10px"}}>
          Because we give away our work, we must be efficient and keep quality high. By donating,
          sidestepping most of the delays and cost overruns is possible. Fewer studies are also needed as the
          low-cost method poses fewer risks for the city.
        </div>

    </GridItem>
    </GridContainer>
  );
}