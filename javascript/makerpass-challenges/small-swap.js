/*
Given an array of negative/positive integers, swap the smallest 
element of the array with the first element of the array.
*/

function smallSwap(numbers) {
  if (!numbers.length) return numbers;
  const min = numbers.indexOf(Math.min(...numbers));
  [numbers[0], numbers[min]] = [numbers[min], numbers[0]];
  return numbers;
}
// time complexity: linear
// space complexity: constant


// tests
console.log(smallSwap([])); // []
console.log(smallSwap([1])); // [1]
console.log(smallSwap([1, 2, 3])); // [1,2,3]
console.log(smallSwap([4, 3, 2, 0, 2])); // [0,3,2,4,2]
console.log(smallSwap([5, 7, 2, 9])); // [2,7,5,9]
console.log(smallSwap([0, 2, 0, -5])); // [-5,2,0,0]
console.log(smallSwap([6, 9, 7, 5, 2, 4, 6, 8, 5, 5, -7, 6, 5, -7, -9, -6, -4, 7, 4, -5, -5, 4, 2, 1])); // [-9,9,7,5,2,4,6,8,5,5,-7,6,5,-7,6,-6,-4,7,4,-5,-5,4,2,1]
