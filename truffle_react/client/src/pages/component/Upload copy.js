import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Upload = ({onType}) => {
    const [id, setId] = useState('')
    const [gene, setGene] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (!id) { alert('請輸入Locus!'); return; }
        if (!gene) { alert('請輸入sequence!'); return; }
        onType({id, gene})
    }

    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <div className='form-control'>
                    <TextField
                        id="outlined-basic"
                        label="Locus"
                        type="text"
                        style={{width: 500}}
                        autoComplete="current-password"
                        placeholder='輸入您的Locus'
                        multiline
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <br/>
                <div className='form-control'>
                    <TextField
                        id="outlined-basic"
                        label="Sequence"
                        type="text"
                        style={{width: 500}}
                        autoComplete="current-password"
                        placeholder='輸入您的Sequence'
                        multiline
                        rows={8}
                        value={gene}
                        onChange={(e) => setGene(e.target.value)}
                    />
                </div>
                <br />
                <Button variant="contained" type='submit' size="large" >送出</Button>
            </Stack>
        </form>
    )
}

export default Upload