/*
Given an array of integers, return true if there exist
three numbers whose sum is zero.
*/

function zeroSum3(nums) {
  nums.sort((a, b) => a - b);
  let L, R, sum;
  for (let i = 0; i <= nums.length - 3; i++) {
    L = i + 1, R = nums.length - 1;
    while (L < R) {
      sum = nums[L] + nums[R] + nums[i];
      if (sum === 0) return true;
      sum < 0 ? L++ : R--;
    }
  }
  return false;
}
// time complexity: quadratic
// space complexity: constant


// tests -- should all display 'true'
console.log(!zeroSum3([]));
console.log(!zeroSum3([1]));
console.log(!zeroSum3([0, 0]));
console.log(zeroSum3([0, 0, 0]));
console.log(zeroSum3([0, 2, -2]));
console.log(!zeroSum3([0, 2, 0]));
console.log(zeroSum3([1, 3, 2, -3]));
console.log(!zeroSum3([5, 7, 2, 9]));
console.log(zeroSum3([-5, -4, -3, -2, -1, 0, 0, 3, 4]));
console.log(zeroSum3([-5, -4, -1, 0, 0, 3, 4]));
console.log(zeroSum3([-1, 0, 0, 2, 8, -10]));
console.log(zeroSum3([-7, -5, 3, 4, 6]));
console.log(zeroSum3([-800, -500, -70, -50, 1, 2, 3, 30, 40, 60, 80, 3000, 4000]));
console.log(zeroSum3([-70, -50, 1, 2, 3, 30, 40]));
console.log(zeroSum3([6, 9, 7, 5, 1, 2, 4, 6, 8, 5, 5, 6, -2, 5, 7, 4, 4, 2, 1]));
console.log(!zeroSum3([23, -7, 345, 123, -5, 534, 28, -1, 90, -4, -6, 34, -1, 567, -8, 21, -2, -3]));
console.log(zeroSum3([6, 9, 7, 5, 2, 4, 6, 8, 5, 5, -7, 6, 5, -7, -9, -6, -4, 7, 4, -5, -5, 4, 2, 1]));
console.log(!zeroSum3([6, 9, 7, 5, 2, 4, 6, 8, 5, 5, 6, -2, 5, 7, 4, 4, 2, 1]));
console.log(!zeroSum3([6, 9, 7, 5, 2, 4, 6, 8, 5, 5, 6, 5, 7, 4, 4, 2, 1])); 