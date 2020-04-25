import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ResponsibilitiesURL} from "utils/ApiConstants.js"
import {ResponsibilitiesM, postData} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";

export default function Responsibilities() {

  const columns = ResponsibilitiesM;

  const [state, setState] = useState(ResponsibilitiesM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  function postData(){
    const data = state;
    fetch(ResponsibilitiesURL, {
      method: 'POST', // or 'PUT'
      headers: Headers,
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div >
      {Object.keys(columns).map((c, i) => {
        return(
          <CssTextField
              variant="outlined"
              margin="normal"
              id={c}
              label={Object.values(columns)[i]}
              name={c}
              autoComplete="email"
              onChange={handleChange} />
        )
      })}
      <Button
        onClick={postData(ResponsibilitiesURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table columns={columns} url={ResponsibilitiesURL}/>
    </div>
  );
}
