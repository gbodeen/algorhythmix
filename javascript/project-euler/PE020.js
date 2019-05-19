/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

class PE020 {
  factorial(n) {
    let prod = BigInt(1);
    for (let i = 2; i <= n; i++) {
      prod *= BigInt(i);
    }
    return prod;
  }

  digitSum(n) {
    return n.toString().split('').reduce((sum, s) => sum + parseInt(s), 0);
  }
}


// tests
const test = new PE020();
console.log(test.digitSum(test.factorial(10))); // 27
console.log(test.digitSum(test.factorial(100))); // 648