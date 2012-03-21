var net = require('net');

var s = net.createServer();

s.on('connection', function(socket) {
	console.log('socket created!');
	socket.on('data', function(d) {
		console.log('data: ' + d);
	});
});

s.listen(3000);

console.log('http://localhost:3000');
