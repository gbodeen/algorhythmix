/*
Given two arrays of negative/positive integers, return a new array such that each 
element at index n is the sum of the two elements from the other arrays at their 
index n’s.
*/

function zipSum(xs, ys) {
  const zs = [];
  for (let i = 0; i < xs.length && i < ys.length; i++) {
    zs.push(xs[i] + ys[i]);
  }
  return zs;
}
// time complexity: O(n) for arrays of length n
// space complexity: O(n) also

// We can reduce the space complexity by mutating one of the original arrays
function zipSum2(xs, ys) {
  let i = 0;
  while (i < xs.length && i < ys.length) {
    xs[i] += ys[i];
    i++;
  }
  xs.splice(i);
  return xs;
}
// space complexity: O(1)

// tests
// simple cases:
console.log(zipSum([100, 1], [50, 5])); // [150, 6]
console.log(zipSum([10, 20, 30], [1, 2, 3])); // [11, 22, 33]
console.log(zipSum([2, 3, 2, 3, 2], [20, 30, 20, 30, 20])); // [22, 33, 22, 33, 22]
// unequal lengths:
console.log(zipSum([10, 20], [1, 2, 3])); // [11, 22]
console.log(zipSum([10, 20, 30], [1, 2])); // [11, 22]
console.log(zipSum([0, 7, 5, 3, 5, 7, 8, 9, 9, 6, 5, 6, 8, 8], [1])); // [1]
