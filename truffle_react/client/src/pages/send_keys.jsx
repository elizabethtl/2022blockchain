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
import AlertGK from './component/alertGK';

function SendKeysPage({ socket }) {

  const [pk, setPK] = useState('');
  const [sk, setSK] = useState('');
  const [gk, setGK] = useState('');

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

    socket.on('pass_gk', (data) => {
      console.log("pass gk");
      console.log(data);

      setGK(data);
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
    if (input_gk !== '') {
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
      <AlertGK receiveGK={sk}/>

      <DialogPK handleSendPK={sendPK} />

      <DialogPKSK receivePK={pk} handleSendGK={sendGK} />
      <Button>解開基因鑰</Button>
    </Stack>
  )
}

export default SendKeysPage;