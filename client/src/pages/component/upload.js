import React from 'react';
import { TextField, Button, Stack } from '@mui/material';

const Upload = ({onUpload}) => {
  const [id, setId] = React.useState('');
  const [gene, setGene] = React.useState('');

  const onSubmit = (e) =>{
    e.preventDefault();

    if(!id || !gene) {
      alert("請輸入帳號及基因");
    }
    else {
      onUpload({id, gene});
    }
  }
  return (
    <form onSubmit={onSubmit}>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <div className='form-control'>
          <TextField
            id="outlined-multiline-static"
            label="帳號"
            multiline
            type="text"
            placeholder='輸入您的帳號'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <TextField
            id="outlined-multiline-static"
            label="基因"
            multiline
            rows={4}
            type="text"
            placeholder='輸入您的基因'
            value={gene}
            onChange={(e) => setGene(e.target.value)}
          />
        </div>
        <Button variant='contained' type='submit'>上傳</Button>
      </Stack>

    </form>
  )
}

export default Upload