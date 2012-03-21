var net = require('net');

net.createServer(function(socket) {
	console.log('socket connect!');
	socket.on('data', function(d) {
		console.log('data: ' + d);
	});
}).listen(3000);

console.log('http://localhost:3000');
