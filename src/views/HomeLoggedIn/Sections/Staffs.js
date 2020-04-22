import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {StaffsURL} from "utils/ApiConstants.js"
import {StaffsM, Headers} from "views/HomeLoggedIn/Models.js";


export default function Staffs() {

  const columns = Staffs

  return (
    <div >
      We will only select from Materialized View Engineers
      <Button
        primary color="success">
        SELECT/GET Users
      </Button>
      <Table columns={columns} url={StaffsURL}/>
    </div>
  );
}
