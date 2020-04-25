import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ApplicableStandardsURL} from "utils/ApiConstants.js"
import {ApplicableStandardsM, postData} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";

export default function ApplicableStandards() {

  const columns = ApplicableStandardsM;
  const [state, setState] = useState(ApplicableStandardsM);
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
        onClick={() => postData(ApplicableStandardsURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table
        columns={columns}
        url={ApplicableStandardsURL}/>
    </div>
  );
}
