/* 
Create a function that takes two arrays and determine whether the second array 
is a subset of the first array. Arrays will only contain primitive values.
*/
function isSubset(array, sub) {
  return JSON.stringify(array).slice(1, -1).includes(
    JSON.stringify(sub).slice(1, -1));
}
// time complexity: O(N*M) for arrays of length N & M
// space complexity: O(N+M)
// (The JSON.stringify should stay linear since we're 
//   only dealing with primitives.)


// tests
console.log(isSubset([2, 3, 3, "a"], [3, 3, 3, "a"])) // false
console.log(isSubset([1, 2, 3], ["2", "3"])) // false - use strict equality not loose
console.log(isSubset([1, 2, 3, 4], [2, 3, 4])) // true
console.log(isSubset([2, 2, 2, 3, 4], [2, 4, 3])) // false
console.log(isSubset([0], [false])) // false
console.log(isSubset([27, 42, "omaha", false], [27, 42, "omaha", false])) // true
console.log(isSubset([2], [])) // true, technically