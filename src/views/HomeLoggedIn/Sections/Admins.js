import React, {useState} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {AdminsURL} from "utils/ApiConstants.js"
import {AdminsM, Headers} from "views/HomeLoggedIn/Models.js";


export default function Admins() {

  const columns = AdminsM;
  const [state, setState] = useState(AdminsM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div >
    We will only select from Materialized View Engineers
    <Button
      primary color="success">
      SELECT/GET Users
    </Button>
      <Table
        columns={AdminsM}
        url={AdminsURL}/>
    </div>
  );
}
