 var assert = require('assert');

 var sorting = require('../src/sorting');

 suite('sorting', function() {

     test("Binary search", function() {
         var array = [1, 2, 3, 4];
         assert.equal(true, sorting.search.binary([1, 2, 3, 4, 8, 12, 23, 43, 5463, 542345, 23452345, 66666666666], 542345));
     });

     test('Testing insertion sort', function() {
         assert.deepEqual([1, 2, 3, 4], sorting.sort.insertion([4, 2, 3, 1]));
     });

     test("Merge sort", function() {
         assert.deepEqual([1,1, 2,3], sorting.sort.mergesort([1, 3, 2, 1]));
     });


 });