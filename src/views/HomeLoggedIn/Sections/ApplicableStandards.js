import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ApplicableStandardsURL} from "utils/ApiConstants.js"

export default function ApplicableStandards() {

  const [state, setState] = React.useState({
    DataLink: "Data Link",
    ProjectNum: "Project Number",
    PhotoName: "Photo Name",
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
      <Table
        columns={state}
        url={ApplicableStandardsURL}/>
    </div>
  );
}
