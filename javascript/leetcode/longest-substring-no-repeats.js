/*
Given a string, find the length of the longest substring without repeating characters.
*/

// var lengthOfLongestSubstring = function(s) {
//   let lens = [0], len = 0, uniques;
//   for (let i=0; i < s.length - len; i++) {
//     for (let j = i + 1 + len; j <= s.length; j++) {
//       uniques = (new Set(s.slice(i,j))).size;
//       if (uniques > len) {
//         len = uniques;
//       } else {
//         break;
//       }
//     }
//   }
//   return len;
// };
// time complexity: O(n^3) ... bad
// space complexity: O(n);

// var lengthOfLongestSubstring = function (s) {
//   let len = 0, max = 0, dict;
//   for (let i = 0; i < s.length - max; i++) {
//     dict = { [s[i]]: true };
//     len = 1;
//     for (let j = i + 1; j < s.length; j++) {
//       if (dict[s[j]]) break;
//       dict[s[j]] = true;
//       len++;
//     }
//     if (len > max) max = len;
//   }
//   return max;
// };
// time complexity: O(n^2) now... but the runtime was much slower? Weird.
// space: still O(n)

var lengthOfLongestSubstring = function (s) {
  let start = -1, max = 0, lastCharIdx = {}, char, idx, len;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    idx = lastCharIdx[char];
    if (idx > start) {
      start = idx;
    }
    lastCharIdx[char] = i;

    len = i - start;
    if (len > max) {
      max = len;
    }
  }
  return max;
};
// time complexity: O(n)
// space complexity: O(n) also

// tests
console.log(lengthOfLongestSubstring('abcdefg') === 7);
console.log(lengthOfLongestSubstring('aaabcdefg') === 7);
console.log(lengthOfLongestSubstring('aaabcdefgggg') === 7);
console.log(lengthOfLongestSubstring('abccdefg') === 5);
console.log(lengthOfLongestSubstring('abbcdeefg') === 4);
console.log(lengthOfLongestSubstring('') === 0);
console.log(lengthOfLongestSubstring('x') === 1);
console.log(lengthOfLongestSubstring('xx') === 1);
console.log(lengthOfLongestSubstring('xyxyxyx') === 2);
console.log(lengthOfLongestSubstring('evdefdg') === 4);
console.log(lengthOfLongestSubstring('aababcabcdabcaba') === 4);