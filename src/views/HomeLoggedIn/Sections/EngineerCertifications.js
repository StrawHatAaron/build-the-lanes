import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {EngineerCertificationsURL} from "utils/ApiConstants.js"


export default function EngineerCertifications() {

  const [state, setState] = React.useState({
    Email:"Email",
    Certification:"Certification",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div >
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
      <Table columns={state} url={EngineerCertificationsURL}/>
    </div>
  );
}
