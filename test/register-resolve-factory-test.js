
var test = require("tap").test,
	Sandal = require('../sandal.js');

test('Register and resolve factory', function (t) {

	var sandal = new Sandal();
	sandal.registerFactory('service', function() {
		return {
			name: 'service name'
		};
	});

	sandal.resolve(function(err, service) {
		t.equal(service.name, 'service name', 'should get the return value of the factory');
		t.end();
	});

});