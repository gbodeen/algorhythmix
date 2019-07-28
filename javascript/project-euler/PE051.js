/*
By replacing the 1st digit of the 2-digit number *3, it turns 
out that six of the nine possible values: 13, 23, 43, 53, 73, 
and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, 
this 5-digit number is the first example having seven primes among 
the ten generated numbers, yielding the family: 56003, 56113, 
56333, 56443, 56663, 56773, and 56993. Consequently 56003, being 
the first member of this family, is the smallest prime with this 
property.

Find the smallest prime which, by replacing part of the number 
(not necessarily adjacent digits) with the same digit, is part 
of an eight prime value family.
*/

class PE051 {
  isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  nextPrime(n) {
    if (n < 2) return 2;
    if (n === 2) return 3;
    n += (n % 2) ? 2 : 1;
    while (!this.isPrime(n)) {
      n += 2;
    }
    return n;
  }

  makeReplacements(n, mask) {
    const ns = n.toString();
    const replacements = [];
    for (let d = 0; d <= 9; d++) {
      const nsa = ns.split('');
      let bits = mask;
      for (let i = 0; i < ns.length && bits > 0; i++ , bits >>= 1) {
        if (bits & 1) {
          nsa[i] = d.toString();
        }
      }
      if (nsa[0] !== '0') {
        replacements.push(parseInt(nsa.join('')));
      }
    }
    return replacements;
  }

  primeFamilySize(n, mask) {
    const family = this.makeReplacements(n, mask);
    if (!family.includes(n)) return 0;
    let size = 0;
    for (let member of family) {
      if (this.isPrime(member)) {
        size++;
      }
    }
    return size;
  }

  maxMask(n) {
    return (2 ** n.toString().length) - 1;
  }

  findPrimeFamily(size) {
    let n = 2;
    let mask = 1;
    let maxmask = this.maxMask(n);
    while (this.primeFamilySize(n, mask) < size) {
      if (mask < maxmask) {
        mask++;
      } else {
        n = this.nextPrime(n);
        mask = 1;
        maxmask = this.maxMask(n);
      }
    }
    return n;
  }

  static main() {
    const test = new PE051();
    console.log(test.makeReplacements(1, 1));
    console.log(test.makeReplacements(137, 2));
    console.log(test.makeReplacements(137, 5));
    console.log(test.nextPrime(0)); // 2
    console.log(test.nextPrime(2)); // 3
    console.log(test.nextPrime(3)); // 5
    console.log(test.nextPrime(20)); // 23
    console.log(test.nextPrime(31)); // 37
    console.log(test.primeFamilySize(13, 1)); // 6
    console.log(test.primeFamilySize(56003, 12)); // 7
    console.log(test.findPrimeFamily(2)); // 2
    console.log(test.findPrimeFamily(5)); // 11
    console.log(test.findPrimeFamily(6)); // 13
    console.log(test.findPrimeFamily(7)); // 56003
    console.log(test.findPrimeFamily(8)); // 121313
  }
}


// test
PE051.main();