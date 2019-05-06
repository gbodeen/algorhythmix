/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function nthPrime(n) {
  let count = 1, prime = 2;
  for (let i = 3; count < n; i += 2) {
    if (isPrime(i)) {
      count++;
      prime = i;
    }
  }
  return prime;
}

// tests
console.log(nthPrime(1));
console.log(nthPrime(2));
console.log(nthPrime(3));
console.log(nthPrime(4));
console.log(nthPrime(5));
console.log(nthPrime(6));
console.log(nthPrime(10001)); // 104743