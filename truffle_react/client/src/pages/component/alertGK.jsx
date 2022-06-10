import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertGK({ receiveGK }) {

  const [gk, setGK] = React.useState('');

  React.useEffect(() => {
    setGK(receiveGK);
  });

  if (receiveGK !== "") {
    console.log("received gene key -" + receiveGK + "-");
    return (
      <Alert severity='success'>
        you have received the gene key!
      </Alert>
    )
  } else {
    console.log("did not recieve gene key");
    return (
      <Alert severity='warning'>
        yet to receive gene key!
      </Alert>
    )
  }

}