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
    'Build the Lanes and the city agree on a project of mutual interest.', 
    'Build The Lanes submits 35% plans to the city for feedback. Free of charge.', 
    'BTL finishes plan to completion.',
    'City signs an agreement to build the project.',
    'City constructs project'
  ];
}

function getStepContentOld(step) {
  switch (step) {
    case 0:
      return `City recognizes the need for a bike facility or is persuaded to the need by a citizen group`;
    case 1:
      return `This can cost the city millions of dollars in tax payer money`;
    case 2:
      return `Most cities do not have enough staff our resources to do much of their engineering in house, prompting steps 4, 5 and 6`;
    case 3:
      return `This publicly announces for private companies to submit their bids for the project`;
    case 4:
      return `City reviews proposals and selects top 3. By law they are not allowed to choose based on price. Only after the top 3 are selected, are the bid amounts opened and then negotiated.`;
    case 5:
      return `Designer submits plans to city at various stages of completion (35,65,90,95,100) percent. Due to the length of this process and its slowness, consultants are usually working on multiple projects at the same time to remain profitable. This slows the process even more `;
    case 6:
      return `Consultants are also usually paid on a “as work progresses basis” with a cap usually negotiated between the consultant and the city. That means every engineer working on the project is assigned a billing rate. Better more experienced engineers have higher billing rates whereas younger less experienced engineers have lower billing rates.`;
    case 7:
      return `This is a terrible system for two important reasons. The first is that there is no incentive for the consulting firm to become more efficient and invest in research and better practices. A lower bill for the city simply means less money for the consultant. This is a major contributor to why many projects nowadays ultimately end up being over budget as it is in the consultants interest to get to as near to the cap as possible or justify project add on to blow past the cap. The second is that it prevents high quality engineers from focusing on a single project as their high billing rates would quickly push a project over budget. This leaves the work to more inexperienced workers, which slows the work time and the quality of the end product. Just imagine if this system was used by an innovative company like Tesla. Elon Musk would no longer be able to be personally involved in`;
    case 8:
      return `City applies for grants to help cover funding for the project.`;
    case 9:
      return `It is possible that contractors could fall through even at this point.`;
    case 10:
      return `For small cities they may find that they could even be unable to do the project to due all the contractor costs they paid. This causes a big waste.`;
    case 11:
      return `Addendum or project changes are coordinated with the city as many design engineers often produce design concepts that make no practical sense in physical construction.`;
    case 12:
      return `If this process seems excessively long and unreasonable, thats because it is. This is why building a new bike trail can end up costing more than a million dollars a mile and take years before construction is finished.`;
    default:
      return 'Unknown step';
  }
}

function getStepContentBuildLanes(step){
  switch (step){
    case 0:
      return "City agrees to let BTL develop plans to 35% completion while under no contractual obligation.";
    case 1:
      return "If approved BTL solicits a cost estimate and proceeds with finishing design. Since the concept is finalized at this stage, BTL begins soliciting corporate sponsorship of the project These companies could vary from local bike shops to large companies such as REI or UPS.  BTL posts project on its website and begins crowdfunding for its construction.. Funding is earmarked for the construction. If project falls through or is overfunded donors will have a choice to have their donation returned, send it to another project or donate it to help cover BTL’s operating budget";
    case 2:
      return "We focus on designing project in a manner to minimize the number of permits ultimately needed for construction.";
    case 3:
      return "Build The Lanes will commit to construct the project by a reasonable deadline and to only use donations for the project itself. Money earmarked for the project is transferred to the city upon the signing.";
    case 4:
      return "That is it. Build The Lanes will even consult to help city choose the proper land developer organization"
    default:
      return "out of bounds. This is a developer error.";
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
    <GridItem xs={12} sm={12} md={6} style={{padding:"70px"}}>
      <h1>Outdated Approach</h1>
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
                      color="#f44336"
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
            <Typography>All steps completed for old fashion way - you&apos;re finished</Typography>
            <Button onClick={handleResetOld} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
    </GridItem>


    <GridItem xs={12} sm={12} md={6} style={{padding:"70px"}}>
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
            <Typography>All steps completed for old fashion way - you&apos;re finished</Typography>
            <Button onClick={handleResetBuildLanes} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
    </GridItem>
    </GridContainer>
  );
}