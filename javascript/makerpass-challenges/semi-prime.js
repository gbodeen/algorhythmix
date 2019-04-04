/* 
Given a possible semiprime, write a function that will return 
an array of both prime numbers that were used to create it. Only 
small semiprimes will be passed to your function so don’t worry 
about timing out.
*/

function semiPrime(number) {
  const factors = [];
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (isPrime(i) && number % i === 0) {
      factors.push(i);
      if (isPrime(number / i)) {
        factors.push(number / i);
      }
      if (factors.length > 2) { // for speed
        return 'Number is not semiprime';
      }
    }
  }
  if (factors.length < 2) {
    return 'Number is not semiprime';
  }
  return factors;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/*
time complexity: isPrime is O(sqrt(n)), and semiPrime wraps
 that in another O(sqrt(n)) loop, so semiPrime is in total
 linear, O(n).
space complexity: O(1) since factors is limited to 2 elements
*/


// tests
console.log(semiPrime(94)); // [2, 47]
console.log(semiPrime(6)); // [2, 3]
console.log(semiPrime(9)); // [3, 3]
console.log(semiPrime(899)); // [29, 31]
console.log(semiPrime(20)); // 'Number is not semiprime'
console.log(semiPrime(55)); // [5, 11]