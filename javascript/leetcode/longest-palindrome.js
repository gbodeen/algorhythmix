/*
Given a string which consists of lowercase or uppercase 
letters, find the length of the longest palindromes that 
can be built with those letters.

This is case sensitive, for example "Aa" is not considered 
a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.
*/

var longestPalindrome = function (s) {
  const dict = {};
  for (let c of s) {
    dict[c] = (dict[c] || 0) + 1;
  }
  let allEven = true;
  return Object.values(dict).reduce((evenSum, x) => {
    if (x & 1) {
      allEven = false;
      return evenSum + x - 1;
    }
    return evenSum + x;
  }, 0) + (allEven ? 0 : 1);
};
// time complexity: O(n)
// space complexity: O(n)


// tests
console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("aaa")); // 3
console.log(longestPalindrome("aaaa")); // 4
console.log(longestPalindrome("aabbcc")); // 6
console.log(longestPalindrome("aaabbbccc")); // 7
