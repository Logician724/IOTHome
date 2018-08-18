const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io-client');
const socket = io.connect(
    'http://localhost:3000/',
    { reconnect: true });
console.log(socket);
socket.on('connect', function (socket) {
    console.log('successfully connected to socket');

});

socket.on('iotData', function (msg) {
    console.log('got a message from pi server ', msg);
});

server.listen(6000, function () {
    console.log('listening on port 6000');
});

