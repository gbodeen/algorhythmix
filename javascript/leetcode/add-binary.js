/*
Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.
*/

// var addBinary = function(a, b) {
//   return (parseInt(a,2) + parseInt(b,2)).toString(2);
// };
// The above failed because of integer overflows in the tests.

var addBinary = function (a, b) {
  const aLen = a.length, bLen = b.length, len = Math.max(aLen, bLen);
  let aNum, bNum, nextNum, carry = 0, result = '';
  for (let i = 0; i < len; i++) {
    aNum = parseInt(a[aLen - 1 - i] || 0);
    bNum = parseInt(b[bLen - 1 - i] || 0);
    nextNum = aNum + bNum + carry;
    result = (nextNum & 1) + result;
    carry = nextNum >> 1;
  }
  if (carry) result = '1' + result;
  while (result[0] === '0') {
    result = result.slice(1);
  }
  return result || '0';
};
// time complexity: O(n) for n digits in the longer string
// space complexity: O(n) also


// tests
console.log(addBinary('000', '100100'));
console.log(addBinary('000', '00100'));
console.log(addBinary('1111111111111111111', '1001'));