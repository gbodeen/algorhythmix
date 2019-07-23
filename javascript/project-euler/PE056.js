/*
Considering natural numbers of the form, a ** b, where 
a, b < 100, what is the maximum digital sum?
*/

class PE056 {
  maxDigitSum() {
    let max = 0;
    for (let a = 2; a < 100; a++) {
      for (let b = 2; b < 100; b++) {
        let temp = this.digitSum(this.bigPow(a, b));
        if (temp > max) {
          max = temp;
        }
      }
    }
    return max;
  }

  digitSum(n) {
    return n.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);
  }

  bigPow(b, p) {
    return BigInt(b) ** BigInt(p);
  }

  static main() {
    const test = new PE056();
    console.log(test.digitSum(456));
    console.log(test.digitSum(BigInt(456)));
    console.log(test.bigPow(2, 8));
    console.log(test.maxDigitSum()); // 972
  }
}


// test
PE056.main();