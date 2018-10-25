var _ = require('/Users/gabrielbodeen/Documents/project-euler/lodash');

// Euler Problems for practice, from https://projecteuler.net/

// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var problem001 = function(n) {
    return _.chain(_.range(1, n))
        .filter(function(x) {
            return x % 3 === 0 || x % 5 === 0;
        })
        .sum()
        .value();
}

console.log(problem001(1000)); // -> 233168

