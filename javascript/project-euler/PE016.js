/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?
*/

class PE016 {
  bigPow2(n) {
    return BigInt(2) ** BigInt(n);
  }

  digitSum(s) {
    s = s.toString();
    let sum = 0;
    for (let c of s) {
      sum += parseInt(c);
    }
    return sum;
  }
}


// tests
const test = new PE016();
console.log(test.digitSum(test.bigPow2(15))); // 26
console.log(test.digitSum(test.bigPow2(1000))); // 1366