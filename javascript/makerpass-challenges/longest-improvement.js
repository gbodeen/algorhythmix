/*
Given an array of integers, find the length of the longest increasing sequence.
*/

function longestImprovement(numbers) {
  let max, current;
  for (let i in numbers) {
    current = numbers[i] > numbers[i - 1] ? current + 1 : 1;
    max = current < max ? max : current;
  }
  return max;
}
// time complexity: O(N)
// space complexity: O(1)


// tests
console.log(longestImprovement([10]) === 1);
console.log(longestImprovement([10, 5, 1]) === 1);
console.log(longestImprovement([10, 20, 30, 10, 20]) === 3);
console.log(longestImprovement([1, 2, 3, 1, 4, 5, 6, 7, 0]) === 5);
console.log(longestImprovement([1, 2, 3, 4, 5, 6, 7, 0]) === 7); 