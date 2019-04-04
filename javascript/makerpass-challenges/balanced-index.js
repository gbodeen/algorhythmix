/*
Given an array of numbers, return the index in the array such that the
sum of all values to the left is equal to the sum of all values to the right.

Challenge: Do this in O(n) time and only 1 pass through the array.
*/

// first try, over the recommended complexity, but easy to read:
/*
function balancedIndex (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (arraySum(nums.slice(0,i)) === arraySum(nums.slice(i+1))) {
      return i;
    }
  }
  return -1;
}

function arraySum(array) {
  return array.reduce((sum, x) => sum + x, 0);
}
*/

// time complexity: O(n^2)
// space complexity: O(n)

// second try:
function balancedIndex(nums) {
  let leftSum = 0, rightSum = 0,
    leftIdx = 0, rightIdx = nums.length - 1;
  while (leftIdx < rightIdx) {
    if (leftSum < rightSum) {
      leftSum += nums[leftIdx];
      leftIdx++;
    } else {
      rightSum += nums[rightIdx];
      rightIdx--;
    }
  }
  return leftSum === rightSum ? rightIdx : -1;
}
// time complexity: O(n)
// space complexity: O(1)

console.log(balancedIndex([1, 2, 3, 4, 3, 2, 1])); // 3: exclude middle index
console.log(balancedIndex([11, 1, 5, 5, 1])); // 1: weighted to one side
console.log(balancedIndex([-10, 15, 3, 0, 8])); // 3: negative numbers
console.log(balancedIndex([5, 7, 2, 4, 6, 2, 12, 5, 4, 3])); // 5: more numbers
console.log(balancedIndex([])); // -1: empty array
console.log(balancedIndex([1, 1, 0, 0, 2])); // 2: multiple correct answers, choose the first