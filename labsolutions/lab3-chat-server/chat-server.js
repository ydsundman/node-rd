var net = require('net');

var count = 0, sockets = {};

var s = net.createServer(function(socket) {

	socket.id = ('id-' + count++);
	sockets[socket.id] = socket;

	socket.on('data', function(d) {
		for (var s in sockets) {
			if (socket !== sockets[s]) {
				sockets[s].write(d);
			}
		}
	});

	socket.on('end', function() {
		delete sockets[socket.id];
	});

});

s.listen(3000);

console.log('Server listening at localhost:3000');
