/*
Given an array nums of n integers and an integer target, find 
three integers in nums such that the sum is closest to target. 
Return the sum of the three integers. You may assume that each 
input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity, distance, sum, current;
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      current = nums[i] + nums[j] + nums[k];
      distance = Math.abs(current - target);
      if (distance < closest) {
        closest = distance;
        sum = current;
      }
      if (distance === 0) return sum;
      if (current - target < 0) {
        j++;
        continue;
      } else {
        k--;
        continue;
      }
    }
  }
  return sum;
};
// time complexity: quadratic
// space complexity: constant


// tests
console.log(threeSumClosest([0, 0, 0, 0], 0)); // 0
console.log(threeSumClosest([-1, 0, 0, 1, 2], 0)); // 0
console.log(threeSumClosest([-3, -2, 2, 4], 0)); // -1
console.log(threeSumClosest([5, 4, 3, 2, 1, 0, 6, 7], 20)); // 18
console.log(threeSumClosest([10, 6, 4, 14, 20, -1], 23)); // 23
console.log(threeSumClosest([10, 14, 6, 4, 20, -1], 21)); // 20
console.log(threeSumClosest([2, 2, 7, 7, 19, -1, 0], 20)); // 20
console.log(threeSumClosest([7, 7, 7, 19, 0], 18)); // 21