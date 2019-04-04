/*
Given a string of arbitrary size, convert each character into 
its integer equivalent and sum the entirety.
*/

// using HOFs:
function charSum(str) {
  return str.split('')
    .map(x => parseInt(x) || 0)
    .reduce((sum, x) => sum + x, 0);
}
// time complexity: O(n) for string of length n
// space complexity: O(n) due to the map

// to reduce the space complexity to O(1):
function charSum(str) {
  let sum = 0;
  for (let c of str) sum += parseInt(c) || 0;
  return sum;
}


// tests
console.log(charSum("1010101010")); // 5
console.log(charSum("571823451348543")); // 63
console.log(charSum("123")); // 6
console.log(charSum("541")); // 10
console.log(charSum("0101")); // 2
console.log(charSum("so cool!!1!")); // 1
console.log(charSum("10752724510")); // 34
console.log(charSum("45362236433")); // 41