exports.Crisper = function(name, specialty) {
	if (!name) {
		throw 'Name is required';
	}
	this.name = name;
	this.specialty = specialty || 'none';
	this.rdCount = 0;
};

exports.Crisper.prototype.giveRd = function(cb) {
	var that = this;
	setTimeout(function() {
		that.rdCount += 1;
		cb();
	}, 2000);
};