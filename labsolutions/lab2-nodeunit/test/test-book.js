var book = require('../lib/book');

exports['test Book function exists'] = function(test) {
	test.equals(typeof book.Book, 'function', 'there should be a Book function');
	test.done();
};

exports['an instance of Book should have properties name and isbn'] = function(test) {
	var nodeJsInAction = new book.Book('Node.js in Action', '9781617290572');
	test.ok(nodeJsInAction);
	test.equals(nodeJsInAction.name, 'Node.js in Action');
	test.equals(nodeJsInAction.isbn, '9781617290572');
	test.done();
};

exports['creating an instance of Book should throw an exception if no isbn is provided'] = function(test) {
	test.throws(function() {new book.Book('name');});
	test.done();
};

exports['creating an instance of Book should default name to "unknown" if none is provided'] = function(test) {
	var aBook = new book.Book(null, '9781617290572');
	test.ok(aBook);
	test.equals(aBook.name, 'unknown');
	test.done();
};

exports['Book should have a calcSales method'] = function(test) {
	var nodeJsInAction = new book.Book('Node.js in Action', '9781617290572');
	test.equals(typeof nodeJsInAction.calcSales, 'function');
	test.done();
};

exports['Book.calcSales should take one argument'] = function(test) {
	var nodeJsInAction = new book.Book('Node.js in Action', '9781617290572');
	test.equals(nodeJsInAction.calcSales.length, 1);
	test.done();
};

exports['Book.calcSales should call the book.salesService and return the answer in the callback'] = function(test) {
	test.expect(2);
	book.salesService = {sales: function(isbn) {
		test.equals(isbn, '9781617290572');
		return 3;
	}};
	var nodeJsInAction = new book.Book('Node.js in Action', '9781617290572');
	nodeJsInAction.calcSales(function(count) {
		test.equals(count, 3);
		test.done();
	});
};
