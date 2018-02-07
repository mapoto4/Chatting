var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    users = [];
app.use('/', express.static(__dirname + '/index'));
server.listen(8080);

io.sockets.on('connection', function(socket) {
    socket.on('postMsg', function(msg) {
		console.log(msg);
        socket.broadcast.emit('newMsg', msg);
    });
  
});