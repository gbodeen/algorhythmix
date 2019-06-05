/*
The number 3797 has an interesting property. Being prime 
itself, it is possible to continuously remove digits from 
left to right, and remain prime at each stage: 3797, 797, 
97, and 7. Similarly we can work from right to left: 3797, 
379, 37, and 3.

Find the sum of the only eleven primes that are both 
truncatable from left to right and right to left. NOTE: 2, 
3, 5, and 7 are not considered to be truncatable primes.
*/

class PE037 {
  isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  allTruncations(s) {
    const truncs = [s];
    for (let i = 1; i < s.length; i++) {
      truncs.push(s.slice(i));
      truncs.push(s.slice(0, s.length - i));
    }
    return truncs.reverse();
  }

  isTruncatablePrime(n) {
    if (n < 8) return false;
    const truncs = this.allTruncations(n.toString());
    for (let numStr of truncs) {
      if (!this.isPrime(parseInt(numStr))) return false;
    }
    return true;
  }

  truncatablePrimes() {
    const tps = [];
    for (let i = 11; i < 1000000; i += 2) {
      if (this.isTruncatablePrime(i)) tps.push(i);
    }
    return tps;
  }

  sum(R) {
    return R.reduce((s, x) => s + x, 0);
  }

  static main() {
    const test = new PE037();
    console.log(test.allTruncations('3797'));
    console.log(test.isTruncatablePrime(3797)); // true
    console.log(test.isTruncatablePrime(7)); // false
    console.log(test.isTruncatablePrime(23)); // true
    console.log(test.isTruncatablePrime(41)); // false
    console.log(test.truncatablePrimes()); // 
    console.log(test.sum(test.truncatablePrimes())); // 748317
  }
}


// test
PE037.main();