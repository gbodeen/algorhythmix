/*
The first two consecutive numbers to have two distinct 
prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three 
distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four 
distinct prime factors each. What is the first of 
these numbers?
*/

class PE047 {
  isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  primeFactors(n) {
    if (n < 2) return [];
    if (n === 2) return [2];
    if (n % 2 === 0) return [2].concat(this.primeFactors(n / 2));
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0 && this.isPrime(i)) {
        return [i].concat(this.primeFactors(n / i));
      }
    }
    return [n];
  }

  countDistinctPrimeFactors(n) {
    return (new Set(this.primeFactors(n))).size;
  }

  specialConsecutives(n) {
    let i = 0;
    whileloop:
    while (true) {
      i++;
      for (let j = i; j < i + n; j++) {
        if (this.countDistinctPrimeFactors(j) !== n) {
          continue whileloop;
        }
      }
      return i;
    }
  }

  static main() {
    const test = new PE047();
    console.log(test.primeFactors(644)); // 2, 2, 7, 23
    console.log(test.primeFactors(645)); // 3, 5, 43
    console.log(test.primeFactors(646)); // 2, 17, 19
    console.log(test.countDistinctPrimeFactors(644)); // 3
    console.log(test.specialConsecutives(1)); // 2
    console.log(test.specialConsecutives(2)); // 14
    console.log(test.specialConsecutives(3)); // 644
    console.log(test.specialConsecutives(4)); // 134043
  }
}

// test
PE047.main();