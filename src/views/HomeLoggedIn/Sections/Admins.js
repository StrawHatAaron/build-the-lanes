import React, {useState} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {AdminsURL} from "utils/ApiConstants.js"
import {AdminsM, Headers} from "views/HomeLoggedIn/Models.js";


export default function Admins(props) {

  const columns = AdminsM;
  const [state, setState] = useState(AdminsM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div >
    <h2>
    We should only select from the Materialized View Admins
    </h2>
    <Button
      primary color="success">
      SELECT/GET Users
    </Button>
      <Table
        allowDelete={props.allowDelete}
        buttons={false}
        columns={AdminsM}
        url={AdminsURL}/>
    </div>
  );
}
