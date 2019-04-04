/*
Roman numerals are represented by seven different symbols: 
I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two 
one's added together. Twelve is written as, XII, which is 
simply X + II. The number twenty seven is written as XXVII, 
which is XX + V + II.

Roman numerals are usually written largest to smallest from 
left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one 
is before the five we subtract it making four. The same 
principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is 
guaranteed to be within the range from 1 to 3999.
*/

var romanToInt = function (str) {
  const converter = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const nums = str.split('').map(c => converter[c]);
  return nums.reduce((sum, _, i) => {
    if (i < nums.length - 1) {
      if (nums[i] >= nums[i + 1]) {
        return sum + nums[i];
      } else {
        return sum - nums[i];
      }
    } else {
      return sum + nums[i];
    }
  }, 0);
};


// tests
console.log(romanToInt('I') === 1);
console.log(romanToInt('V') === 5);
console.log(romanToInt('X') === 10);
console.log(romanToInt('L') === 50);
console.log(romanToInt('C') === 100);
console.log(romanToInt('D') === 500);
console.log(romanToInt('M') === 1000);
console.log(romanToInt('III') === 3);
console.log(romanToInt('IV') === 4);
console.log(romanToInt('VII') === 7);
console.log(romanToInt('IX') === 9);
console.log(romanToInt('XIV') === 14);
console.log(romanToInt('XV') === 15);
console.log(romanToInt('XVI') === 16);
console.log(romanToInt('XXX') === 30);
console.log(romanToInt('XIX') === 19);
console.log(romanToInt('XL') === 40);
console.log(romanToInt('XC') === 90);
console.log(romanToInt('CD') === 400);
console.log(romanToInt('CM') === 900);
console.log(romanToInt('XLIII') === 43);
console.log(romanToInt('LXIII') === 63);
console.log(romanToInt('CI') === 101);
console.log(romanToInt('DI') === 501);
console.log(romanToInt('MII') === 1002);
console.log(romanToInt('MMMCMXXXIX') === 3939);
console.log(romanToInt('MDCLXVI') === 1666);
console.log(romanToInt('MMCDXLIV') === 2444);