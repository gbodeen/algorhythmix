/*
The number, 1406357289, is a 0 to 9 pandigital number because 
it is made up of each of the digits 0 to 9 in some order, but 
it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In 
this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
*/

class PE043 {
  nextPermute(s) {
    let i = s.length - 1;
    while (i > 0 && s[i - 1] >= s[i]) i--;
    s = s.slice(0, i) + s.slice(i).split('').sort().join('');
    if (i === 0) return s;
    let j = i;
    while (j < s.length && s[j] <= s[i - 1]) j++;
    s = s.slice(0, i - 1) + s[j] + s.slice(i, j) + s[i - 1] + s.slice(j + 1);
    return s;
  }

  isSpecialDivisible(s) {
    const divisors = [2, 3, 5, 7, 11, 13, 17];
    for (let i = 1; i < 8; i++) {
      if (parseInt(s.slice(i, i + 3)) % divisors[i - 1]) return false;
    }
    return true;
  }

  sumOfSpecials() {
    let sum = 0;
    let num = '1023456789';
    while (num < '9876543210') {
      num = this.nextPermute(num);
      if (this.isSpecialDivisible(num)) {
        sum += parseInt(num);
      }
    }
    return sum;
  }

  static main() {
    const test = new PE043();
    console.log(test.nextPermute('1023456789')); // 1023456798
    console.log(test.nextPermute('1023456798')); // 1203456879
    console.log(test.nextPermute('7630498521')); // 7630512489
    console.log(test.nextPermute('9876543210')); // 9876543210
    console.log(test.nextPermute('8976543210')); // 9012345678
    console.log(test.isSpecialDivisible('1406357289')); // true
    console.log(test.isSpecialDivisible('9876543210')); // false
    console.log(test.isSpecialDivisible('1023456789')); // false
    console.log(test.sumOfSpecials()); // 16695334890
  }
}


// test
PE043.main();