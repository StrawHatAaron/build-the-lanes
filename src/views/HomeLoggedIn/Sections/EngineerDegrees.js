import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {EngineerDegreesURL} from "utils/ApiConstants.js"
import {CssTextField} from "assets/jss/Constants.js";



export default function EngineerDegrees() {

  const [state, setState] = useState({
    Email:"Email",
    Degree:"Degree",
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [email, setEmail] = useState('');
  const [degree, setDegree] = useState('');

  function postData(){
    const data = {
      Email: email,
      Degree: degree
    };

    console.log("data to POST",data)

    fetch(EngineerDegreesURL, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
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
    <CssTextField
        variant="outlined"
        margin="normal"
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)} />
    <CssTextField
        type = "degree"
        variant="outlined"
        margin="normal"
        id="degree"
        label="Degree"
        name="degree"
        autoComplete="current-password"
        onChange={(e) => setDegree(e.target.value)}/>
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
