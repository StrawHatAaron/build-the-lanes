//Aaron Miller
import React, {useState, useEffect,} from "react";
import Rows from "components/Tables/Rows.js";
import "components/Tables/Table.css";
import Button from "components/CustomButtons/Button.js";

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Table(props){

  console.log(props)

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(props.url, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
      })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      console.log('data:', data);
      console.log('data values:', Object.values(data)[0]);
      console.log('data keys:', Object.keys(data)[1]);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, [])

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  var TopColumns = Object.values(props.columns).map((c) => {
    return(
      <th>{c}</th>
    )
  })

  return(
    <div>
      <Button
        onClick={() => {}}
        primary color="success">
        SELECT/GET Users
      </Button>
      <table id="customers">
        <tr>
          <th>Select</th>
          {TopColumns}
        </tr>
        {Object.values(data).map((row, row_i) => {
          return(
            <tr>
            <FormControlLabel
              styles={{marginLeft:"20px"}}
              label="Custom icon"
              onChange={handleChange}
              control={<GreenCheckbox
                icon={<FavoriteBorder />}
                checked={state.checked}
                checkedIcon={<Favorite />}
                name="checked"/>}/>
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
