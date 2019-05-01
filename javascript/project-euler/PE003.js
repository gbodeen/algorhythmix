/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
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

function primeFactors(n) {
  if (n < 2) return [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && isPrime(i)) {
      return [i].concat(primeFactors(n / i));
    }
  }
  return [n];
}

function PE003() {
  return primeFactors(600851475143).slice(-1);
};

console.log(PE003());

// tests
// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(9));
// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(12));
// console.log(isPrime(13));
// console.log(isPrime(14));
// console.log(isPrime(15));
// console.log(isPrime(16));
// console.log(isPrime(17));
// console.log(isPrime(18));
// console.log(isPrime(19));
// console.log(isPrime(27));
// console.log(isPrime(29));

// console.log(primeFactors(0));
// console.log(primeFactors(1));
// console.log(primeFactors(2));
// console.log(primeFactors(3));
// console.log(primeFactors(4));
// console.log(primeFactors(5));
// console.log(primeFactors(6));
// console.log(primeFactors(7));
// console.log(primeFactors(8));
// console.log(primeFactors(9));
// console.log(primeFactors(10));
// console.log(primeFactors(11));
// console.log(primeFactors(12));
// console.log(primeFactors(13));
// console.log(primeFactors(14));
// console.log(primeFactors(15));
// console.log(primeFactors(16));
// console.log(primeFactors(17));
// console.log(primeFactors(18));
// console.log(primeFactors(19));
// console.log(primeFactors(20));
