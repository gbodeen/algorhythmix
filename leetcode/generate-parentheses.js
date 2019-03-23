/*
Given n pairs of parentheses, write a function to generate all 
combinations of well-formed parentheses.

For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

var generateParenthesis = function (n) {
  function parens(opens, closes) {
    if (opens === 0 && closes === 0) {
      return [''];
    } else if (opens === closes) { // opens should never be greater than closes
      return parens(opens - 1, closes).map(str => '(' + str);
    } else if (opens < closes && opens > 0) {
      return [].concat(parens(opens - 1, closes).map(str => '(' + str),
        parens(opens, closes - 1).map(str => ')' + str));
    } else { // opens < closes && opens === 0
      return parens(opens, closes - 1).map(str => ')' + str);
    }
  }

  return parens(n, n);
};


// tests
console.log(generateParenthesis(0));
console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));