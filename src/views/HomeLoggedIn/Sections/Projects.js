import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ProjectsURL} from "utils/ApiConstants.js"
import {ProjectsM, postData} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";
import {authenticationService} from 'services/authentication.service';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default function Projects() {

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
    data.Created = new Date(data.Created).toISOString()
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: Headers,
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log('response:', response);
    })
    .catch((error) => {
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
            label="Next appointment"
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
            autoComplete="email"
            onChange={handleChange} />
        )}
      })}
      <Button
        onClick={() => postData(ProjectsURL+"register/", state)}
        primary color="info">
        INSERT/POST
      </Button>

      <Table columns={columns} url={ProjectsURL}/>
    </div>
  );
}
