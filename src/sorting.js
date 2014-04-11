/**
 * Insertion Sort for JAvascript
 * Complexity: O(n^2)
 * @param  {Array} array
 * @return {Array}
 */
function insertionSort(array) {
    for (var i = 0; i <= array.length; i++) {
        var j = i;
        while (j > 0 && array[j - 1] > array[j]) {
            temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
    return array;
}

module.exports.insertionSort = insertionSort;



/**
 * [ 1, 2, 3, 4, 5, 6 ]
 * Binary Search for Javascript
 * T(n) = T(n/2) + c
 * Input binarySearch([1, 2, 3, 4], 0, array.length, 3);
 */
function binarySearch(array, number) {

    var middle = array.length / 2 | 0;

    if (array[middle] == number)
        return true;

    var value = array[middle],
        left = array.splice(0, middle);

    return (number > value) ? binarySearch(array, number) : binarySearch(left, number);

}

module.exports.binarySearch = binarySearch;




function mergesort(array, start, end) {
    var start = start || 0;
    var end = end || array.length - 1;
    var medium = ~~ ((start + end) / 2);

    if (start == medium) {
        var s = [];
        if (array[start] > array[end]) {
            var tmp = array[start];
            array[start] = array[end];
            array[end] = tmp;

        }

        console.log(s, end);
        return;
    }

    mergesort(array, start, medium);
    mergesort(array, medium + 1, end);

    console.log("this is array", array);



}



module.exports.mergeSort = mergesort;