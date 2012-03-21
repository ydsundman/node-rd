var net = require('net');

var s = net.createServer(function(socket) {

	socket.on('data', function(d) {
	});

	socket.on('end', function() {
	});

});

s.listen(3000);

console.log('Server listening at localhost:3000');
