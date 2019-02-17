/*
Given a string, return true if it contains balanced parenthesis ()
*/

function isBalanced(string) {
  let count = 0;
  for (let c of string) {
    if (c === '(') count++;
    if (c === ')') count--;
    if (count < 0) return false;
  }
  return count === 0;
}
// time complexity: O(n) for string of length (n)
// space complexity: O(1)

// tests
console.log(isBalanced('(x + y) - (4)')); // true - easy
console.log(isBalanced('()()()3(()((()((()(()(()())))()))()))')); // true - more nested
console.log(isBalanced('((((((((((1)2)3)4)5)6)7)8)9)0)')); // true - very nested
console.log(isBalanced('.(((10 ) (,)) ((?)(:)))')); // true - with whitespace & special characters
console.log(isBalanced('')); // true - vacuously
console.log(isBalanced(')()')); // false - easy
console.log(isBalanced('(50)(')); // false - easy, with other characters
console.log(isBalanced('()(()()()())((()(()()))')); // false - longer
console.log(isBalanced(')(')); // false - numbers match but not order
console.log(isBalanced(')))()(((')); // false, with some correctness in the middle


