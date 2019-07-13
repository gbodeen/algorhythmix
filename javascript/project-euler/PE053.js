/*
There are exactly ten ways of selecting three from five, 12345:

123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

In combinatorics, we use the notation, 5C3=10.

In general, nCr=n!/r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.

It is not until n=23, that a value exceeds one-million: 23C10=1144066.

How many, not necessarily distinct, values of nCr for 1≤n≤100, are 
greater than one-million?
*/

class PE053 {
  isComboOverMillion(n, r) {
    const max = 1000000;

    const N = this.factorial(n);
    if (N < max) return false;

    const R = this.factorial(r);
    if (N / R < max) return false;

    const D = this.factorial(n - r);
    return (N / (R * D)) >= max;
  }

  countBigCombos() {
    let count = 0;
    for (let n = 1; n <= 100; n++) {
      for (let r = 0; r <= n; r++) {
        if (this.isComboOverMillion(n, r)) {
          count++;
        }
      }
    }
    return count;
  }

  factorial(n) {
    let fact = 1
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }

  static main() {
    const test = new PE053();
    console.log(test.factorial(5)); // 120
    console.log(test.isComboOverMillion(23, 9));
    console.log(test.isComboOverMillion(23, 10));
    console.log(test.countBigCombos()); // 4075
  }
}


// test
PE053.main();