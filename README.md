Node.js RD 2012-03-22
=====================

Instructions, code snippets, demos and labs for the Node.js RD held at the Crisp office in Stockholm on March 22nd 2012.

Presentation
------------

## Intro

## Lab 1 (Echo Query Parameter Web Server)

[Really Old JavaScript RD](http://www.yds.se/crisprd/daniel/javascript/js-a.4-functions.html) might be helpful as a refresher,
[and this one](http://www.yds.se/crisprd/daniel/javascript/js-c.1-closures.html).

Create a Web Server that responds with the query parameters passed as JSON strings. Example response:

	$ curl -i "http://localhost:3000/?p=xxx&xxx=p"
	HTTP/1.1 200 OK
	Content-Type: text/plain
	Connection: keep-alive
	Transfer-Encoding: chunked

	{ p: 'xxx', xxx: 'p' }

Some hints can be found in `labs/lab1-web-server/server.js`.

## Lab 2 (testing with nodeunit)

	npm install -g nodeunit
	cd labs/lab2-nodeunit
	nodeunit test

Depending on your OS you may need to `sudo` (or equivalent) the `npm install` command.

## Lab 3 (chat server)

Create a Chat Server where each socket is identified by an id of the form `id-[count]`.

### Possibly Helpful

* [net api](http://nodejs.org/api/net.html)
* JavaScript is a dynamic language.

## Lab 4 (web server with Express)

	npm install -g express
	mkdir labs/lab4-express
	cd labs/lab4-express
	express --help

Depending on your OS you may need to `sudo` (or equivalent) the `npm install` command.

Create a web application using the `express` executable, template engine ejs, no session support and plain css.

## Lab 5 (socket.io)

	npm install -g socket.io
	mkdir labs/lab5-socket.io
	cd labs/lab5-socket.io

Create a browser based chat application using socket.io. A starting point can be found in `labsolutions/lab5-socket.io`


## Useful links
* [Node Download](http://nodejs.org/#download)
* [Node Documentation](http://nodejs.org/api/index.html)
* [Old JavaScript RD](http://www.yds.se/crisprd/daniel/javascript/index.html)
* [Old JavaScript RD on Functions](http://www.yds.se/crisprd/daniel/javascript/js-a.4-functions.html)

## References
* [Node](http://nodejs.org/)
* [Node on github](https://github.com/joyent/node)
* [ryan dahl on youtube](http://www.youtube.com/watch?v=jo_B4LTHi3I)
* [Croucher on youtube](http://www.youtube.com/watch?v=AH7kw8sKefg)
* [The Node Beginner Book](http://www.nodebeginner.org/)
* [Understanding the node.js event loop](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)
* [Node.js Manual](http://nodemanual.org/latest/)
* [Node.js in Action (MEAP)](http://manning.com/cantelon/)
