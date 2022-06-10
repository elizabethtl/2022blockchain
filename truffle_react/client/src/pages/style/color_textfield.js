import { alpha, styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';



const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ba000d"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ba000d"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "coral"
    },
    "&:hover fieldset": {
      borderColor: "#c62828"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ba000d"
    }
  }
});

export default CssTextField;




