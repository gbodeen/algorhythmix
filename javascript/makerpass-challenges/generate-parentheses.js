/*
Given n pairs of parentheses, write a function to generate all combinations 
of well-formed parentheses.
*/

function generateParentheses(n) {
  function parens(opens, closes, combos = ['']) {
    // base case
    if (!opens && !closes) return combos;

    // recursive cases
    let opencombos = [], closecombos = [];
    if (opens) {
      opencombos = combos.map(str => str + '(');
      opencombos = parens(opens - 1, closes, opencombos);
    }
    if (closes && opens < closes) {
      closecombos = combos.map(str => str + ')');
      closecombos = parens(opens, closes - 1, closecombos);
    }
    return [].concat(opencombos, closecombos);
  }

  return parens(n, n);
}
/* 
time complexity: I could tell it was related to a factorial, but I had 
to check OEIS to determine the exact formula: O((2n)!/(n!(n+1)!)). It makes 
sense in retrospect because for each n, there will be 2 recursions at lower
values, one of which bottoms out at 0 and the other at 1. 
*/
// space complexity: the same

// tests
console.log(generateParentheses(0)); // [""]
console.log(generateParentheses(1)); // ["()"]
console.log(generateParentheses(2)); // ["(())","()()"]
console.log(generateParentheses(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParentheses(4)); // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
console.log(generateParentheses(5)); // ["((((()))))","(((()())))","(((())()))","(((()))())","(((())))()","((()(())))","((()()()))","((()())())","((()()))()","((())(()))","((())()())","((())())()","((()))(())","((()))()()","(()((())))","(()(()()))","(()(())())","(()(()))()","(()()(()))","(()()()())","(()()())()","(()())(())","(()())()()","(())((()))","(())(()())","(())(())()","(())()(())","(())()()()","()(((())))","()((()()))","()((())())","()((()))()","()(()(()))","()(()()())","()(()())()","()(())(())","()(())()()","()()((()))","()()(()())","()()(())()","()()()(())","()()()()()"]
console.log(generateParentheses(6)); // ["(((((())))))","((((()()))))","((((())())))","((((()))()))","((((())))())","((((()))))()","(((()(()))))","(((()()())))","(((()())()))","(((()()))())","(((()())))()","(((())(())))","(((())()()))","(((())())())","(((())()))()","(((()))(()))","(((()))()())","(((()))())()","(((())))(())","(((())))()()","((()((()))))","((()(()())))","((()(())()))","((()(()))())","((()(())))()","((()()(())))","((()()()()))","((()()())())","((()()()))()","((()())(()))","((()())()())","((()())())()","((()()))(())","((()()))()()","((())((())))","((())(()()))","((())(())())","((())(()))()","((())()(()))","((())()()())","((())()())()","((())())(())","((())())()()","((()))((()))","((()))(()())","((()))(())()","((()))()(())","((()))()()()","(()(((()))))","(()((()())))","(()((())()))","(()((()))())","(()((())))()","(()(()(())))","(()(()()()))","(()(()())())","(()(()()))()","(()(())(()))","(()(())()())","(()(())())()","(()(()))(())","(()(()))()()","(()()((())))","(()()(()()))","(()()(())())","(()()(()))()","(()()()(()))","(()()()()())","(()()()())()","(()()())(())","(()()())()()","(()())((()))","(()())(()())","(()())(())()","(()())()(())","(()())()()()","(())(((())))","(())((()()))","(())((())())","(())((()))()","(())(()(()))","(())(()()())","(())(()())()","(())(())(())","(())(())()()","(())()((()))","(())()(()())","(())()(())()","(())()()(())","(())()()()()","()((((()))))","()(((()())))","()(((())()))","()(((()))())","()(((())))()","()((()(())))","()((()()()))","()((()())())","()((()()))()","()((())(()))","()((())()())","()((())())()","()((()))(())","()((()))()()","()(()((())))","()(()(()()))","()(()(())())","()(()(()))()","()(()()(()))","()(()()()())","()(()()())()","()(()())(())","()(()())()()","()(())((()))","()(())(()())","()(())(())()","()(())()(())","()(())()()()","()()(((())))","()()((()()))","()()((())())","()()((()))()","()()(()(()))","()()(()()())","()()(()())()","()()(())(())","()()(())()()","()()()((()))","()()()(()())","()()()(())()","()()()()(())","()()()()()()"]
