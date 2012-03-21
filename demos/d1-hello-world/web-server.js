var http = require('http');

var	s = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('Hello\n');
	setTimeout(function() {
		res.end('world!\n');
	}, 2000);
});

s.listen(3000);

console.log('Server running at http://localhost:3000');
