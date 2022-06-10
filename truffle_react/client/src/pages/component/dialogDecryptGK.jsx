import * as React from 'react';
import {Button, 
        TextField, 
        Snackbar,
        Dialog,
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { JSEncrypt } from 'jsencrypt';

export default function DialogDecryptGK({ receiveGK }) {
  const [open, setOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decrypted_gene_key);
    setSnackbar(true);
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
          {(decrypted_gene_key === '') ?
            <div>
              <DialogContentText>{(gk !== '') ? `基因鑰：${gk}` : `尚未得到基因鑰`}</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                placeholder='請輸入你的私鑰'
                value={sk}
                label='私鑰'
                onChange={(e) => setSK(e.target.value)}
              />
            </div>
            :
            <div>
              <DialogContentText>{`得到基因鑰：${decrypted_gene_key}`}</DialogContentText>
              <Button onClick={copyToClipboard}><ContentCopyIcon /></Button>
              <Snackbar
                open={snackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message="已複製基因鑰"
              />
            </div>
          }

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={decrypt}>{(decrypted_gene_key === '') ? `解密` : `完成`}</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}