import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import io  from "socket.io-client";


import HomePage from './pages/home.js';
import ChatPage from './pages/chat.jsx';
import TestPage from './test';
import SendKeysPage from './pages/send_keys';
import RSApage from './pages/rsa';

var socket = io.connect('/');
socket.on('connect', () => {
  console.log("i'm connected with back-end")
});

socket.on('message', (data) => {
  console.log("incoming message:" + data);
});

class App extends React.Component{
  render() {
    console.log("app");

    return (
      <Router>
          <Routes>
            <Route path="/" element={<HomePage socket={socket}/>}></Route>
            <Route path='/keys/:roomname/:username' element={<SendKeysPage socket={socket}/>}></Route>
            <Route path="/test" element={<TestPage />}></Route>
            <Route path="/chat/:roomname/:username" element={<ChatPage socket={socket}/>} />
            <Route path='rsa' element={<RSApage />}/>
          </Routes>
        
      </Router>
    );
  }
}

export default App;
