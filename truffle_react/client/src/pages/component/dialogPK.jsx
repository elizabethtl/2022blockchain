import * as React from 'react';
import {
  Button,
  Box,
  TextField,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

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
      <Dialog 
        open={open} 
        onClose={handleClose}
        fullWidth='true'
        maxWidth='false'>
        <DialogTitle>傳送公鑰</DialogTitle>
        <DialogContent>
          <DialogContentText>傳送公鑰給使用者</DialogContentText>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '100%',
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              fullWidth='true'
              multiline='true'
              placeholder='請輸入公鑰'
              value={pk}
              label='公鑰'
              onChange={(e) => setPK(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSend}>傳送</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}