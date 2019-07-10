/*
It can be seen that the number, 125874, and its double, 251748, 
contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, 
and 6x, contain the same digits.
*/

class PE052 {
  smallest6xPermutable() {
    let n = 123456;
    while (!this.is6xPermutable(n)) {
      n++;
    }
    return n;
  }

  isPermutation(a, b) {
    let aa = a.toString().split('').sort().join('');
    let bb = b.toString().split('').sort().join('');
    return aa === bb;
  }

  is6xPermutable(n) {
    return this.isPermutation(n, n * 2) &&
      this.isPermutation(n, n * 3) &&
      this.isPermutation(n, n * 4) &&
      this.isPermutation(n, n * 5) &&
      this.isPermutation(n, n * 6);
  }

  static main() {
    const test = new PE052();
    console.log(test.isPermutation(125874, 125874 * 2));
    console.log(test.smallest6xPermutable()); // 142857
  }
}

// test
PE052.main();