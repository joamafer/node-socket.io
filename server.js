'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
server.use(bodyParser.json());       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Socket.IO
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.post('/stories', function(req, res) {
    console.log(req.body.result.action)
    io.emit('action', req.body.result.action)
});