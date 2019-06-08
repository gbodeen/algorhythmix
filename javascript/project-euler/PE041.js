/*
We shall say that an n-digit number is pandigital if it makes 
use of all the digits 1 to n exactly once. For example, 2143 
is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
*/

class PE041 {
  isPandigital(n) {
    if (n > 987654321) return false;
    const s = n.toString();
    for (let i = 1; i <= s.length; i++) {
      if (!s.includes(i)) return false;
    }
    return true;
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

  maxPandigitalPrime(max = 987654321) {
    for (let i = max; i > 0; i--) {
      if (this.isPandigital(i) && this.isPrime(i)) {
        return i;
      }
    }
    throw Error('should have found 1 at least');
  }

  static main() {
    const test = new PE041();
    console.log(test.isPandigital(2143)); // true
    console.log(test.isPandigital(987654321)); // true
    console.log(test.isPandigital(98654321)); // false
    console.log(test.isPandigital(1023)); // false
    console.log(test.maxPandigitalPrime(10000000)); // 7652413
  }
}


// test
PE041.main();