/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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

function sumOfPrimes(ceiling) {
  let sum = 0;
  if (ceiling > 0) sum += 2;
  for (let i = 3; i < ceiling; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}


// tests
console.log(sumOfPrimes(10)); // 17
console.log(sumOfPrimes(2000000)); // 142913828922