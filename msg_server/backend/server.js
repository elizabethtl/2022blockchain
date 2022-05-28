// var app = require('express');
// var http = require('http').createServer(app);
const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const PORT = 5000;

var dummy = require('./dummyuser.js');

app.use(express());
app.use(cors());
var server = app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

const io = socket(server);

io.on('connection', socket => {

  socket.on('join', ({username, roomname}) => {
    console.log("new user " + username + " joined room " + roomname);
    
    // create user
    const newUser = dummy.join_user(socket.id, username, roomname);
    console.log("newUser: " + username + " " + roomname);

    console.log("id=" + socket.id);
    socket.join(newUser.room);

    // display welcome message to user who joined
    socket.emit("message", {
      userId: newUser.id,
      username: newUser.username,
      text: `Welcome ${newUser.username}`,
    });

    // broadcast message to room
    socket.to(newUser.room).emit('message', {
      userId: newUser.id,
      username: newUser.username,
      text: `${newUser.username} has joined the chat`,
    });
  });

  // user sends message
  socket.on('chat', (text) => {
    console.log("new chat msg:" + text);

    const user = dummy.get_current_user(socket.id);
    console.log("chat user id:" + user.id);
    console.log("chat user room:" + user.room);

    // send to self
    socket.emit('message', {
      userId: user.id,
      username: user.username,
      text: text
    });
    // send to others in
    socket.in(user.room).emit('message', {
      userId: user.id,
      username: user.username,
      text: text
    });
  });

  // when user exits room
  socket.on('disconnect', () => {
    // delete user from array of users
    console.log("disconnected");
    const rmUser = dummy.user_disconnect(socket.id);
    

    if(rmUser){
      console.log("disconnect user id:" + rmUser.id);

      socket.to(rmUser.room).emit('message', {
        userId: rmUser.id,
        username: rmUser.username,
        text: `${rmUser.username} has left chat`
      });
    }
  });

  // socket.on('disconnect', () => {
  //   console.log("disconnected");
  // });
});

