/*
Determine whether an integer is a palindrome. An integer is a 
palindrome when it reads the same backward as forward.
*/

var isPalindrome = function (x) {
  s = x.toString();
  return s === s.split('').reverse().join('');
};


// tests
console.log(isPalindrome(0));
console.log(isPalindrome(1));
console.log(isPalindrome(999999999));
console.log(isPalindrome(232343454343232));
console.log(isPalindrome(88));
console.log(isPalindrome(777));
console.log(!isPalindrome(-2));
console.log(!isPalindrome(-101));
console.log(!isPalindrome(1212));
console.log(!isPalindrome(643460));
console.log(!isPalindrome(11101011));
