import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {DonatesURL} from "utils/ApiConstants.js"
import {DonatesM, Headers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";

export default function Donates(props) {

  Array.prototype.contains = function (obj) {
    return this.indexOf(obj) > -1;
  };

  const columns = DonatesM;
  const inputCols = DonatesM;

  const intAttributes = ["ProjectNum"]

  const [state, setState] = useState(DonatesM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  function postData(url, data){

    data.ProjectNum = parseInt(data.ProjectNum);

    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: Headers,
      body: JSON.stringify(data),
    })
    .then((response) => {
      if(response.status === 200) {
        alert("Success! Inserted");
        window.location.reload();
      } else {
        alert("Make sure the email belongs to a Donator"+
              " and that you don't have duplicate foreign key"+
              " entries for Donator's Email and Project Number.");
      }
    })
    .catch((error) => {
      alert("Error", error)
      console.error('Error:', error);
    });
  }

  return (
    <div >
    <div> Make sure the Project Number is a valid Project Number in Projects.</div>
    <div>Remember to input an email inside of the Donators table/materialized view</div>
      {Object.keys(columns).map((key, i) => {
        if (intAttributes.contains(key)) {return(
          <CssTextField
            variant="outlined"
            margin="normal"
            id={key}
            type="number"
            label={Object.values(columns)[i]}
            name={key}
            autoComplete="email"
            onChange={handleChange} />
        )} else {return(
          <CssTextField
            variant="outlined"
            margin="normal"
            id={key}
            label={Object.values(columns)[i]}
            name={key}
            autoComplete="email"
            onChange={handleChange} />
        )}
      })}
      <Button
        onClick={() => postData(DonatesURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table allowDelete={props.allowDelete} columns={columns} url={DonatesURL}/>
    </div>
  );
}
