/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

// HELPERS 
import arrayEq from './arrayEq.js';

// the challenge
// v1: string conversion method
// Ah, they used an Integer overflow
const plusOne = function (digits) {
  for (let l = digits.length - 1; l >= 0; l--) {
    if (digits[l] < 9) {
      digits[l]++;
      return digits;
    } else {
      digits[l] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};


// tests 
console.log(arrayEq([1, 2, 3], [1, 2, 3], [1, 2, 3]));

console.log(arrayEq(plusOne([1, 2, 3]), [1, 2, 4]));
console.log(arrayEq(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]));
console.log(arrayEq(plusOne([0]), [1]));
console.log(arrayEq(plusOne([9, 9, 9]), [1, 0, 0, 0]));
console.log(arrayEq(plusOne([4, 9]), [5, 0]));
console.log(arrayEq(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]));




