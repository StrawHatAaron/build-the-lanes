import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {StaffsURL} from "utils/ApiConstants.js"
import {StaffsM, Headers} from "views/HomeLoggedIn/Models.js";


export default function Staffs(props) {

  const columns = StaffsM
  const [state, setState] = useState(StaffsM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div >
      <h2>
        We should only select from the Materialized Staffs
      </h2>
      <Button
        primary color="success">
        SELECT/GET Users
      </Button>
      <Table allowDelete={props.allowDelete} columns={columns} url={StaffsURL}/>
    </div>
  );
}
