/*
Given an array of numbers and a desired sum, return the 
earliest-starting subarray of length num whose entries add up 
to sum from the input array. Return false if no such subarray 
exists.
*/

function someSums(array, sum, num, sub = []) {
  // base cases
  if (num === 1) {
    for (let x of array) {
      if (x === sum) return sub.concat(x);
    }
    return false;
  }
  // recursive cases:
  for (let i = 0; i < array.length; i++) {
    result = someSums(
      [...array.slice(0, i), ...array.slice(i + 1)],
      sum - array[i], num - 1, [...sub, array[i]]
    );
    if (result) return result;
  }
  return false;
}
// time complexity: O(N^K) for array length N and num K
// space complexity: O(N*K) for array copies in recursions


// tests
console.log(someSums([1, 2, 1, 1, 5, 3, 7, 5, 9, 6, 4, 2])); // [1,3]
console.log(someSums([12, 12, 12, 12, 12, 12, 2])); // false
console.log(someSums([1, 2, 3, 6, 3])); // [1,2,3]
console.log(someSums([1, 3, 6, 9, 16, 1, 18, 18, 3])); // [1,16,1]
console.log(someSums([1, 6, 7, 8, 12, 4])); // false
console.log(someSums([-1, -6, -2, -10, 4, 5, 1, -2, -10, 3])); // [-1,-10,1]
console.log(someSums([1, 4, 1, 1, 1, 1, 2, 3, 5, 2])); // [1,4]
console.log(someSums([1, 1, 1])); // [1]
console.log(someSums([1, 2, 3, 1, 5, 8, 13, 21, 34, 1, 1, 2, 3, 5, 8, 13, 21, 32, 6])); // [1,2,3,5,8,13]