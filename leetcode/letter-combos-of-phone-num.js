/*
Given a string containing digits from 2-9 inclusive, return all 
possible letter combinations that the number could represent.
*/

const keypad = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  if (digits.length === 1) return keypad[digits];

  const subseq = letterCombinations(digits.slice(1));
  const result = [];
  for (let char of keypad[digits[0]]) {
    for (let str of subseq) {
      result.push(char + str);
    }
  }
  return result;
};
// time complexity: worst case n^4 for string of length n
// space complexity: same

// tests 
console.log(letterCombinations('')); // []
console.log(letterCombinations('7'));
// ['p','q','r','s']
console.log(letterCombinations('23'));
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations('234'));