/*
Given an unsorted array of negative/positive integers, return 
true if there exists two numbers whose sum is zero.
*/

function zeroSum(numbers) {
  let vals = {};
  for (let num of numbers) {
    if (vals[-num]) return true;
    vals[num] = true;
  }
  return false;
}
// time complexity: O(n)
// space complexity: O(n) also

// the space complexity can be improved at the cost of time complexity:
// time O(n*log(n)) i.e. "linearithmic" due to the sorting, space O(1)
function zeroSum(numbers) {
  numbers.sort((a, b) => a - b);
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] > 0 || numbers[right] < 0) return false;
    if (numbers[left] === -numbers[right]) return true;
    numbers[left] < -numbers[right] ? left++ : right--;
  }
  return false;
}


// tests
console.log(zeroSum([0])); // false
console.log(zeroSum([])); // false
console.log(zeroSum([23, -7, 345, 123, -5, 534, 28, -1, 90, -4, -6, 34, -1, 567, -8, 21, -2, -3])); // false
console.log(zeroSum([5, 7, 2, 9])); // false
console.log(zeroSum([1, 3, 2, -3])); // true
console.log(zeroSum([1, -1])); // true
console.log(zeroSum([0, 1, 2, 3])); // false
console.log(zeroSum([6, 9, 7, 5, 2, 4, 6, 8, 5, 5, -7, 6, 5, -7, -9, -6, -4, 7, 4, -5, -5, 4, 2, 1])); // true
console.log(zeroSum([1])); // false
console.log(zeroSum([0, 1, 0, 1, 0])); // true
console.log(zeroSum([0, 0])); // true