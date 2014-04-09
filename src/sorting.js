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


function merge(left, array) {
    for (var i = 0; i < left.length; i++) {

    }
}

function mergeSort(array) {


    if (array.length > 2) {
        var middle = array.length / 2 | 0;
        var left = array.slice(0, middle);
        var right = array.slice(middle, array.length);

        console.log("current arrays", left, right);
        mergeSort(left);
        mergeSort(right);

        console.log("please merge", left, right);

    } else {
        console.log("Uhuhhh Ending Element!", array);
        if (array.length == 2) {

            if (array[0] > array[1]) {
                var temp = array[0];
                array[0] = array[1];
                array[1] = temp;
                console.log("Now letsswap ending elements to", array);
            }
        }
    }
    // console.log("the array", array);
}

module.exports.mergeSort = mergeSort;