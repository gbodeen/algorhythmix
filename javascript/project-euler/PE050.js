/*
The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13

This is the longest sum of consecutive primes that adds to a prime 
below one-hundred.

The longest sum of consecutive primes below one-thousand that adds 
to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the 
most consecutive primes?
*/


class PE050 {
  isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  *nextPrime() {
    yield 2;
    let i = 3;
    while (true) {
      if (this.isPrime(i)) {
        yield i;
      }
      i += 2;
    }
  }

  primeSumOfConsecPrimes(max = 100) {
    const primeGen = this.nextPrime();
    const primes = [];
    let p = primeGen.next().value;
    let primesum = 0;
    let primeseq = [];
    do {
      primes.push(p);
      let L = 0, R = 1;
      while (R > L && R <= primes.length) {
        let sum = this.arraySum(primes.slice(L, R));
        if (sum === p) {
          if (R - L > primeseq.length) {
            primeseq = primes.slice(L, R);
            primesum = p;
          }
          break;
        } else if (sum < p) {
          R++;
        } else if (sum > p) {
          L++;
        } else {
          throw Error('oops');
        }
      }
      p = primeGen.next().value;
    } while (p < max);
    return { primesum, first: primeseq[0], len: primeseq.length, last: primeseq[primeseq.length - 1] };
  }

  arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }

  static main() {
    const test = new PE050();
    const primes = test.nextPrime();
    for (let i = 0; i < 10; i++) {
      console.log(primes.next().value);
    }
    // console.log(test.primeSumOfConsecPrimes(10)); // 5, 2:3 L2
    // console.log(test.primeSumOfConsecPrimes(100)); // 41, 2:13 L6
    // console.log(test.primeSumOfConsecPrimes(1000)); // 953, 7:89 L21
    // console.log(test.primeSumOfConsecPrimes(10000)); // 9521, 3:317 L65
    // console.log(test.primeSumOfConsecPrimes(100000)); // 92951, 3:1097 L183
    // console.log(test.primeSumOfConsecPrimes(1000000)); // {primesum: 997651, first: 7, len: 543, last: 3931}
  }
}


PE050.main();