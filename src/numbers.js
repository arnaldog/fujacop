/**
 * This is a file for very basics algoritms
 */


/**
 * This is a factor decomposition function for agiven number
 * Complexity: O(n)
 * @param  {Integer} number the number to be decomposited
 * @return {Array} Array of factors
 */
function factors(n) {

    if (factors.cache && factors.cache[n])
        return factors.cache[n];

    var _factors = [];

    for (var i = 0; i <= n; i++) {
        if (n % i === 0) {
            _factors.push(i);
        }
    }

    factors.cache = factors.cache || {};
    factors.cache[n] = _factors;

    return _factors;

}
module.exports.factors = factors;


/**
 * This function returns the min value by given array
 * Complexity: O(n)
 * @return {Integer} minimun number of an array
 */
function minArgument() {

    var _min = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        if (_min > arguments[i]) {
            _min = arguments[i];
        }
    }
    return _min;
}
module.exports.minArgument = minArgument;

/**
 * Returns the min value given an array
 * @return {Integer} min value of a given array
 */
function minOfArray(array) {
    return minArgument.apply(this, array);
}
module.exports.minOfArray = minOfArray;


/**
 * Prime factors
 * @param  {integer} number number to be decomposed in prime factos
 * @return {Array} the array of prime factors
 */
function primeFactors(n) {

    var _primeFactors = [];

    for (var i = 2; i <= n; i++) { // find the first divisible number
        while (n % i === 0) {
            _primeFactors.push(i);
            n /= i;
        }
    }

    return _primeFactors;
}
module.exports.primeFactors = primeFactors;


// Ej: Factorial(0)

function factorial(n) {

    // return (n > 0) ? n*factorial(n-1) : 1; // factorial without cache
    if (factorial.cache && factorial.cache[n]) {
        return factorial.cache[n];
    }

    factorial.cache = factorial.cache ||  {};
    factorial.cache[n] = (n > 0) ? n * factorial(n - 1) : 1

    return factorial.cache[n];

}
module.exports.factorial = factorial;


/**
 * Great Common Divisor
 * @param  {Integer} a
 * @param  {Integer} b
 * @return {Integer} G.C.D
 */
function gcd(a, b) {
    // Definition: the greatest c, such c|a && c|b => gcd(a, b) = c 
    var _gcd = 1;
    for (var i = Math.min(a, b); i > 0; i--) {
        if (a % i === 0 & b % i === 0) {
            _gcd = i;
            break;
        }
    }

    return _gcd;
}
module.exports.gcd = gcd;

/**
 * Returns if a is congruent to b modulo c
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @param  {[type]} m [description]
 * @return {[type]}   [description]
 */
function congruent(a, b, m) {
    return (a - b) % m == 0; // c | (a - b) or a %m == 0 & b % m == 0
}

module.exports.congruent = congruent;


/**
 * Insertion Sort for JAvascript
 * Complexity: O(n^2)
 * @param  {Array} array
 * @return {Array}
 */
function insertion_sort(array) {
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

module.exports.insertion_sort = insertion_sort;