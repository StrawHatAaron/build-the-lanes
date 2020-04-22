import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ApplicableStandardsURL} from "utils/ApiConstants.js"
import {ApplicableStandardsM, Headers} from "views/HomeLoggedIn/Models.js";


export default function ApplicableStandards() {

  const columns = ApplicableStandardsM;

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
        columns={columns}
        url={ApplicableStandardsURL}/>
    </div>
  );
}
