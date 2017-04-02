'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

var bodyParser = require('body-parser')
server.use(bodyParser.json());       // to support JSON-encoded bodies
// server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

// server.post('/test-page', function(req, res) {
//     console.log("recibido algo!!!!!!")
// });