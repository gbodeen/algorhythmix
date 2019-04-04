/*
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.
*/

var longestPalindrome = function (s) {
  let start, max = '';
  for (let mid = 0; mid < s.length - 0.5; mid += 0.5) {
    for (let end = Math.ceil(mid); end < s.length; end++) {
      start = mid - (end - mid);
      if (s[end] !== s[start]) break;
      if (end + 1 - start > max.length) max = s.slice(start, end + 1);
    }
  }
  return max;
};
// first attempt - 
// time complexity: O(n^2), space complexity: O(n).

// can it be reduced to O(n)?
// yes, technically, though still with loops-in-loops, with Manacher's algorithm.
// it "cheats", though, by short-circuiting cleverly.
// but my algorithm isn't suited to that.


// tests
console.log(longestPalindrome('')); // ''
console.log(longestPalindrome('a')); // 'a'
console.log(longestPalindrome('ab')); // 'a'
console.log(longestPalindrome('abb')); // 'bb'
console.log(longestPalindrome('abba')); // 'abba'
console.log(longestPalindrome('fabbcbbad')); // 'abbcbba'
console.log(longestPalindrome('eefgfabccbarnuxunrabcbagfgll')); // 'cbarnuxunrabc'
console.log(longestPalindrome('xxyy')); // 'xx'
console.log(longestPalindrome('xywzab')); // 'x'
console.log(longestPalindrome('xyxyxy')); // 'xyxyx'
console.log(longestPalindrome('ddddevfve')); // 'evfve'
console.log(longestPalindrome('evffvenunkkkkk')); // 'evffve'
console.log(longestPalindrome('cheezy')); // 'ee'
console.log(longestPalindrome('roobbber')); // 'bbb'