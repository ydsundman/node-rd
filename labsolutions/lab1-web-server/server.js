var http = require('http'),
	url = require('url'),
	util = require('util');

var s = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	var params = url.parse(req.url, true).query;
	res.end(util.inspect(params) + '\n');
});

s.listen(3000);
