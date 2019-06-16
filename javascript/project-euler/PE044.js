/*
Pentagonal numbers are generated by the formula, 
Pn=n(3n−1)/2. The first ten pentagonal numbers are:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

It can be seen that P4 + P7 = 22 + 70 = 92 = P8. 
However, their difference, 70 − 22 = 48, is not pentagonal.

Find the pair of pentagonal numbers, Pj and Pk, for which 
their sum and difference are pentagonal and D = |Pk − Pj| 
is minimised; what is the value of D?
*/

class PE044 {
  pentagonal(n) {
    return n * (3 * n - 1) / 2;
  }

  isPentagonal(n) {
    return (1 + Math.sqrt(1 + 24 * n)) % 6 === 0;
  }

  findPair(maxn = 100) {
    let minDiff = Infinity;
    for (let i = 1; i < maxn; i++) {
      let a = this.pentagonal(i);
      for (let j = i + 1; j <= maxn; j++) {
        let b = this.pentagonal(j);
        if (this.isPentagonal(a + b) && this.isPentagonal(b - a)) {
          if (b - a < minDiff) {
            minDiff = b - a;
          }
        }
      }
    }
    return minDiff;
  }

  static main() {
    const test = new PE044();
    console.log(test.pentagonal(1)); // 1
    console.log(test.pentagonal(2)); // 5
    console.log(test.pentagonal(3)); // 12
    console.log(test.pentagonal(4)); // 22
    console.log(test.pentagonal(5)); // 35
    console.log(test.isPentagonal(1)); // true
    console.log(test.isPentagonal(4)); // false
    console.log(test.isPentagonal(5)); // true
    console.log(test.isPentagonal(12)); // true
    console.log(test.isPentagonal(13)); // false
    console.log(test.isPentagonal(144)); // false
    console.log(test.isPentagonal(145)); // true
    console.log(test.isPentagonal(146)); // false
    console.log(test.findPair(10000)); // 5482660
  }
}


// test
PE044.main();