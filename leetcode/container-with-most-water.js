/*
Given n non-negative integers a1, a2, ..., an , where each represents
 a point at coordinate (i, ai). n vertical lines are drawn such that 
 the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, 
 which together with x-axis forms a container, such that the container
 contains the most water.

Note: You may not slant the container and n is at least 2.
*/

// var maxArea = function(heights) {
//   let max = 0, current;
//   for (let i = 0; i < heights.length - 1; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//       current = (j - i) * Math.min(heights[j], heights[i]);
//       if (current > max) max = current;
//     }
//   }
//   return max;
// };
// time complexity: O(n^2)
// space complexity: O(1)

// now try O(n) sol'n
var maxArea = function (heights) {
  let left = 0, right = heights.length - 1, max = 0, current;
  while (left < right) {
    current = (right - left) * Math.min(heights[right], heights[left]);
    if (current > max) {
      max = current;
    } else if (heights[right] < heights[left]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
// yup, that works

// tests
console.log(maxArea([2, 2])); // 2
console.log(maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20
console.log(maxArea([7, 6, 5, 4, 3, 2, 1])); // 12
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49