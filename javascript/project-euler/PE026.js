/*
Find the value of d < 1000 for which 1/d contains the 
longest recurring cycle in its decimal fraction part.
*/

class PE026 {
  decCycleLen(n) {
    let remainder = 10; // decimal
    const prevs = {};
    for (let i = 1; i <= n; i++) {
      if (remainder === 0) return 0;
      if (prevs[remainder]) {
        return i - prevs[remainder];
      }
      prevs[remainder] = i;
      remainder = 10 * (remainder % n);
    }
  }

  maxCycleUnderN(n) {
    let max = 0, current, maxIdx;
    for (let i = 2; i < n; i++) {
      current = this.decCycleLen(i);
      if (current > max) {
        max = current;
        maxIdx = i;
      }
    }
    return maxIdx;
  }
}

// tests
const test = new PE026();
console.log(test.decCycleLen(3)); // 1
console.log(test.decCycleLen(7)); // 6
console.log(test.decCycleLen(16)); // 0
console.log(test.decCycleLen(36)); // 1
console.log(test.decCycleLen(38)); // 18
console.log(test.decCycleLen(39)); // 6
console.log(test.decCycleLen(44)); // 2
console.log(test.maxCycleUnderN(1000)); // 983