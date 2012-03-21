var http = require('http'),
	url = require('url'),
	util = require('util');

// $ curl -i "http://localhost:3000/?p=xxx&xxx=p"
// HTTP/1.1 200 OK
// Content-Type: text/plain
// Connection: keep-alive
// Transfer-Encoding: chunked
//
// { p: 'xxx', xxx: 'p' }
