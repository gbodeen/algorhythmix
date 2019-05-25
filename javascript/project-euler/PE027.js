/*
Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic 
expression that produces the maximum number of primes for 
consecutive values of n, starting with n=0.
*/


class PE027 {
  quadratic(a, b) {
    return n => (n + a) * n + b;
  }

  isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  countQuadraticPrimes(a, b) {
    const maybePrime = this.quadratic(a, b);
    let n = 0;
    while (this.isPrime(maybePrime(n))) n++;
    return n;
  }

  maxQuadratic() {
    let max = 0;
    let current, prod;
    for (let a = -999; a < 1000; a++) {
      for (let b = -1000; b <= 1000; b++) {
        current = this.countQuadraticPrimes(a, b);
        if (current > max) {
          max = current;
          prod = a * b;
        }
      }
    }
    return prod;
  }
}


// tests
const test = new PE027();
console.log(test.countQuadraticPrimes(1, 41)); // 40
console.log(test.countQuadraticPrimes(-79, 1601)); // 80
console.log(test.maxQuadratic()); // -59231