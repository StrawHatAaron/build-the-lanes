import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ApplicableStandardsURL} from "utils/ApiConstants.js"
import {ApplicableStandardsM, Headers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";

export default function ApplicableStandards(props) {

  Array.prototype.contains = function (obj) {
    return this.indexOf(obj) > -1;
  };

  const columns = ApplicableStandardsM;
  const [state, setState] = useState(ApplicableStandardsM);

  const intAttributes = ["ProjectNum"]

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
    <div> Make sure the Project Number is a valid Project Number in Projects.</div>
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
        onClick={() => postData(ApplicableStandardsURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table
        allowDelete={props.allowDelete}
        columns={columns}
        url={ApplicableStandardsURL}/>
    </div>
  );
}
