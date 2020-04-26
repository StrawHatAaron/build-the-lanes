import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {ProjectsURL} from "utils/ApiConstants.js"
import {ProjectsM, postData} from "views/HomeLoggedIn/Models.js";
import {CssTextField} from "assets/jss/Constants.js";

export default function Projects() {

  const columns = ProjectsM;
  const [state, setState] = useState(ProjectsM)
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
        onClick={() => postData(ProjectsURL, state)}
        primary color="info">
        INSERT/POST
      </Button>
      <Table columns={columns} url={ProjectsURL}/>
    </div>
  );
}
