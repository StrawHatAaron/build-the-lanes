import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ProjectsURL} from "utils/ApiConstants.js"
import {ProjectsM, Headers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";
import {authenticationService} from 'services/authentication.service';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


export default function Projects(props) {

  Array.prototype.contains = function (obj) {
    return this.indexOf(obj) > -1;
  };

  const columns = ProjectsM;
  const inputCols = ProjectsM;
  //need some things to check based off
  //which type of input box to display
  const dontDisplay = ["ProjectNum"]
  const numAttributes = ["ZipCode"]
  const dateAttributes = ["StartDate"]

  const [state, setState] = useState({ProjectsM})
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };


  function postData(url, data){

    console.log("start_date:", data["StartDate"]);
    const startDate = data.StartDate;
    const dateArray = startDate.split('-');
    const startDateF = dateArray[1]+'-'+dateArray[2]+'-'+dateArray[0]
    console.log("startDateF:", startDateF);
    // console.log("formatted date month:", startDateF);
    const send = {
    	"start_date":startDateF,
    	"status":data.Status,
    	"city":data.City,
    	"zip_code":data.ZipCode
    };
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: Headers,
      body: JSON.stringify(send),
    })
    .then((response) => {
      alert("Success");
      console.log('response:', response);
      window.location.reload();
    })
    .catch((error) => {
      alert("Error");
      console.error('Error:', error);
    });
  }

  return (
    <div >
      {Object.keys(inputCols).map((key, i) => {
        if(dontDisplay.contains(key)){}
        else if (numAttributes.contains(key)) {return(
          <CssTextField
            variant="outlined"
            margin="normal"
            id={key}
            name={key}
            type="number"
            label={Object.values(inputCols)[i]}
            onChange={handleChange} />
        )} else if(dateAttributes.contains(key)) {return(
          <CssTextField
            variant="outlined"
            margin="normal"
            id={key}
            name={key}
            label={Object.values(inputCols)[i]}
            type="date"
            InputLabelProps={{shrink: true,}}
            onChange={handleChange}
         />
        )} else {return(
          <CssTextField
            variant="outlined"
            margin="normal"
            id={key}
            name={key}
            label={Object.values(inputCols)[i]}
            autoComplete="email"
            onChange={handleChange} />
        )}
      })}
      <Button
        onClick={() => postData(ProjectsURL, state)}
        primary color="info">
        INSERT/POST
      </Button>

      <Table allowDelete={props.allowDelete} columns={columns} url={ProjectsURL}/>
    </div>
  );
}
