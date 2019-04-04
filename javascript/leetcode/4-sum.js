/*
Given an array nums of n integers and an integer target, are there 
elements a, b, c, and d in nums such that a + b + c + d = target? 
Find all unique quadruplets in the array which gives the sum of target.

Note:
The solution set must not contain duplicate quadruplets.
*/

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const lookup = {};
  for (let i = 0; i < nums.length; i++) {
    lookup[-nums[i]] = i;
  }
  const quadruplets = {};
  let n1, n2, n3, l;
  for (let i = 0; i < nums.length - 2; i++) {
    n1 = nums[i];
    if (n1 >= 0 && n1 > target) break;
    for (let j = i + 1; j < nums.length - 1; j++) {
      n2 = n1 + nums[j];
      if (nums[j] >= 0 && n2 > target) break;
      for (let k = j + 1; k < nums.length; k++) {
        n3 = n2 + nums[k];
        if (nums[k] >= 0 && n3 > target) break;
        if (lookup[n3 - target] > k) {
          l = lookup[n3 - target];
          quadruplets[`${nums[i]},${nums[j]},${nums[k]},${nums[l]}`] = true;
        }
      }
    }
  }

  return Object.keys(quadruplets).map(s => s.split(',').map(x => parseInt(x)));
};
// time complexity: cubic
// space complexity: complicated but worse than O(n)

// tests
console.log(fourSum([], 0)); // []
console.log(fourSum([1], 1)); // []
console.log(fourSum([1, 2], 3)); // []
console.log(fourSum([1, 2, 3], 6)); // []
console.log(fourSum([1, 2, 3, 4], 9)); // []
console.log(fourSum([1, 2, 3, 4], 10)); // [[1,2,3,4]]
console.log(fourSum([0, 0, 0, 0], 0)); // [[0,0,0,0]]
console.log(fourSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0)); // [[0,0,0,0]]
console.log(fourSum([-8, -1, -2, 1, 2, 2, 3], 0)); // [[-2,-1,1,2]]
console.log(fourSum([-8, -3, -2, 1, 2, 2, 2, 3], -1)); // [[-8,2,2,3],[-3,2,1,3],[-3,-2,2,2]]
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([-4, -3, -2, -1, 0, 0, 0, 0, 1, 1], -2)); // [[-4,0,1,1],[-3,-1,1,1],[-3,0,0,1],[-2,-1,0,1],[-2,0,0,0]]
console.log(fourSum([4, 3, 2, 1, 0, 0, 0, 0, -1, -1], 2)); // [[-1,-1,0,4],[-1,-1,1,3],[-1,0,0,3],[-1,0,1,2],[0,0,0,2]]