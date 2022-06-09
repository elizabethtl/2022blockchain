import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  TextField,
  Button,
  Stack
} from '@mui/material';

import DialogPK from './component/dialogPK';
import DialogPKSK from './component/dialogPKSK';
import AlertPK from './component/alertPK';
import AlertSK from './component/alertSK';

function SendKeysPage({ socket }) {

  const [pk, setPK] = useState('');
  const [sk, setSK] = useState('');

  let params = useParams();
  let username = params.username;
  let roomname = params.roomname;
  let id = socket.id;

  console.log('chat page id:' + id + ' username:' + username + " roomname:" + roomname);

  useEffect(() => {
    socket.on('pass_pk', (data) => {
      console.log("pass pk");
      console.log(data);
      setPK(data);
    });

    socket.on('pass_sk', (data) => {
      console.log("pass sk");
      console.log(data);
      setSK(data);
    });
  }, []);

  const sendPK = (input_pk) => {
    console.log("pk is " + input_pk);
    if (input_pk !== '') {
      //setPK(input_pk);
      socket.emit('pk', input_pk);
    }
  }

  const sendGK = (input_gk) => {
    console.log("gk is " + input_gk);
    if (input_sk !== '') {
      //setSK(input_sk);
      socket.emit('gk', input_gk);
    }
  }

  return (
    <Stack
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={1}>

      <div className='user-name'>
        <h2>
          {username} <span style={{ fontSize: '0.7rem' }}>in {roomname}</span>
        </h2>
      </div>

      <AlertPK receivePK={pk}/>
      <AlertSK receiveSK={sk}/>

      <DialogPK handleSendPK={sendPK} />

      <DialogPKSK receivePK={pk} handleSendSK={sendGK} />
      <Button>傳送我的私鑰</Button>
    </Stack>
  )
}

export default SendKeysPage;