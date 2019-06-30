/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 
1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

class PE048 {
  powmod(b, p, m) {
    let r = 1;
    for (let i = 0; i < p; i++) {
      r = (r * b) % m;
    }
    return r % m;
  }

  selfPowSeries(end, mod) {
    let sum = 0;
    for (let i = 1; i <= end; i++) {
      sum += this.powmod(i, i, mod) % mod;
    }
    return sum % mod;
  }

  static main() {
    const test = new PE048();
    console.log(test.powmod(4, 4, 10 ** 11));
    console.log(test.selfPowSeries(10, 10 ** 11)); // 10405071317
    console.log(test.selfPowSeries(1000, 10 ** 10)); // 9110846700
  }
}

// test
PE048.main();