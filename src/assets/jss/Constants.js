import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/styles'

export const green = '#4caf50';
export const greyBacking = '#D3D3D3';
export const greyText = '#868585';

export const CssTextField = withStyles({
  root: {
      '&': {
          display:'flex',
      },
      '& label.Mui-focused': {
          color: green,
      },
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
              borderColor: greyBacking,
          },
          '&:hover fieldset': {
              borderColor: greyText,
          },
          '&.Mui-focused fieldset': {
              borderColor: green,
          },
      },
  },
})(TextField);
