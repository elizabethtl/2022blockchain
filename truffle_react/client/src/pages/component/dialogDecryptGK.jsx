import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { JSEncrypt } from 'jsencrypt';

export default function DialogDecryptGK({ receiveGK, handleSendDecryptedGK }) {
  const [open, setOpen] = React.useState(false);
  const [sk, setSK] = React.useState('');
  const [decrypted_gene_key, setDecryptedGeneKey] = React.useState('');
  const gk = receiveGK;
  console.log("received gk -" + gk + '-');

  // decrypt gene key 
  const decrypt = () => {

    // decrypt with the sk received here
    // add stuff
    const decrypt = new JSEncrypt({ default_key_size: 512 });
    decrypt.setPrivateKey(sk);
    var uncrypted = decrypt.decrypt(gk);
    console.log("decrypted gene key ---" + uncrypted + '---');
    setDecryptedGeneKey(uncrypted);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        解開基因鑰
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>解開基因鑰</DialogTitle>
        <DialogContent>
          <DialogContentText>{(gk !== '') ? `基因鑰：${gk}` : `尚未得到基因鑰`}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            placeholder='請輸入你的私鑰'
            value={sk}
            label='私鑰'
            onChange={(e) => setSK(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={decrypt}>解密</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}