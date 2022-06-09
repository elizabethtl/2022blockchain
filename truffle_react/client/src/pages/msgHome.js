import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Stack, Box } from '@mui/material';
import Header from "./component/Header";
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
    <div className="container">
      <Header title='基因授權與資料' />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: 2,
          padding: '20px',
          margin: '50px',
        }}>

        <form className='homepage'>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={1}
          >

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

            {/* <Link to={`/msg_home/chat/${roomname}/${username}`} >
          <Button variant='contained' onClick={sendData}>Join</Button>
        </Link> */}

            <Link to={`/msg_home/keys/${roomname}/${username}`} >
              <Button variant='contained' onClick={sendData}>Join</Button>
            </Link>

          </Stack>
        </form>
      </Box>


    </div>
  )
}

export default MsgHomePage;