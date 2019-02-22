/*
Given an array of arrays, return all elements in a single array. You must use recursion.
*/

const flatten = arrays =>
  arrays.some(elem => Array.isArray(elem)) ?
    flatten(arrays.flat()) : arrays;
// uses recursion as required
// time complexity: O(N*L) for N elements in the array and L levels of nesting
// space complexity: O(N*L) also due to call stack

function flatten(arrays) {
  let i = 0;
  while (i < arrays.length) {
    while (Array.isArray(arrays[i])) {
      arrays.splice(i, 1, ...arrays[i]);
    }
    i++;
  }
  return arrays;
}
// time complexity: O(F+S) for F elements in the fully flattened array and S subarrays
// space complexity: O(1)
// but no recursion


// test
console.log(flatten([140, [450], [[[990]]]])); // [140,450,990]
console.log(flatten([[1, 1], [4], 3, [3], 4, [6, 7]])); // [1,1,4,3,3,4,6,7]
console.log(flatten([1, 2, [3], 4, [5, [6], 7]])); // [1,2,3,4,5,6,7]
console.log(flatten([5, [], [], [5], [], 5])); // [5,5,5]
console.log(flatten([[10], [20, 30], [40]])); // [10,20,30,40]
console.log(flatten([[], [], [9], []])); // [9]