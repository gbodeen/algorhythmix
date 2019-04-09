/*
Given an array of integers nums sorted in ascending order, 
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].
*/

var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1;
  let first, last;

  while (left <= right) {
    first = (left + right) >> 1;
    if (nums[first] === target && nums[first - 1] !== target) {
      break;
    } else if (nums[first] >= target) {
      right = first - 1;
    } else {
      left = first + 1;
    }
  }

  left = first, right = nums.length - 1;
  while (left <= right) {
    last = (left + right) >> 1;
    if (nums[last] === target && nums[last + 1] !== target) {
      return [first, last];
    } else if (nums[last] <= target) {
      left = last + 1;
    } else {
      right = last - 1;
    }
  }

  return [-1, -1];
};


// tests
console.log(searchRange([], 0)); // [-1,-1]
console.log(searchRange([1], 1)); // [0, 0]
console.log(searchRange([1], -4)); // [-1, -1]
console.log(searchRange([2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7], 1)); // [-1,-1]
console.log(searchRange([2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7], 9)); // [-1,-1]
console.log(searchRange([2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7], 2)); // [0,1]
console.log(searchRange([2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7], 7)); // [9,10]
console.log(searchRange([2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7], 5)); // [5,7]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)); // [0, 9]
