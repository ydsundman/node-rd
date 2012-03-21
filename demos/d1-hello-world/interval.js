setInterval(function() {
	console.log('hello');
}, 1000);

process.on('SIGINT', function() {
	console.log('good bye!');
	process.exit(0);
});
