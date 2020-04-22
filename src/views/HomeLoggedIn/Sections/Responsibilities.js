import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ResponsibilitiesURL} from "utils/ApiConstants.js"
import {ResponsibilitiesM, headers} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";

export default function Responsibilities() {

  const columns = ResponsibilitiesM;

  const [number, setNumber] = useState("");
  const [staffEmail, setStaffEmail] = useState("");
  const [projectNum, setProjectNum] = useState("");

  function postData(){
    const data = ResponsibilitiesM;
    // data["Email"] = email.trim();
    // data["Degree"] = degree;
    // data["Degree"] = degree;
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
      <CssTextField
        variant="outlined"
        margin="normal"
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        onChange={(e) => setNumber(e.target.value)} />
      <CssTextField
        type = "degree"
        variant="outlined"
        margin="normal"
        id="degree"
        label="Staff Email"
        name="degree"
        autoComplete="current-password"
        onChange={(e) => setStaffEmail(e.target.value)}/>
      <CssTextField
        type = "degree"
        variant="outlined"
        margin="normal"
        id="degree"
        label="Project Number"
        name="degree"
        autoComplete="current-password"
        onChange={(e) => setProjectNum(e.target.value)}/>
      <Button
        onClick={() => postData()}
        primary color="info">
        INSERT/POST
      </Button>
      <Button
        primary color="success">
        SELECT/GET
      </Button>
      <Button
        primary color="danger">
        DELETE
      </Button>
      <Button
        primary color="warning">
        UPDATE/PUT
      </Button>
      <Table columns={columns} url={ResponsibilitiesURL}/>
    </div>
  );
}
