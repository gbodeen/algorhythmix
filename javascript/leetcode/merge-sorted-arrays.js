/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into 
nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n 
respectively. You may assume that nums1 has enough space (size that 
is greater or equal to m + n) to hold additional elements from nums2.

Example:
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
Output: 
[1,2,2,3,5,6]
*/

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
  return nums1;
};


// tests
console.log(merge([], 0, [], 0)); // []
console.log(merge([0], 0, [2], 1)); // [2]
console.log(merge([1], 0, [2, 4], 1)); // [2]
console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6, 0], 3)); // [1,2,3,4,5,6]
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)); // [1,2,3,4,5,6]
console.log(merge([2, 5, 6, 8, 0, 0, 0, 0, 0], 4, [1, 3, 4, 7, 9], 5)); // [1,2,3,4,5,6,7,8,9]
// console.log(merge([1,2,0,0,0,0,0],2,[3,4],2)); // [1,2,3,4,0,0,0]??? NOT A CORRECT TEST
