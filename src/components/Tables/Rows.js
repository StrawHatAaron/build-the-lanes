import React, {useState} from "react";
import "components/Tables/Table.css";
// import Columns from "components/Tables/Columns.js";
//Material UI
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

export default function Rows(props){

  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };



  return(
    <tr>
      <td>
      <FormControlLabel
        styles={{marginLeft:"20px"}}
        label="Custom icon"
        onChange={handleChange}
        control={<GreenCheckbox
          icon={<FavoriteBorder />}
          checked={state.checked}
          checkedIcon={<Favorite />}
          name="checked"/>}
        />
      </td>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
  )
}
