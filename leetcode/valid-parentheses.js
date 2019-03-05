/*
Given a string containing just the characters '(', ')', '{', '}', 
'[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

var isValid = function (s) {
  const stack = [];
  let result = true;
  for (let c of s) {
    c === '(' ? stack.push(')') :
      c === '[' ? stack.push(']') :
        c === '{' ? stack.push('}') :
          c === stack.pop() ? null : result = false;
  }
  return !stack.length && result;
};


// tests
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('([{()}])'));
console.log(isValid('((((') === false);
console.log(isValid('(') === false);
console.log(isValid(''));
console.log(isValid(')(') === false);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('((([[]]((({()}{}{{[]{[]}}}))[]))))[]'));