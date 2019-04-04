/*
Given an input string (s) and a pattern (p), 
implement regular expression matching with support for '.' and '*'.
The matching should cover the entire input string (not partial).

Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
*/


// cheaty answer:
// var isMatch = function(s, p) {
//   return (new RegExp('^' + p + '$')).test(s);
// }

var isMatch = function (s, p) {
  const atoms = [];
  for (let c of p) {
    if (c === '*') {
      atoms[atoms.length - 1] += c;
    } else {
      atoms.push(c);
    }
  }

  function matcher(substr, [first, ...rest]) {
    if (!first) { // no more regex to check, make sure we're done.
      return substr.length === 0;
    } else if (first === '.') { // accept any char and move on
      return substr.length >= 1 && matcher(substr.slice(1), rest);
    } else if (first.length === 1) { // move on only if char matches
      return substr[0] === first ? matcher(substr.slice(1), rest) : false;
    } else if (first === '.*') { // start greedy & backtrack
      for (let i = substr.length; i >= 0; i--) {
        if (matcher(substr.slice(i), rest)) return true;
      }
      return false;
    } else if (first.length === 2 && first[1] === '*') {
      let c = first[0];
      outer:
      for (let i = substr.length; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
          if (substr[j] !== c) continue outer; // backtrack if not all chars match
        }
        if (matcher(substr.slice(i), rest)) return true;
      }
      return false;
    } else {
      throw ['error: unexpected input', first]; // shouldn't ever run
    }
  }

  return matcher(s, atoms);
};
// Backtracking method was easier with recursion.


// tests
console.log(!isMatch('ss', 'a'));
console.log(isMatch('aa', 'a*'));
console.log(isMatch('ab', '.*'));
console.log(isMatch('aab', 'c*a*b'));
console.log(!isMatch('mississippi', 'mis*is*p*.'));
console.log(!isMatch('', '.'));
console.log(isMatch('', '.*'));
console.log(isMatch('', 'x*'));
console.log(isMatch('', ''));
console.log(!isMatch('z', ''));
console.log(isMatch('aaaaaaaa', 'aa*a*aa'));