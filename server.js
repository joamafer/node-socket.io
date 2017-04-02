'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('guarra', new Date().toTimeString()), 1000);

var http = require('http');
    var server2 = http.createServer ( function(request,response){

    response.writeHead(200,{"Content-Type":"text\plain"});
    if(request.method == "GET")
        {
        	console.log("Recibido GET");
            response.end("received GET request.")
        }
    else if(request.method == "POST")
        {
        	console.log("Recibido POST");
            response.end("received POST request.");
        }
    else
        {
        	console.log("Recibido ALGO");
            response.end("Undefined request .");
        }
});

server2.listen(8000, function() {
    console.log("Server running on port 8000 jose");
});
