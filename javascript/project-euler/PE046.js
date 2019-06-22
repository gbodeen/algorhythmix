/*
It was proposed by Christian Goldbach that every odd composite 
number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as 
the sum of a prime and twice a square?
*/

class PE046 {
  goldbach(n) { // let's say it's true for primes
    let s = 0, ss = 2 * s * s;
    while (ss < n) {
      if (this.isPrime(n - ss)) return true;
      s++;
      ss = 2 * s * s;
    }
    return false;
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

  minNonGoldbach(limit = 1000) {
    let i = 33;
    while (i < limit && this.goldbach(i)) {
      i += 2;
    }
    return !this.goldbach(i) && i;
  }

  static main() {
    const test = new PE046();
    console.log(test.goldbach(9)); // true
    console.log(test.goldbach(15)); // true
    console.log(test.goldbach(21)); // true
    console.log(test.goldbach(25)); // true
    console.log(test.goldbach(27)); // true
    console.log(test.goldbach(33)); // true
    console.log(test.goldbach(23)); // true
    console.log(test.minNonGoldbach(1000)); // false
    console.log(test.minNonGoldbach(10000)); // 5777
  }
}


// test
PE046.main();