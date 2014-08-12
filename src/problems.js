/**
 * Problem 1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
 * sumOfMultiplesOf
 * @return {[type]}
 */
function multiplesOf3And5() {
	for(var i = 0, sum = 0; i < 1000 - 1; i++, sum+=(i % 5 == 0 || i % 3 == 0) ? i : 0) { }
	return sum;
}

module.exports.mutiplesOf = multiplesOf; // 233168


function problem2() {

	
}
