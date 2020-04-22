import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js";
import {EngineerDegreesURL} from "utils/ApiConstants.js";
import {CssTextField} from "assets/jss/Constants.js";
import {EngineerDegreesM, postData} from "views/HomeLoggedIn/Models.js";

export default function EngineerDegrees() {

  const columns = EngineerDegreesM;

  const [state, setState] = useState(EngineerDegreesM)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div >
      {Object.keys(columns).map((c, i) => {
        return(
          <CssTextField
              variant="outlined"
              margin="normal"
              id={c}
              label={Object.values(columns)[i]}
              name={c}
              autoComplete="email"
              onChange={handleChange} />
        )
      })}
      <Button
        onClick={() => postData(EngineerDegreesURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Button
        primary color="success">
        SELECT/GET
      </Button>
      <Button
        primary color="danger">
        DELETE
      </Button>
      <Button
        primary color="warning">
        UPDATE/PUT
      </Button>
      <Table columns={columns} url={EngineerDegreesURL}/>
    </div>
  );
}
