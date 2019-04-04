/*
Given two integers dividend and divisor, divide two integers without 
using multiplication, division and mod operator.
Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero.

Note:
Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers
within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose 
of this problem, assume that your function returns 2^31 − 1 when the 
division result overflows.
*/

// var divide = function (dividend, divisor) {

//   function innerdivide(dividend, divisor) {
//   let quotient = 0;
//   if (dividend >= 0 && divisor > 0) {
//     while (dividend >= divisor) {
//       dividend -= divisor;
//       quotient++;
//     }
//     return quotient;
//   }
//   if (dividend <= 0 && divisor < 0) {
//     while (dividend <= divisor) {
//       dividend -= divisor;
//       quotient++;
//     }
//     return quotient;
//   }
//   if (dividend >= 0 && divisor < 0) {
//     while (-dividend <= divisor) {
//       dividend += divisor;
//       quotient++;
//     }
//     return quotient;
//   }
//   if (dividend <= 0 && divisor > 0) {
//     while (-dividend >= divisor) {
//       dividend += divisor;
//       quotient++;
//     }
//     return quotient;
//   }
//   return quotient;
// }
//   let result = innerdivide(dividend, divisor);
//   return Math.min(Math.max(result, (-2) ** 31), 2 ** 31 - 1);
// };
// naive version: linear time, constant space


// next try: using log & exp, but it ran into inconsistent precision issues.
var divide = function (dividend, divisor) {
  function divtrunc(a, b) {
    return Math.trunc(Math.exp(Math.log(a) - Math.log(b)) + 0.0000000001);
  }

  function saturate32(n) {
    return Math.max(Math.min(n, Math.pow(2, 31) - 1), -Math.pow(2, 31));
  }

  if ((dividend >= 0 && divisor > 0) || (dividend <= 0 && divisor < 0)) {
    return saturate32(divtrunc(Math.abs(dividend), Math.abs(divisor)));
  }
  return saturate32(-divtrunc(Math.abs(dividend), Math.abs(divisor)));
};



// tests
console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(1, 5)); // 0
console.log(divide(0, 40)); // 0
console.log(divide(0, -40)); // 0
console.log(divide(100000, 1)); // 100000
console.log(divide(-19, -7)); // 2
console.log(divide(-7777, 7)); // -1111
console.log(divide(-7777, -7)); // 1111
console.log(divide(7777, -7)); // -1111
console.log(divide(7777, 7)); // 1111
console.log(divide(-2147483648, -1)); // 2147483647
console.log(divide(2147483647, -2147483648)); // 0


