var _ = require('/Users/gabrielbodeen/Documents/project-euler/lodash');

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var problem001 = function(n) {
    return sum(range(1, n).filter(function(x) {
        return x % 3 === 0 || x % 5 === 0;
    }));
}

var range = function(...n) {
    return _.range(...n);
}

var sum = function(...n) {
    return _.sum(...n);
}

console.log(problem001(1000));