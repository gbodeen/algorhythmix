/*
Given an array nums of n integers, are there elements a, b, c in nums 
such that a + b + c = 0? Find all unique triplets in the array which 
gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.
*/

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const lookup = {};
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) lookup[nums[i]] = i;
    if (nums[i] === 0) zeros++;
  }

  const triplets = {};
  if (zeros >= 3) triplets['0,0,0'] = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= 0) break;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] >= 0) break;
      if (lookup[-nums[i] - nums[j]] > j) {
        triplets[`${nums[i]},${nums[j]},${-nums[i] - nums[j]}`] = true;
      }
    }
  }

  return Object.keys(triplets).map(s => s.split(',').map(n => parseInt(n)));
};
// time complexity: quadratic
// space complexity: quadratic also


// tests
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
console.log(threeSum([1, -1])); // []
console.log(threeSum([1, 2, 3])); // []
console.log(threeSum([-1, -2, 0])); // []
console.log(threeSum([1, 1, -2])); // [[1,1,-2]]
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2], [-1,0,1]]
console.log(threeSum([-1, -1, 0, 1, 1])); // [[-1,0,1]]
console.log(threeSum([0, 0, 0, 0, 0, 0])); // [[0,0,0]]
console.log(threeSum([-1, 0, -1, 0, 2, 0])); // [[0,0,0],[-1,-1,2]]
console.log(threeSum([-3, -2, -2, -1, 0, 0, 3, 4, 5, 5, 6]));
  // [[-3,-2,5],[-3,-1,4],[-3,0,3],[-2,-2,4],[-2,-1,3]]
