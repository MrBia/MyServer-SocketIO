var http = require('http'),
socketIO = require('socket.io'),

port = process.env.PORT || 8888,

server = http.createServer(function(req, res){
    
}).listen(port, '127.0.0.1', function(){
    console.log('server started')
}),

io = socketIO(server);

var run = function(socket){
    socket.on('test', function(data){
        console.log('only test ' + data);
    });
}

io.sockets.on('connection', run);