/*
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum 
and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// naive solution first because it's easy
// var maxSubArray = function (nums) {
//   let max = -Infinity, current;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       current = nums.slice(i, j).reduce((sum, x) => sum + x, 0);
//       if (current > max) max = current;
//     }
//   }
//   return max;
// };
// time complexity: O(n^3)
// space complexity: O(1)

// slightly less naive solution next because it's also easy
var maxSubArray = function (nums) {
  let sums = [0];
  for (let i = 0; i < nums.length; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }
  let max = -Infinity, current;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      current = sums[j] - sums[i];
      if (current > max) max = current;
    }
  }
  return max;
};
// time complexity: O(n^2)
// space complexity: O(n)



var maxSubArray = function (nums) {
  let current = 0, max = -Infinity;
  for (let num of nums) {
    current = current < 0 ? num : current + num;
    max = Math.max(max, current);
  }
  return max;
};
// time complexity: O(n)
// space complexity: O(1)



// tests
console.log(maxSubArray([1])); // 0
console.log(maxSubArray([0])); // 0
console.log(maxSubArray([-2])); // -2
console.log(maxSubArray([-8, -4, -3, -5])); // -3
console.log(maxSubArray([4, 4, 4, 4, 4, 4, 4])); // 28
console.log(maxSubArray([2, -1, 3, -3, -1, 2, 1, -5, 3])); // 4
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -3, 4])); // 7
console.log(maxSubArray([1, -2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([0, 2, 0, -4, 0, 3, 0, 2, 0, -1, 0, 3, 0, -5, 0, -1, 0, 6])); // 7


