import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { JSEncrypt } from 'jsencrypt';

export default function DialogPKSK({ receivePK, handleSendGK }) {
  const [open, setOpen] = React.useState(false);
  const [gene_key, setGeneKey] = React.useState('');
  const pk = receivePK;
  console.log("received pk -" + pk + '-');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    console.log("gene key is " + gene_key);
    if (gene_key !== '') {
      setOpen(false);

      // encrypt with the pk received here
      // add stuff
      const encrypt = new JSEncrypt({ default_key_size: 512 });
      encrypt.setPublicKey(pk);

      // encrypt geneKey
      var encrypted_gene_key = encrypt.encrypt(gene_key);

      handleSendGK(encrypted_gene_key);
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        整合公鑰以及基因鑰
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth='true'
        maxWidth='false'>
        <DialogTitle>整合公鑰以及基因鑰</DialogTitle>
        <DialogContent maxWidth='false'>
          <DialogContentText>
            {(pk !== '') ? `公鑰：${pk}` : `尚未得到公鑰`}
            </DialogContentText>
          
            <TextField
              autoFocus
              margin="dense"
              fullWidth='true'
              multiline='true'
              placeholder='請輸入基因鑰'
              value={gene_key}
              label='基因鑰'
              onChange={(e) => setGeneKey(e.target.value)}
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