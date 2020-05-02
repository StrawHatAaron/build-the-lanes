import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ResponsibilitiesURL} from "utils/ApiConstants.js"
import {ResponsibilitiesM, Headers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";

export default function Responsibilities(props) {


  Array.prototype.contains = function (obj) {
    return this.indexOf(obj) > -1;
  };

  const dontDisplay = ["Number"];
  const intAttributes = ["ProjectNum"]

  const columns = ResponsibilitiesM;

  const [state, setState] = useState(ResponsibilitiesM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  function postData(url, data){

    const send = {
      "StaffEmail":data["StaffEmail"],
      "ProjectNum":parseInt(data["ProjectNum"])
    }

    fetch(ResponsibilitiesURL, {
      method: 'POST', // or 'PUT'
      headers: Headers,
      body: JSON.stringify(send),
    })
    .then((response) => {
      console.log("res:",response);
      if(response.status === 200) {
        alert("Success! Inserted");
        window.location.reload();
      } else {
        alert("Make sure the email belongs to a Staff Member"+
              " and that you don't have duplicate key"+
              " entries for Staff Email and Project Number .");
      }
    })
    .catch((error) => {
      alert("success", error);
      console.error('Error:', error);

    });
  }

  return (
    <div >
    <div> Make sure the Project Number is a valid Project Number in Projects.</div>
    <div>Remember to input an email inside of the Staff table/materialized view</div>
    {Object.keys(columns).map((key, i) => {
      if(dontDisplay.contains(key)){}
      else if (intAttributes.contains(key)) {return(
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
        onClick={() => postData(ResponsibilitiesURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table allowDelete={props.allowDelete} columns={columns} url={ResponsibilitiesURL}/>
    </div>
  );
}
