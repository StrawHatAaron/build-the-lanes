//Aaron Miller
import React, {useState, useEffect,} from "react";
import Rows from "components/Tables/Rows.js";
import "components/Tables/Table.css";
import {Headers} from "views/HomeLoggedIn/Models.js"
import Button from "components/CustomButtons/Button.js";

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

  const [state, setState] = React.useState({
    checkedA:false,
    checkedB:false,
    checkedC:false
  });

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(props.url, {
      method: 'GET',
      headers:  Headers
      })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setState(Object.values(data).map((row, row_i) => {
        return {[`checked${row_i}`]: false};
      }));
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    //delete array from top to bottom
    console.log("The data's indicies to be deleted at", state)
  };

  var TopColumns = Object.values(props.columns).map((c) => {
    return(
      <th>{c}</th>
    )
  })

  return(
    <div>
      <table id="customers">
        <tr>
          <th>Check the heart box(s) to delete</th>
          {TopColumns}
        </tr>

        {Object.values(data).map((row, row_i) => {
          return(
            <tr>
            <FormControlLabel
              label="Custom icon"
              onChange={handleChange}
              control={<RoseCheckbox
                icon={<FavoriteBorder />}
                checked={state.checked}
                checkedIcon={<Favorite />}
                name={`checked${row_i}`}/>
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
