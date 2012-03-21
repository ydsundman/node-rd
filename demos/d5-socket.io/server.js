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
	setInterval(function() {
		var d = new Date();
		socket.emit('tick', d);
	}, 1000);
});
