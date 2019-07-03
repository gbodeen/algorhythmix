/*
The arithmetic sequence, 1487, 4817, 8147, in which each 
of the terms increases by 3330, is unusual in two ways: 
(i) each of the three terms are prime, and, (ii) each of 
the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, 
or 3-digit primes, exhibiting this property, but there is 
one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the 
three terms in this sequence?
*/

class PE049 {
  isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  allPermutes(n) {
    function permute(s) {
      if (s.length <= 1) return [s];
      const permutations = []; //new Set();
      for (let i = 0; i < s.length; i++) {
        let substring = s.slice(0, i) + s.slice(i + 1);
        let subpermutes = permute(substring).map(el => s[i] + el);
        permutations.push(...subpermutes);
      }
      return [...new Set(permutations)];
    }

    return permute(n.toString().split('').sort().join(''))
      .map(s => parseInt(s));
  }

  arithSeq3s(arr) {
    const seqs = [];
    if (arr.length < 3) return seqs;
    for (let i = 0; i < arr.length - 2; i++) {
      let a = arr[i];
      for (let j = i + 1; j < arr.length - 1; j++) {
        let b = arr[j];
        for (let k = j + 1; k < arr.length; k++) {
          let c = arr[k];
          if (b - a === c - b) {
            seqs.push([a, b, c]);
          }
        }
      }
    }
    return seqs;
  }

  specialSeq() {
    const seqs = [];
    for (let i = 1111; i <= 3799; i += 2) {
      if (!i.toString().includes('0') && this.isPrime(i)) {
        let primes = this.allPermutes(i).filter(x => this.isPrime(x));
        let primeSeqs = this.arithSeq3s(primes);
        if (primeSeqs.length) {
          seqs.push(...primeSeqs);
        }
      }
    }
    return seqs;
  }

  static main() {
    const test = new PE049();
    console.log(test.allPermutes(0)); // 
    console.log(test.allPermutes(1)); // 
    console.log(test.allPermutes(23)); // 
    console.log(test.allPermutes(44)); // 
    console.log(test.allPermutes(567)); // 
    console.log(test.allPermutes(888)); // 
    console.log(test.allPermutes(9012)); // 
    console.log(test.allPermutes(3456)); // 
    console.log(test.allPermutes(7778)); //
    console.log(test.allPermutes(9900)); // 
    console.log(test.allPermutes(1487)); //
    console.log(test.arithSeq3s(test.allPermutes(1487))); //
    console.log(test.specialSeq()); // 296962999629
    console.log(test.isPrime(2969))
    console.log(test.isPrime(6299))
    console.log(test.isPrime(9629))
    console.log([9629 - 6299, 6299 - 2969]);
  }
}

// test
PE049.main();