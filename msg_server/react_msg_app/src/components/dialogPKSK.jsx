import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogPKSK({receivePK, handleSendSK}) {
  const [open, setOpen] = React.useState(false);
  const [sk, setSK] = React.useState('');
  const pk = receivePK;
  console.log("received pk -" + pk + '-');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log("sk is " + sk);
    if (sk !== '') {
      setOpen(false);
      
      // encrypt sk with the pk received here
      // add stuff

      handleSendSK(sk);
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        整合公鑰私鑰
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>整合公鑰私鑰</DialogTitle>
        <DialogContent>
          <DialogContentText>{(pk !== '') ?  `公鑰：${pk}` : `尚未得到公鑰`}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            placeholder='請輸入私鑰'
            value={sk}
            label='私鑰'
            onChange={(e) => setSK(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSend}>傳送</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}