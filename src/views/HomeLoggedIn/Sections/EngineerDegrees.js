import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {EngineerDegreesURL} from "utils/ApiConstants.js"


export default function EngineerDegrees() {

  const [state, setState] = React.useState({
    Email:"Email",
    Degree:"Degree",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function postData(){
    const data = {
      Email: state.Email,
      Degree: state.Degree
    };

    fetch('https://example.com/profile', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
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
      <Button
        onClick={() => postData()}
        primary color="info">
        INSERT/POST
      </Button>
      <Button
        primary color="success">
        SELECT/GET Users
      </Button>
      <Button
        primary color="danger">
        DELETE Users
      </Button>
      <Button
        primary color="warning">
        UPDATE/PUT Users
      </Button>
      <Table columns={state} url={EngineerDegreesURL}/>
    </div>
  );
}
