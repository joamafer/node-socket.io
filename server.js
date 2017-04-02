'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// server.get('/', function(req, res){
//     console.log('JOSE GET /')
//     var html = fs.readFileSync('index.html');
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(html);
// });

// server.post('/', function(req, res){
//     console.log('JOSE POST /');
//     console.dir(req.body);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('thanks');
// });