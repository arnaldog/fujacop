 var assert = require('assert');

 var basics = require('../src/basics'),
     factors = basics.factors,
     minOfArguments = basics.minArgument,
     minOfArray = basics.minOfArray;




 suite('basics', function() {
     test('Factors of a given number should return an array with numbers', function() {
         assert.deepEqual([1, 2, 3, 6], factors(6));
     });

     test('Factors of a given number should return an array with numbers', function() {
         assert.deepEqual([1, 3, 9], factors(9));
     });

     test('Find a min value of arguments', function() {
         assert.equal(1, minOfArguments(1, 100, 99));
     });

     test('Find a min value of an array', function() {
         assert.equal(1, minOfArray([1, 100, 99]));
     });

     test('Find prime factors of a given number', function() {
         assert.deepEqual([2, 2, 3], basics.primeFactors(12));
     });


 });