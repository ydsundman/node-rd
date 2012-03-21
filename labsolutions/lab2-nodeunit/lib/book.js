
exports.salesService = {sales: function(isbn) {}};

exports.Book = function(name, isbn) {
	if (!isbn) {
		throw 'isbn must be provided';
	}
	this.name = name || 'unknown';
	this.isbn = isbn;
};

exports.Book.prototype.calcSales = function(cb) {
	cb(exports.salesService.sales(this.isbn));
};