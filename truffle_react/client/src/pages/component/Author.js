import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Author = ({onType}) => {
    const [id, setId] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (!id) {alert("請輸入Locus!"); return;}
        onType({id});

    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <h4>基因授權請求</h4>
                
                <div className='form-control'>
                    <TextField
                        id="outlined-basic"
                        label="Locus"
                        type="text"
                        autoComplete="current-password"
                        placeholder='輸入您的Locus'
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <br/>
                <Button variant="contained" type='submit' size="large" >送出</Button>
            </Stack>

        </form>
    )
}

export default Author