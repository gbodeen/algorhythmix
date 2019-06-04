/*
The decimal number, 585 = 1001001001 (binary), 
is palindromic in both bases.

Find the sum of all numbers, less than one million, 
which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either 
base, may not include leading zeros.)
*/

class PE036 {
  isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }

  isDoubleBasePalindrome(n) {
    return this.isPalindrome(n.toString()) && this.isPalindrome(n.toString(2));
  }

  sum2BasePals() {
    let sum = 0;
    for (let i = 1; i < 1000000; i += 2) {
      if (this.isDoubleBasePalindrome(i)) sum += i;
    }
    return sum;
  }

  static main() {
    const test = new PE036();
    console.log(test.isPalindrome('1')); // true
    console.log(test.isPalindrome('22')); // true
    console.log(test.isPalindrome('343')); // true
    console.log(test.isPalindrome('5665')); // true
    console.log(test.isPalindrome('7889887')); // true
    console.log(test.isPalindrome('10')); // false
    console.log(test.isPalindrome('345')); // false
    console.log(test.isDoubleBasePalindrome(585)); // true
    console.log(test.isDoubleBasePalindrome(50)); // false
    console.log(test.sum2BasePals()); // 872187
  }
}


// test
PE036.main();