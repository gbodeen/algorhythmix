/*
Given a positive number, return the sum of all positive primes 
that are less than or equal to that number.
*/

function sumOfPrimes(n) {
  const primes = primeGenerator();
  let val, sum = 0;
  do {
    val = primes.next().value;
    sum += val;
  } while (val <= n);
  return sum - val;
}

function* primeGenerator() {
  yield 2;
  let n = 3;
  while (1) {
    while (!isPrime(n)) {
      n += 2;
    }
    yield n;
    n += 2;
  }
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/* 
time complexity: isPrime is O(sqrt(n)),
 which makes sumOfPrimes O(n * sqrt(n))
space complexity: O(1)

The generator isn't necessary. I just wanted to use one since
 they don't come up very often.
*/


// tests
console.log(sumOfPrimes(1) === 0)
console.log(sumOfPrimes(4) === 5)
console.log(sumOfPrimes(31345) === 49789124)
console.log(sumOfPrimes(4423) === 1231939)
console.log(sumOfPrimes(-10) === 0)
console.log(sumOfPrimes(13) === 41)
console.log(sumOfPrimes(1253) === 116533)
console.log(sumOfPrimes(9) === 17)
console.log(sumOfPrimes(14) === 41)
console.log(sumOfPrimes(3) === 5)
console.log(sumOfPrimes(11) === 28)
console.log(sumOfPrimes(17) === 58)
console.log(sumOfPrimes(52385) === 132277586)
console.log(sumOfPrimes(5) === 10)
console.log(sumOfPrimes(12523) === 8733930)
console.log(sumOfPrimes(15) === 41)
console.log(sumOfPrimes(-1) === 0)
console.log(sumOfPrimes(1758) === 220512)
console.log(sumOfPrimes(6) === 10)
console.log(sumOfPrimes(2) === 2)