var http = require('http');
var fs = require('fs');
var sio = require('socket.io');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('index.html', function(err, data) {
		if (err) throw err;
		res.end(data);
	});
});
server.listen(3000);
console.log('http://localhost:3000/index.html');

var io = sio.listen(server);
io.sockets.on('connection', function(socket) {
	socket.on('set-name', function(d) {
		socket.name = d;
		socket.broadcast.emit('msg', 'user ' + d + ' connected');
	});
	socket.on('msg', function(d) {
		socket.broadcast.emit('msg', 'user ' + socket.name + ' says: ' + d);
	});
});
