import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogPK({ handleSendPK }) {
  const [open, setOpen] = React.useState(false);
  const [pk, setPK] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log("pk is " + pk);
    if (pk !== '') {
      setOpen(false);
      handleSendPK(pk);
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        傳送我的公鑰
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>傳送公鑰</DialogTitle>
        <DialogContent>
          <DialogContentText>傳送公鑰給使用者</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            placeholder='請輸入公鑰'
            value={pk}
            label='公鑰'
            onChange={(e) => setPK(e.target.value)}
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