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


function mcd(a, b) {
    if (b == 0) return a;
    mcd(a, a % b);
}

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


function fib(n) {
    return (n > 1) ? fib(n - 1) + fib(n - 2) : n;
}
module.exports.fib = fib;
/**
 * f_n+1 = f_n + f_n-1
 * f_0 = 0; f_1 = 1
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
function fibCache(n) {

    fibCache.cache = fibCache.cache || {};

    if (fibCache.cache[n])
        return fibCache.cache[n];

    fibCache.cache[n] = (n > 1) ? fibCache(n - 1) + fibCache(n - 2) : n;

    return fibCache.cache[n];
}


/**
 * Large numbers multiplication
 * @param  {String} a first number
 * @param  {String} b second num
 * @return {String}   [description]
 * a = 15
 * b = 32
 */
function multiplication(a, b) {
    a = a + "";
    a = a.split('');

    b = b + "";
    b = b.split("");

    var n = a.length;
    var m = b.length;

    var table = {};
    var max = 0;
    var result = [];

    var i, j, k, carry, value;

    for (i = n - 1, k = 0; i >= 0; i--, k++) {
        carry = 0;
        value = 0;
        table[k] = [];

        for (j = m - 1; j >= 0; j--) {

            value = a[i] * b[j] + carry;
            carry = (value - value % 10) / 10;
            value = (carry > 0) ? value - carry * 10 : value;
            //table[k].splice(0, 0, value);
            table[k].push(value);

            if (j === 0 && carry !== 0) {
                //table[k].splice(0, 0, carry);
                table[k].push(carry);
            }
        }

        for (var s = k; s > 0; s--) {
            table[k].splice(0, 0, 0);
        }

        if (table[k].length >= max) {
            max = table[k].length;
        }
    }

    carry = 0;
    for (j = 0; j < max; j++) {
        var sum = 0;
        value = 0;
        for (i = 0; i < n; i++) {
            value = table[i][j];
            value = (value != undefined) ? value : 0;
            sum += value;
        }
        sum += carry;
        carry = (sum - sum % 10) / 10;
        sum = (carry > 0) ? sum - carry * 10 : sum;

        result.splice(0, 0, sum);
    }

    return result.join('');
};

module.exports.fibCache = fibCache;