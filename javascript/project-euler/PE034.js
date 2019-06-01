/*
145 is a curious number, as 
1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to 
the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are 
not included.
*/

class PE034 {
  digitFactSum(n) {
    let rem, sum = 0;
    while (n > 0) {
      rem = n % 10;
      sum += this.factorial(rem);
      n = (n - rem) / 10;
    }
    return sum;
  }

  factorial(n) {
    if (n < 2) return 1;
    let prod = 1;
    for (let i = 2; i <= n; i++) {
      prod *= i;
    }
    return prod;
  }

  findCuriousNums() {
    let sum = 0;
    let nums = [];
    for (let i = 10; i < 100000; i++) {
      if (i === this.digitFactSum(i)) {
        sum += i;
        nums.push(i);
      }
    }
    // return nums;
    return sum;
  }

  static main() {
    const test = new PE034();
    console.log(test.factorial(0)); // 1
    console.log(test.factorial(1)); // 1
    console.log(test.factorial(2)); // 2
    console.log(test.factorial(3)); // 6
    console.log(test.factorial(4)); // 24
    console.log(test.factorial(5)); // 120
    console.log(test.factorial(6)); // 720
    console.log(test.digitFactSum(10)); // 2
    console.log(test.digitFactSum(23)); // 8
    console.log(test.digitFactSum(456)); // 864
    console.log(test.findCuriousNums()); // 40730
  }
}

// test
PE034.main();