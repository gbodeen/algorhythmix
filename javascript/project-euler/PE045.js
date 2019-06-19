/*
Triangle, pentagonal, and hexagonal numbers are generated 
by the following formulae:

Triangle	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
Pentagonal	 	Pn=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
Hexagonal	 	Hn=n(2n−1)	 	1, 6, 15, 28, 45, ...
It can be verified that T285 = P165 = H143 = 40755.

Find the next triangle number that is also pentagonal and 
hexagonal.
*/

class PE045 {
  triangular(n) {
    return n * (n + 1) / 2;
  }

  isPentagonal(n) {
    return (1 + Math.sqrt(1 + 24 * n)) % 6 === 0;
  }

  isHexagonal(n) {
    return (1 + Math.sqrt(1 + 8 * n)) % 4 === 0;
  }

  next356(n = 285) {
    let tri;
    do {
      tri = this.triangular(++n);
    } while (!this.isPentagonal(tri) || !this.isHexagonal(tri));
    return tri;
  }

  static main() {
    const test = new PE045();
    console.log(test.isHexagonal(1)); // true
    console.log(test.isHexagonal(2)); // false
    console.log(test.isHexagonal(6)); // true
    console.log(test.isHexagonal(14)); // false
    console.log(test.isHexagonal(15)); // true
    console.log(test.isHexagonal(45)); // true
    console.log(test.isHexagonal(46)); // false
    console.log(test.triangular(285)); // 40755
    console.log(test.isPentagonal(40755)); // true
    console.log(test.isHexagonal(40755)); // true
    console.log(test.next356(1)); // 40755
    console.log(test.next356()); // 1533776805
  }
}

// test
PE045.main();