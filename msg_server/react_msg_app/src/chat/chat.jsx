import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Stack } from '@mui/material';
import "./chat.scss";

function ChatPage({ socket }) {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState([]);
  const [count, setCount] = useState(0);

  let params = useParams();
  let username = params.username;
  let roomname = params.roomname;
  let id = socket.id;

  console.log('chat page id:' + id + ' username:' + username + " roomname:" + roomname);

  // not receiving incoming messages
  useEffect(() => {
    socket.on('message', (data) => {
      let temp = msg;
      temp.push({
        "key": count,
        "userId": id,
        "username": username,
        "text": data.text,
        "fromUserId": data.userId,
        "fromUsername": data.username
      });
      setMsg([...temp]);

      console.log("msg array");
      console.log(msg);

      setCount(count + 1);

    });
  }, []);

  const sendData = () => {
    console.log('text from sendData:' + text);
    if (text !== '') {
      socket.emit('chat', text);
      setText('');
    }
  }

  return (
    <Stack direction="row" spacing={2}>
      <div className='chat'>
        <Stack
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={1}
        >
          <div className='user-name'>
            <h2>
              {username} <span style={{ fontSize: '0.7rem' }}>in {roomname}</span>
            </h2>
          </div>

          <div className='chat-msg'>
            {msg.map((i) => {
              if (i.userId === i.fromUserId) {
                return (
                  <div className='incoming-msg-left own-msg'>
                    <p>{i.text}</p>
                    <span>{i.fromUsername}</span>
                  </div>
                );
              } else {
                return (
                  < div className='incoming-msg-left' >
                    <p>{i.text}</p>
                    <span>{i.fromUsername}</span>
                  </div>
                );
              }
            })}
          </div>

          <div className='send'>
            <TextField
              placeholder='enter message'
              value={text}
              label='message'
              onChange={(e) => setText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendData();
                }
              }}
            />
          </div>

          <Button onClick={() => sendData()}>Send</Button>
        </Stack>

      </div>
      <></>
    </Stack>

  )
}

export default ChatPage;