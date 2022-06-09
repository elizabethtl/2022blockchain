import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertPK({ receivePK }) {

  const [pk, setPK] = React.useState('');

  React.useEffect(() => {
    setPK(receivePK);
  });

  if (pk === "") {
    console.log("did not recieve public key");
    return (
      <Alert severity='warning'>
        yet to receive public key!
      </Alert>
    )
  } else {
    console.log("received public key -" + pk + "-");
    return (
      <Alert severity='success'>
        you have received the public key!
      </Alert>
    )
  }
}