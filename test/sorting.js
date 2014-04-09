 var assert = require('assert');

 var sorting = require('../src/sorting');

 suite('sorting', function() {

     test('Testing insertion sort', function() {
         assert.deepEqual([1, 2, 3, 4], sorting.insertionSort([4, 2, 3, 1]));
     });

     test("Binary search", function() {
         var array = [1, 2, 3, 4];
         assert.equal(true, sorting.binarySearch([1, 2, 3, 4, 8, 12, 23, 43, 5463, 542345, 23452345, 66666666666], 542345));
     });

     test("Merge sort", function() {
         var array = [5, 9, 7, 2, 9, 2, 1];
         assert.equal(true, sorting.mergeSort(array));
     });


 });