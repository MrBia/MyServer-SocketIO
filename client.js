io = require('socket.io-client');

var socket = io.connect('http://127.0.0.1:8888');

socket.emit('test', 'anh hao');
