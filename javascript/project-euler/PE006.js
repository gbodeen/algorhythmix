/*
The sum of the squares of the first ten natural numbers is
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the 
first ten natural numbers and the square of the sum 
is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the 
first one hundred natural numbers and the square of the sum.
*/

function PE006(max) {
  return squareOfSum(max) - sumOfSquares(max);
}

function sumOfSquares(max) {
  sum = 0;
  for (let i = 1; i <= max; i++) {
    sum += i * i;
  }
  return sum;
}

function squareOfSum(max) {
  sum = (max / 2) * (max + 1);
  return sum * sum;
}

console.log(PE006(10)); // 2640
console.log(PE006(100)); // 25164150

