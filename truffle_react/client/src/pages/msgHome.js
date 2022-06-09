import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Stack } from '@mui/material';
//import "./home.scss";

function MsgHomePage({ socket }) {
  const [username, setusername] = useState("");
  const [roomname, setroomname] = useState("");

  console.log("homepage");

  const sendData = () => {
    if (username !== '' && roomname !== '') {
      socket.emit('join', { username, roomname });
      console.log("socket emit join");
    } else {
      alert('please input username and roomname');
      window.location.reload();
    }
  }


  return (
    <form className='homepage'>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={1}
      >
        <h1>welcome to the chat app</h1>

        <TextField
          placeholder="username"
          label='username'
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <TextField
          placeholder="roomname"
          label='roomname'
          value={roomname}
          onChange={(e) => setroomname(e.target.value)}
        />

        <Link to={`/msg_home/chat/${roomname}/${username}`} >
          <Button variant='contained' onClick={sendData}>Join</Button>
        </Link>

        <Link to={`/msg_home/keys/${roomname}/${username}`} >
          <Button variant='contained' onClick={sendData}>Join(keys)</Button>
        </Link>

      </Stack>
    </form>
  )
}

export default MsgHomePage;