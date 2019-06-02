/*
The number, 197, is called a circular prime because 
all rotations of the digits: 197, 971, and 719, are 
themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 
11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

class PE035 {
  isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  allRotations(s) {
    const rots = [s];
    for (let i = 1; i < s.length; i++) {
      rots.push(s.slice(i) + s.slice(0, i));
    }
    return rots;
  }

  isCircularPrime(n) {
    const nums = this.allRotations(n.toString())
      .map(num => parseInt(num));
    for (let num of nums) {
      if (!this.isPrime(num)) return false;
    }
    return true;
  }

  countCircularPrimes(limit) {
    let count = 0;
    if (this.isCircularPrime(2)) count++;
    for (let i = 3; i < limit; i += 2) {
      if (this.isCircularPrime(i)) count++;
    }
    return count;
  }

  static main() {
    const test = new PE035();
    console.log(test.allRotations('1'));
    console.log(test.allRotations('12'));
    console.log(test.allRotations('123'));
    console.log(test.allRotations('1234'));
    console.log(test.allRotations('12345'));
    console.log(test.allRotations('123456'));
    console.log(test.isCircularPrime(2)); // true
    console.log(test.isCircularPrime(9)); // false
    console.log(test.isCircularPrime(13)); // true
    console.log(test.isCircularPrime(17)); // true
    console.log(test.isCircularPrime(23)); // false
    console.log(test.isCircularPrime(73)); // true
    console.log(test.countCircularPrimes(100)); // 13
    console.log(test.countCircularPrimes(1000000)); // 55
  }
}


// test
PE035.main();