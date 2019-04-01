/*
Suppose an array sorted in ascending order is rotated at some 
pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array 
return its index, otherwise return -1.
You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).
*/

var search = function (nums, target) {
  // strategy: find pivot, then search both sides
  const pivot = findPivot(nums);
  const left = binarySearch(nums, target, 0, pivot - 1);
  return left >= 0 ? left : binarySearch(nums, target, pivot, nums.length - 1);
};

function findPivot(nums) {
  let left = 0, right = nums.length - 1, mid;
  while (left <= right) {
    mid = (left + right) >> 1;
    if (nums[mid - 1] > nums[mid]) return mid;
    if (nums[right] > nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return 0;
}

function binarySearch(nums, target, left, right, mid) {
  while (left <= right) {
    mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
// time complexity: O(log(n))
// space complexity: O(1)


// tests
console.log(search([], 0)); // -1
console.log(search([1], 1)); // 0
console.log(search([1, 2], 1)); // 0
console.log(search([1, 2], 3)); // -1
console.log(search([2, 1], 1)); // 1
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 1)); // 5
console.log(search([4, 5, 6, 7, 0, 1, 2], 2)); // 6
console.log(search([4, 5, 6, 7, 0, 1, 2], 5)); // 1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], -4)); // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 9)); // -1
console.log(search([0, 1, 2, 4, 5, 6, 7], 7)); // 6
console.log(search([0, 1, 2, 4, 5, 6, 7], 0)); // 0
console.log(search([1, 2, 4, 5, 6, 7, 0], 0)); // 6