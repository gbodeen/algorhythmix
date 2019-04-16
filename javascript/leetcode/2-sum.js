/*
Given an array of integers, return indices of the two numbers such 
that they add up to a specific target. You may assume that each input 
would have exactly one solution, and you may not use the same element 
twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function (nums, target) {
  const diffs = {};
  let num;
  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    if (diffs[num]) return [diffs[num] - 1, i];
    diffs[target - num] = i + 1;
  }
}
// time complexity: O(n), at most a single pass too
// space complexity: O(n) also due to the hashtable

// tests
console.log(twoSum([0, 0], 0)); // [0,1]
console.log(twoSum([0, 0, 0, 1, 1, 2, 4], 6)); // [5,6]
console.log(twoSum([9, 7, 4, 1, -1, 3, 2, 10, 20], 19)); // [0,7]
console.log(twoSum([99, -99, 4, -8, 2, -6, -3, 3], 1)); // [2,6]

