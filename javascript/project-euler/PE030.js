/*
Surprisingly there are only three numbers that can be 
written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as 
the sum of fifth powers of their digits.
*/

class PE030 {
  digitPowSum(n, p) {
    let sum = 0, rem;
    while (n > 0) {
      rem = n % 10;
      sum += rem ** p;
      n = (n - rem) / 10;
    }
    return sum;
  }

  digitPowSumEqSelf(n, p) {
    return n === this.digitPowSum(n, p);
  }

  searchNums(p) {
    const eqs = [];
    for (let i = 2; i < 10 ** (p + 1); i++) {
      if (this.digitPowSumEqSelf(i, p)) {
        eqs.push(i);
      }
    }
    return eqs;
  }

  sumArray(R) {
    return R.reduce((sum, num) => sum + num, 0);
  }

  static main() {
    const test = new PE030();
    console.log(test.digitPowSum(777, 1)); // 21
    console.log(test.digitPowSum(777, 2)); // 147
    console.log(test.digitPowSumEqSelf(1634, 4)); // true
    console.log(test.searchNums(1));
    console.log(test.searchNums(2));
    console.log(test.searchNums(3));
    console.log(test.searchNums(4));
    console.log(test.searchNums(5));
    console.log(test.sumArray(test.searchNums(4))); // 19316
    console.log(test.sumArray(test.searchNums(5))); // 443839
  }
}


// tests
PE030.main();
