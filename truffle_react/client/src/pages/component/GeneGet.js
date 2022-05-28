import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { alpha, styled } from "@mui/material/styles";

const GeneGet = ({onType}) => {
    const [key, setKey] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (!key) {alert("請輸入private key!"); return;}
        onType({key});

    }

    const CssTextField = styled(TextField)({
        "& label.Mui-focused": {
          color: "yellow"
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "green"
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "red"
          },
          "&:hover fieldset": {
            borderColor: "yellow"
          },
          "&.Mui-focused fieldset": {
            borderColor: "green"
          }
        }
      });
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <h4>Private Key</h4>
                <br/>
                <div className='form-control'>
                    <CssTextField
                        className='textfield'
                        id="outlined-basic"
                        label=""
                        type="text"
                        autoComplete="current-password"
                        placeholder=""
                        // color="#FF7F50"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </div>
                <br/>
                <Button variant="contained" type='submit' size="large" >送出</Button>
            </Stack>

        </form>
    )
}

export default GeneGet