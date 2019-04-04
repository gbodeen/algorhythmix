/*
Implement next permutation, which rearranges numbers into the 
lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as 
the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra 
memory.

Here are some examples. Inputs are in the left-hand column 
and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

var nextPermutation = function (nums) {
  let lastLess = 0, nextGreatest;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) lastLess = i;
  }
  if (lastLess) {
    nextGreatest = lastLess;
    for (let i = lastLess + 1; i < nums.length; i++) {
      if (nums[i] < nums[nextGreatest] && nums[i] > nums[lastLess - 1]) nextGreatest = i;
    }
    [nums[lastLess - 1], nums[nextGreatest]] = [nums[nextGreatest], nums[lastLess - 1]];
  }
  nums.push(...nums.splice(lastLess).sort((a, b) => a - b));
  return nums;
};
// time complexity: O(n*log(n)) because of the sort
//  it's possible to do O(n) by pre-reversing, keeping track of values, and inserting the leftover correctly
// space complexity: O(1) and in-place


// tests
console.log(nextPermutation([])); // []
console.log(nextPermutation([0])); // [0]
console.log(nextPermutation([17])); // [17]
console.log(nextPermutation([1, 2, 3])); // [1,3,2]
console.log(nextPermutation([1, 3, 2])); // [2,1,3]
console.log(nextPermutation([1, 2, 5, 4, 3, 1, 0, -1])); // [1,3,-1,0,1,2,4,5]
console.log(nextPermutation([1, 2, 3, 3, 3, 4, 4])); // [1,2,3,3,4,3,4]
console.log(nextPermutation([2, 3, 1, 3, 3, 3])); // [2,3,3,1,3,3]
console.log(nextPermutation([2, 3, 1, 5, 5, 3, 3])); // [2,3,3,1,3,5,5]
console.log(nextPermutation([1, 1, 5])); // [1,5,1]
console.log(nextPermutation([3, 2, 1])); // [1,2,3]
console.log(nextPermutation([1, 2, 2, 2, 3])); // [1,2,2,3,2]
console.log(nextPermutation([1, 1, 1, 1, 1])); // [1,1,1,1,1]
console.log(nextPermutation([-1, 2, -1, 0, 0, 0, 2])); // [-1,2,-1,0,0,2,0]
console.log(nextPermutation([5, 1, 1, 1, 1])); // [1,1,1,1,5]
console.log(nextPermutation([1, 2, 3, 2, 1])); // [1,3,1,2,2]
console.log(nextPermutation([7, 6, 3, 1, 0, 0, -1, -8, -8])); // [-8,-8,-1,0,0,1,3,6,7]
console.log(nextPermutation([1, 2, 3, 2, 1])); // [1,3,1,2,2]