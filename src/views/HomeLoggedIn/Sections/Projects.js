import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"


export default function Projects() {

  const [state, setState] = React.useState({
    ProjectNum:"Project Number",
    StartDate:"Start Date",
    Status:"Status",
    City:"City",
    ZipCode:"Zip Code",
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
      <Table columns={state}/>
    </div>
  );
}
