import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Stack, Box } from '@mui/material';
import Header from "./component/Header";
import { height } from "@mui/material/node_modules/@mui/system";
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
      <Header title='傳輸公私鑰' />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          margin: '50px',
        }}
        >
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
            width: '300px',
            height: '200px'
          }}>

          <form className='homepage'>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={1}
            >

              <TextField
                placeholder="輸入username"
                label='username'
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <br/>
              <TextField
                placeholder="輸入roomname"
                label='roomname'
                value={roomname}
                onChange={(e) => setroomname(e.target.value)}
              />
              <br/>
              {/* <Link to={`/msg_home/chat/${roomname}/${username}`} >
          <Button variant='contained' onClick={sendData}>Join</Button>
        </Link> */}

              <Link to={`/msg_home/keys/${roomname}/${username}`}
                style={{ textDecoration: 'none' }}>
                <Button variant='contained' onClick={sendData}>加入</Button>
              </Link>

            </Stack>
          </form>
        </Box>
      </Box>



    </div>
  )
}

export default MsgHomePage;