import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {EngineerCertificationsURL} from "utils/ApiConstants.js"
import {EngineerCertificationsM, Headers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";


export default function EngineerCertifications(props) {

  const columns = EngineerCertificationsM;
  const [state, setState] = useState(EngineerCertificationsM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  function postData(url, data){
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: Headers,
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log("res:",response);
      if(response.status === 200){
        alert("Success! Inserted");
        window.location.reload();
      } else {
        alert("Make sure the email belongs to an Engineer"+
              " and that you don't have duplicate entries for" +
              " Email and Certification fields.");
      }
    })
    .catch((error) => {
      alert("Error", error);
      console.error('Error:', error);
    });
  }

  return (
    <div >
    <div>Remember to input an email inside of the Engineers table/materialized view</div>
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
        allowDelete={props.allowDelete}
        onClick={() => postData(EngineerCertificationsURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table allowDelete={props.allowDelete} columns={columns} url={EngineerCertificationsURL}/>
    </div>
  );
}
