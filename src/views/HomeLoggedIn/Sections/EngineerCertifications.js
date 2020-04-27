import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {EngineerCertificationsURL} from "utils/ApiConstants.js"
import {EngineerCertificationsM, Headers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";


export default function EngineerCertifications() {

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
        onClick={() => postData(EngineerCertificationsURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table columns={columns} url={EngineerCertificationsURL}/>
    </div>
  );
}
