import { alpha, styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import {ButtonProps} from '@mui/material/ButtonProps'
// import { purple } from '@mui/material/colors';


export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "coral"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "coral"
    },
    "&:hover fieldset": {
      borderColor: "coral"
    },
    "&.Mui-focused fieldset": {
      borderColor: "green"
    }
  }
});




// export const ColorButton = styled(Button) < ButtonProps > (({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: purple[500],
//   '&:hover': {
//     backgroundColor: purple[700],
//   },
// }));





