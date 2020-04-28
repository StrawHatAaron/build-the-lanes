//Aaron Miller
import React, {useState, useEffect,} from "react";
import Rows from "components/Tables/Rows.js";
import "components/Tables/Table.css";
import {Headers} from "views/HomeLoggedIn/Models.js"
import Button from "components/CustomButtons/Button.js";

import * as Models from "views/HomeLoggedIn/Models.js";
import * as ApiConstants from "utils/ApiConstants.js";

import { withStyles } from '@material-ui/core/styles';
import { green, } from '@material-ui/core/colors';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const RoseCheckbox = withStyles({
  root: {
    color: "#e91e63",
    '&$checked': {
      color: "#ef1f6f",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Table(props){

  const str = "";

  var TopColumns = Object.values(props.columns).map((c) => {
    return(
      <th>{c}</th>
    )
  })

  const [state, setState] = React.useState({});

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(props.url, {
      method: 'GET',
      headers:  Headers
      })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setState(
        Object.values(data).map((row, row_i) => {
          return {checked: false};
        })
      );
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [])

  const handleChange = row_i => (event) => {
    //true = checked = delete
    setState({...state, [`${row_i}`]:{[event.target.name]: event.target.checked }});
  };

  const handleDelete = () => {
    var foundCheck, moreThanOneChecked, foundOneCheck = false;
    Object.values(state).map((c) => {
      //check if any boxes are checked
      if(c.checked===true) foundCheck = true;
      //check if there is more than one box checked
      if(c.checked===true && foundOneCheck===true){
        moreThanOneChecked = true;
      } else if(c.checked===true){
        foundOneCheck = true;
      }
    })
    //find the index to delete at
    var indexToDeleteAt;
    if(foundCheck && !moreThanOneChecked){
      Object.values(state).map((c, i) => {
            if(c.checked==true) indexToDeleteAt = i;
      })
    }

    if (!foundCheck){
      alert("Please check a box to be deleted.");
    } else if (moreThanOneChecked){
      alert("Please only select one row at a time to be deleted safely.")
    } else {
      switch (props.columns){
        case Models.EngineerCertificationsM:
          console.log("index to delete at:", indexToDeleteAt);
          Models.deleteData(ApiConstants.EngineerCertificationsURL, data[indexToDeleteAt]);
          break;
        case Models.EngineerDegreesM:
          Models.deleteData(ApiConstants.EngineerDegreesURL, data[indexToDeleteAt]);
          break;
        case Models.ProjectsM:
          console.log("data at index",data[indexToDeleteAt]);
          Models.deleteDataId(ApiConstants.ProjectsURL, data[indexToDeleteAt]["project_number"]);
          break;
        case Models.ResponsibilitiesM:
          Models.deleteData(ApiConstants.ResponsibilitiesURL, data[indexToDeleteAt])
          break;
        case Models.ApplicableStandardsM:
          Models.deleteData(ApiConstants.ApplicableStandardsURL, data[indexToDeleteAt])
          break;
        case Models.DonatesM:
          Models.deleteData(ApiConstants.DonatesURL, data[indexToDeleteAt])
          break;
        case Models.UsersM:
          console.log(data[indexToDeleteAt]);
          Models.deleteDataId(ApiConstants.UserURL, data[indexToDeleteAt]["id"]);
          break;
      }
    }
  }

  return(
    <div>
      <Button
        onClick={() => handleDelete()}
        primary color="danger">
        DELETE
      </Button>

      <table id="customers">
        <tr>
          <th>Check a heart box and click the delete button to remove row. <br/>Note: this column is not a part of the database. It is only used in frontend to easily select database keys.</th>
          {TopColumns}
        </tr>

        {Object.values(data).map((row, row_i) => {
          return(
            <tr>
            <FormControlLabel
              label={row_i}
              onChange={handleChange(row_i)}
              control={<RoseCheckbox
                icon={<FavoriteBorder />}
                checked={state.checked}
                checkedIcon={<Favorite />}
                name={`checked`}/>
              }
            />
            {Object.values(row).map((cell, cell_i) => {
              return(
                <td>{cell}</td>
              )
            })}
            </tr>
          )
        })}
      </table>
    </div>
  )
}
