import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertSK({ receiveSK }){

  const [sk, setSK] = React.useState('');

  React.useEffect(() => {
    setSK(receiveSK);
  });

  if(receiveSK !== ""){
    console.log("received secret key -" + receiveSK + "-");
    return (
    <Alert severity='success'>
        you have received the secret key!
      </Alert>
    )
  } else {
    console.log("did not recieve secret key");
    return (
      <Alert severity='warning'>
        yet to receive secret key!
      </Alert>
    )
  }

}