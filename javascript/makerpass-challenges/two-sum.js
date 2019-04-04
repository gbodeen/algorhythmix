/*
You are given an array of numbers and a target value. Return the 
indices of the first two numbers within the array that add up to 
the target value as a tuple, and an empty array if no such numbers 
exist.

"first two" meaining twoSum([1,2,3,4], 5) should return [1,2] 
rather than [0,3].
*/

function twoSum(array, target) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] + array[i] === target) return [j, i];
    }
  }
  return [];
}
// time complexity: quadratic
// space complexity: constant

// alternatively
function twoSum(array, target) {
  let nums = {}, current;
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    if (nums.hasOwnProperty(target - current)) {
      return [nums[target - current], i];
    }
    nums[current] = i;
  }
  return [];
}
// time complexity: linear
// space complexity: linear

// basically you can trade one for the other depending on
//  what your resource constraints are


// tests
console.log(twoSum([-1, -3, 5], 2)); // [1,2]
console.log(twoSum([1, 1, 1, 1], 3)); // []
console.log(twoSum([1, 2, 3, 4], 5)); // [1,2]
console.log(twoSum([5, 4, 3, 2, 11, 2, 3, 4], 16)); // [0,4]
console.log(twoSum([5, 4, 3, 2, 11, 2, 3, 4], 6)); // [1,3]