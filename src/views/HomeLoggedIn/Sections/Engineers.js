import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {EngineersURL} from "utils/ApiConstants.js"
import {EngineersM, postData} from "views/HomeLoggedIn/Models.js";


export default function Engineers() {

  const columns = EngineersM;
  const [state, setState] = useState(EngineersM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div >
    <h2>
    We should only select from the Materialized View Engineers
    </h2>
      <Button
        primary color="success">
        SELECT/GET Users
      </Button>
      <Table columns={columns} url={EngineersURL}/>
    </div>
  );
}
