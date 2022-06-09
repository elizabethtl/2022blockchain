import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { alpha, styled } from '@mui/material/styles';
import { CssTextField } from '../style/style.js'

const GeneGet = ({ onType }) => {
    const [id, setId] = useState('')
    const [key, setKey] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (!id) { alert("請輸入Locus!"); return; }
        if (!key) { alert("請輸入private key!"); return; }
        onType({ id, key });

    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="start"
                spacing={1}
            >
                <div className='form-control'>
                    <CssTextField
                        id="outlined-basic"
                        label="Locus"
                        type="text"
                        autoComplete="current-password"
                        placeholder="請輸入您的Locus"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <br />
                <div className='form-control'>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <CssTextField
                            id="outlined-basic"
                            label="private key"
                            type="text"
                            autoComplete="current-password"
                            placeholder="請輸入您的private key"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                        />
                        <Button variant="contained" type='submit' size="large" >送出</Button>

                    </Stack>
                    
                </div>
            </Stack>

        </form>
    )
}

export default GeneGet