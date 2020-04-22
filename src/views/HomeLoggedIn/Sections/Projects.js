import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ProjectsURL} from "utils/ApiConstants.js"
import {ProjectsM, Headers} from "views/HomeLoggedIn/Models.js";


export default function Projects() {

  const columns = ProjectsM;

  return (
    <div >
    <Button
      primary color="success">
      SELECT/GET Users
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
      <Table columns={columns} url={ProjectsURL}/>
    </div>
  );
}
