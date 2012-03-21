var crisp = require('../lib/crisp');

exports['test Crisper function exists'] = function(test) {
	test.equals(typeof crisp.Crisper, 'function', 'there should be a Crisper function');
	test.done();
};

exports['creating an instance of Crisper should have properties name and specialty'] = function(test) {
	var matsh = new crisp.Crisper('Mats Henricson', 'Bitcoin');
	test.ok(matsh);
	test.equals(matsh.name, 'Mats Henricson');
	test.equals(matsh.specialty, 'Bitcoin');
	test.done();
};

exports['creating an instance of Crisper should throw an exception if no name is provided'] = function(test) {
	var f = function() {
		new crisp.Crisper();
	};
	test.throws(f);
	test.done();
};

exports['creating an instance of Crisper with only a name should default specialty to "none"'] = function(test) {
	var daniel = new crisp.Crisper('Daniel Sundman');
	test.equals(daniel.specialty, 'none');
	test.done();
};

exports['a newly baked Crisper should have his/her RD count set to 0'] = function(test) {
	var daniel = new crisp.Crisper('Daniel Sundman');
	test.equals(daniel.rdCount, 0);
	test.done();
};

exports['there should be a method giveRd'] = function(test) {
	var yassal = new crisp.Crisper('Yassal Sundman');
	test.equals(typeof yassal.giveRd, 'function', 'there should be a giveRd method');
	test.done();
};

exports['giving an RD should increment the RD count by 1'] = function(test) {
	test.expect(1);
	var daniel = new crisp.Crisper('Daniel Sundman'), rdCountStarted = daniel.rdCount;
	daniel.giveRd(function() {
		test.equals(daniel.rdCount, rdCountStarted + 1);
		test.done();
	});
};

exports['the giveRd method should take a callback argument'] = function(test) {
	var yassal = new crisp.Crisper('Yassal Sundman');
	test.equals(yassal.giveRd.length, 1, 'there should be one argument to the giveRd method');
	test.done();
};
