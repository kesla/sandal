
var test = require("tap").test,
	Sandal = require('../sandal.js');

test('Resolve transient service with singleton dependencies twice', function (t) {

	var sandal = new Sandal();

    var i = 0;
	var service1 = function (service2) {
        i++;
		this.value =  '' + i + service2.value;
	};

    var j = 0;
    var service2 = function () {
        j++;
        this.value =  j.toString();
    };

	sandal.registerService('service1', service1, true);
    sandal.registerService('service2', service2);

    t.plan(2);

	sandal.resolve(function(err, service1) {
		t.equal(service1.value, '11', 'Should create service and dependency');
	});

	sandal.resolve(function(err, service1) {
		t.equal(service1.value,'21', 'Should create service but use old dependency');
	});

});