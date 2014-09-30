var assert = require('assert');
var eachCSV = require('../index');

describe('eachCSV', function(){
	it('iterate', function(){
		var log = []
		eachCSV('a, b(1,2), c, d\nx, "e",', function(a){
			log.push(a)
		})

		assert.deepEqual(log, ['a', 'b(1,2)', 'c', 'd\nx', '"e"', ''])
	});

	it('empty', function(){
		var log = []
		eachCSV('', function(a){
			log.push(a)
		})

		assert.deepEqual(log, [])
	});

	it('undefined', function(){
		var log = []
		eachCSV(undefined, function(a){
			log.push(a)
		})

		assert.deepEqual(log, [])
	});
})