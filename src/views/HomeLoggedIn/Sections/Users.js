import React, {useState,} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {UserURL} from "utils/ApiConstants.js"
import {UsersM, UsersSignUpM, Headers, RoleBasedUsers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";
import MenuItem from '@material-ui/core/MenuItem';

export default function Users() {

  Array.prototype.contains = function (obj) {
    return this.indexOf(obj) > -1;
  };
  //need some things to check based off
  //which type of input box to display
  const dontDisplay = ["Id", "PasswordHash", "PasswordSalt"]
  const intAttributes = ["AmountDonated"]
  const dateAttributes = ["Created"]
  const money = ["AmountDonated"]

  const columns = UsersM;
  const inputCols = UsersSignUpM;



  const [state, setState] = useState(UsersSignUpM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
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

  return (
    <div >
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
            autoComplete="email"
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
        onClick={() => postData(UserURL+"register/", state)}
        primary color="info">
        INSERT/POST
      </Button>

      <Table columns={columns} url={UserURL}/>
    </div>
  );
}
