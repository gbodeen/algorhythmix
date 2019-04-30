/*
Given a non-empty array of integers, every element appears 
twice except for one. Find that single one.
Note: Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?
*/

// Here's with using more memory:
// var singleNumber = function(nums) {
//   const dict = {};
//   for (let num of nums) {
//     if (dict.hasOwnProperty(num)) {
//       delete dict[num];
//     } else {
//       dict[num] = num;
//     }
//   }
//   return Object.values(dict)[0];
// };

// I didn't think of it, but the no-more-memory approach is
// a bitwise XOR, which cancels every pair of numbers, and 
// leaves the unique number untouched
var singleNumber = function (nums) {
  return nums.reduce((xor, num) => xor ^ num);
};


// tests
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([2])); // 2
console.log(singleNumber([0])); // 0
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1, 2, 3, 4, 5, 6, 7, 8, 3, 5, 1, 6, 2, 7, 8])); // 4
console.log(singleNumber([2, 2, -1, -1, 0, 0, 1])); // 1